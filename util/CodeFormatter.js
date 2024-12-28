import { color } from "framer-motion";

let isInsideQuotation = false;
let isInsideSemiColon = false;
let lastCharBackSlash = false;

const variableObject = {
	nextWordFunction: false,
	isInsideHTML : false,
};

//keywords for splitting the text before formatting
const splitChars = [
	"=",
	'"',
	"'",
	"\\",
	"(",
	")",
	"{",
	"}",
	"[",
	"]",
	".",
	";",
	" ",
	",",
	"+",
	"-",
	"!",
	"<",
	">",
	"\r",
	"\n",
	"/",
	"*"
];

//languages that use slash to create a comment (also /*)
const slashCommentTypes = [
	"js",
	"java",
	"cs",
	"jsx",
	"html",
	"css"
]

/* 
	key - Color used on the HTML tag
	text - word to color
	conditionals - variables needed to add the color, if start with !, is turn to false, if not, to true 
 	variables - change the value of that variable inside variableObject, if start with !, is turn to false, if not, to true 
 */
const formats = {
	JSX: [
		//HTML
		{ color: null, text: ["/"], conditions:[ "isInsideHTML"], variables: [""] },
		{ color: "$#9966B8", text: [/^[A-Z]/g], conditions:[ "nextWordElement", "isInsideHTML"], variables: ["!nextWordElement"] },
		{ color: "$#225589", text: null, conditions:[ "nextWordElement", "isInsideHTML"], variables: ["!nextWordElement"] },
		{ color: null, text: ["<"], conditions: ["isInsideHTML"], variables : ["nextWordElement", "insideElement"]},
		{ color: null, text: [">"], conditions: ["isInsideHTML"], variables : ["!insideElement"]},
		{ color: "$#DDBB88", text: null, conditions:[ "insideElement", "isInsideHTML"], variables: [""] },
		//JS
		{ color : "$#179DFC", text: ["[", "]"]},
		{ color: "$#9966BB", text: ["var", "const", "let"]},
		{ color: "$#225589", text: ["export", "default", "=", "+", "-", "/", "*", "!", "<", ">", "return"], variables: []},
		{ color: "$#225588", text: ["import", "new"]},
		{ color: "$#22558A", text: ["from"] },
		{ color: "$#9966B8", text: ["function"], variables: ["nextWordFunction"]},
		{ color: "$#9966B9", text: ["."], variables: ["!nextWordFunction"]},
		{ color: "$#DDBB88", searchPos: 1, text: ["("]},
		{ color: "$#DA70D6", text: ["("], variables: ["!nextWordFunction"]},
		{ color: "$#DA70D6", text: [")"], variables: [""]},
		{ color: "$#DDBB88", text: null, conditions:[ "nextWordFunction"], variables: ["!nextWordFunction"] },
		{ color: "$#F280D0", text: ["false", "true", "{", "}", "null"]},
		{ color: "$#F280D0", text: [/^\d+$/g]},
	]
};

export function formatCodeText( completeFile , archiveType) {
	const time = performance.now();

	//resetting all variables
    isInsideQuotation = false;
	isInsideSemiColon = false;
	lastCharBackSlash = false;
    
	variableObject.nextWordVariable = false;
	variableObject.nextWordFunction = false;
	variableObject.isInsideHTML = false;
    
	const newSplitCompleteFile = [];
	const splitCompleteFile = splitFileByChars( completeFile );
	const elementIndexes = findHTMLElementIndexes( splitCompleteFile );

	const splitRows = splitFileToRows( splitCompleteFile );
	let globalIndex = 0;

	splitRows.forEach((splitRow) => {
		
		let coloredRow = [];
		for (let index = 0; index < splitRow.length; index++) {
			const word = splitRow[index];
			variableObject.isInsideHTML = elementIndexes.indexOf( globalIndex + index ) != -1;
			const coloredFragment = colorWord(word, index, splitRow);

			if ( Array.isArray( coloredFragment ) ) {
				coloredRow.push( coloredFragment[0] );
				if ( coloredFragment.length > 1) {
					newSplitCompleteFile.push( coloredRow.join("") );
					coloredRow = [];
					
					for (let index = 1; index < coloredFragment.length -1; index++) {
						const newLine = coloredFragment[index];
						newSplitCompleteFile.push( newLine );
					}
					
					coloredRow.push( coloredFragment[coloredFragment.length - 1] );
				}
			}else{
				coloredRow.push( coloredFragment );
			}
		}
		//we sum two bc \r and \n are ignored every lane
		globalIndex += splitRow.length + 2;
		newSplitCompleteFile.push( coloredRow.join("") );
	});
	
	console.log( performance.now() - time + "ms" );
	return newSplitCompleteFile;
}

//Split the row each time it find a value on splitChars
//Use it to split value characters and not going for each char on string
function splitFileByChars( text, archiveType ) {
	const splittedRow = [];
	const rowChars = [...text];
	let startPosition = 0;

	//ignore what is in between those characters
	//when there are comment characters inside string, we should ignore
	let insideComment = ['"', "'", "`", "´"];
	let lastCommentChar = null;

	//slash comment types
	let insideSimpleComment = false; 
	let insideMultipleComment = false; 

	for (let index = 0; index < rowChars.length; index++) {
		const letter = rowChars[index];

		if ( startPosition > index ) {
			continue;
		}

		if ( !lastCommentChar ) {
			if ( insideSimpleComment ) {
				if ( letter == "\r") {
					if ( index + 1 < rowChars.length ) {
						const nextLetter = rowChars[index+1];
						if ( nextLetter == "\n" ) {
							insideSimpleComment = false;			
							if ( index - startPosition != 0) {
								splittedRow.push( text.substr(startPosition, index - startPosition) );
							}
							splittedRow.push( letter );
							startPosition = index + 1;
							continue;
						}
					}
				}

				continue;
			}

			if ( insideMultipleComment ) {
				if ( letter == "*" ) {
					if ( index + 1 < rowChars.length ) {
						const nextLetter = rowChars[index+1];
						if ( nextLetter == "/" ) {
							insideMultipleComment = false;
							if ( index - startPosition != 0) {
								splittedRow.push( text.substr(startPosition, index + 2 - startPosition) );
							}
							startPosition = index + 2;
							continue;
						}
					}
				}

				continue;
			}

			if (  slashCommentTypes.indexOf(archiveType) ) {
				if ( letter == "/" ) {
					if ( index + 1 < rowChars.length ) {
						const nextLetter = rowChars[index+1];
						if ( nextLetter == "/" ) {
							insideSimpleComment = true;
							continue;
						}
						if ( nextLetter == "*") {
							insideMultipleComment = true;
							continue;
						}
					}
				}
			}
		}

		//if is something we should start to ignore, we ignore until the character appears again
		if ( lastCommentChar ) {
			if ( lastCommentChar == letter ) {
				lastCommentChar = null;
			}
		}else{
			let insideCommentChar;
			insideComment.every( ( ignore ) => {
				if ( letter == ignore ) {
					insideCommentChar = ignore;
					return false;
				}
				return true;
			} );

			if ( insideCommentChar ) {
				lastCommentChar = insideCommentChar;
			}
		}

		if ( splitChars.indexOf( letter ) != -1 ) {
			//if the last also was a splitChar
			if ( index - startPosition != 0) {
				splittedRow.push( text.substr(startPosition, index - startPosition) );
			}
			splittedRow.push( letter );
			startPosition = index + 1;
		}		
	}

	splittedRow.push( text.substr(startPosition) );

	return splittedRow;
}

//Split file in rows.
//Every row ends when /r/n is found .1
///r/n is not inside the rows that are return.
function splitFileToRows( splitCompleteFile ) {
	const rows = [];
	let lastRowIndex = 0;

	for (let index = 0; index < splitCompleteFile.length; index++) {
		const split = splitCompleteFile[index];
		if ( split == "\r") {
			if ( index + 1 < splitCompleteFile.length ) {
				const nextSplit = splitCompleteFile[index+1];
				if ( nextSplit == "\n" ) {
					rows.push( splitCompleteFile.slice( lastRowIndex, index ) )
					lastRowIndex = index + 2;
				} 
			}
		}
	}

	rows.push( splitCompleteFile.slice( lastRowIndex ) )

	return rows;
}

//Function that analyze the coloredWord with the format of the file
//and then add a code to color later, the color code is $#hexcolor #$
function colorWord(coloredWord, index, row) {
	if (coloredWord.trim() == "" && row[index + 1]) {
		return coloredWord;
	}
	const wordTrimmed = coloredWord.trim();
	

	let newValue = colorComment( coloredWord, wordTrimmed, index, row )
	if ( newValue ) {
		return newValue;
	}

	//\
	//TODO IMPROVE
	if (lastCharBackSlash) {
		lastCharBackSlash = false;
		if (isInsideQuotation || isInsideSemiColon) {
			return coloredWord + "#$$#22AA44";
		}
		return coloredWord + "#$";
	}
	if (wordTrimmed == "\\") {
		lastCharBackSlash = true;
		if (isInsideQuotation || isInsideSemiColon) {
			return "#$$#F280D0" + coloredWord;
		}
		return "$#F280D0" + coloredWord;
	}

	//""
	if (!isInsideSemiColon) {
		if (isInsideQuotation) {
			if (wordTrimmed == '"' || !row[index + 1]) {
				isInsideQuotation = false;
				return coloredWord + "#$";
			}
			return coloredWord;
		}
		if (wordTrimmed == '"') {
			isInsideQuotation = true;
			return "$#22AA44" + coloredWord;
		}
	}

	//''
	if (isInsideSemiColon) {
		if (wordTrimmed == "'" || !row[index + 1]) {
			isInsideSemiColon = false;
			return coloredWord + "#$";
		}
		return coloredWord;
	}

	if (wordTrimmed == "'") {
		isInsideSemiColon = true;
		return "$#22AA44" + coloredWord;
	}

	let returnWord = colorFormats( coloredWord, index, row );
	if (returnWord != "") {
		return returnWord;
	}

	return coloredWord;
}

function findHTMLElementIndexes( splitCompleteRow ) {
	
	const charOutsideHTML = ["|","||","&", ".", "(", ")", ","]
	const ignoreBetweens = ['"', "'", "`", "´", ["{", "}"]];

	const insideElementIndexes = [];
	const [ openTags, closeTags ] = findOpenAndCloseTags( splitCompleteRow );
	
	//If is valid, make string between openTag and closeTag, to be element valid
	//it can't have any strange different, only text, string, equals signs and if is JSX, also can have brackets.
	//Things inside string and brackets should be ignore
	openTags.every( (openTag) => {

		closeTags.every( ( closeTag ) => {

			//if closeTag is before openTag, exit
			if ( closeTag < openTag ) {
				return true;
			}

			const insideElement = splitCompleteRow.slice( openTag, closeTag + 1);
			
			let element = []
			let illegalHTML = false;
			let ignoreUntil = null;

			insideElement.every( (char, index) => {

				//if is something we should start to ignore, we ignore until the character appears again
				if ( ignoreUntil ) {
					if ( ignoreUntil == char ) {
						ignoreUntil = null;
					}
					return true;
				}else{
					let ignoreChar;
					ignoreBetweens.every( ( ignore ) => {
						if ( Array.isArray( ignore )  ) {
							if ( ignoreUntil ) {
								if ( char == ignore[1] ) {
									ignoreChar = ignore[1];
									return false;
								}
							}else{
								if ( char == ignore[0] ) {
									ignoreChar = ignore[1];
									return false;
								}
							}
						}else{
							if ( char == ignore ) {
								ignoreChar = ignore;
								return false;
							}
						}
						return true;
					} );

					if ( ignoreChar ) {
						ignoreUntil = ignoreChar;
						return true;
					}
				}
				if ( charOutsideHTML.indexOf( char ) != -1 ) {
					illegalHTML = true;
					return false;
				}

				element.push( openTag + index );

				return true;
			} );

			if( illegalHTML ) {
				return false;
			}
			if ( ignoreUntil ) {
				return true;
			}

			insideElementIndexes.push( ...element )
			return false;
		} );

		return true;

	} )

	return insideElementIndexes;
}


//function that returns two arrays:
//First Array: all the indexes of open tags that are not inside string
//Second Array: all the indexes of close tags that are not inside string
function findOpenAndCloseTags( splitCompleteRow ) {

	let ignoreUntil = null;

	//ignore what is in between those characters
	let ignoreList = ['"', "'", "`", "´"];

	const openTags = [];
	const closeTags = [];

	splitCompleteRow.every( (split, index) => {

		//if is something we should start to ignore, we ignore until the character appears again
		if ( ignoreUntil ) {
			if ( ignoreUntil == split ) {
				ignoreUntil = null;
			}
			return true;
		}else{
			let ignoreChar;
			ignoreList.every( ( ignore ) => {
				if ( split == ignore ) {
					ignoreChar = ignore;
					return false;
				}
				return true;
			} );

			if ( ignoreChar ) {
				ignoreUntil = ignoreChar;
				return true;
			}
		}

		if ( split == "<" ) {
			openTags.push( index );
		}else if ( split == ">" ) {
			closeTags.push( index );
		}

		return true;
	} );

	return [ openTags, closeTags ];

}

function colorFormats( coloredWord, index, row ) {

	let returnWord = "";
	
	formats.JSX.every((format) => {
		
		//word trimmed
		//search position
		let searchIndex = index;
		if ( format.text ) {
			if ( format.searchPos ) {
				searchIndex += format.searchPos;
			} 
			
			if ( searchIndex >= row.length ) {
				return true;
			}
		}
		const wordTrimmed = row[searchIndex].trim();

		let conditionsFulfilled = true;
		let wordFound = false;

		//search text
		if ( !format.text ) {
			wordFound = true;
		}else{
			format.text.forEach((word) => {
				if ( word instanceof RegExp ) {
					if ( wordTrimmed.search(word) != -1 ) {
						wordFound = true;
						return;
					}
				}else{
					if (wordTrimmed == word) {
						wordFound = true;
						return;
					}
				}
			});
			
		}
		
		if ( !wordFound ) {
			return true;
		}

		//conditions
		if ( format.conditions ) {
			format.conditions.forEach((condition) => {
				if (condition.startsWith("!")) {
					if ( variableObject[condition.substr(1)] ) {
						conditionsFulfilled = false;
						return;
					}
				} else {
					if ( !variableObject[condition] ) {
						conditionsFulfilled = false;
						return;
					}
				}
			})
		}		

		if ( !conditionsFulfilled ) {
			return true;
		}

		//color
		if ( format.color ) {
			returnWord = format.color + coloredWord + "#$";
		}

		//variables
		if ( format.variables ) {
			format.variables.forEach((variable) => {
				if (variable.startsWith("!")) {
					variableObject[variable.substr(1)] = false;
				} else {
					variableObject[variable] = true;
				}
			});
		}

		if ( format.continue ) {
			return true;
		}
		return false;
	});

	return returnWord;
}

function colorComment( coloredWord, wordTrimmed, index, row ) {

	//comments

	let coloredComment;

	if ( wordTrimmed.startsWith("//") ) {
		coloredComment = "$#384887" + coloredWord + "#$";
	}
	if ( wordTrimmed.startsWith("/*") ) {
		let coloredRows = coloredWord.split("\n");
		coloredRows = coloredRows.map((row) =>{
			return "$#384887" + row + "#$";
		})
		coloredComment = coloredRows;
	}
	
	return coloredComment;
}