import { color } from "framer-motion";

let isInsideQuotation = false;
let isInsideSemiColon = false;
let lastCharSlash = false;
let lastCharBackSlash = false;
let isInsideSimpleComment = false;
let isInsideComplexComment = false;

const variableObject = {
	nextWordVariable: false,
	nextWordFunction: false,
};

//keywords for splitting the text before formatting
const splitChars = [
	"=",
	'"',
	"'",
	"\\",
	"/",
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
	"*"
];

// key - Color used on the HTML tag
// text - word to color
// conditionals - variables needed to add the color, if start with !, is turn to false, if not, to true 
// variables - change the value of that variable inside variableObject, if start with !, is turn to false, if not, to true 
const formats = {
	JSX: [
		{ color : "$#179DFC", text: ["[", "]"]},
		{ color: "$#225589", text: ["export", "default", "=", "+", "-", "/", "*", "!", "return"], variables: []},
		{ color: "$#225588", text: ["import"], variables: ["nextWordVariable"]},
		{ color: "$#22558A", text: ["from"], variables: ["!nextWordVariable"]},
		{ color: "$#9966B8", text: ["function"], variables: ["nextWordFunction"]},
		{ color: "$#9966B9", text: ["."], variables: ["!nextWordFunction"]},
		{ color: "$#9966BA", text: ["(", ")"], variables: ["!nextWordFunction"]},
		{ color: "$#9966BB", text: ["var", "const", "let"]},
		{ color: "$#F280D0", text: ["{"], conditions:[ "insideElement"], variables : ["insideElementJSX"] },
		{ color: "$#F280D0", text: ["}"], variables:[ "!insideElementJSX"] },
		{ color: "$#F280D0", text: ["false", "true", "{", "}"]},
		{ color: "$#9966B8", text: null, conditions:[ "nextWordElement"], variables: ["!nextWordElement"] },
		{ color: null, text: ["<"], variables : ["nextWordElement", "insideElement"]},
		{ color: null, text: [">"], variables : ["!insideElement"]},
		{ color: null, text: null, conditions:[ "insideElement", "insideElementJSX"] },
		{ color: "$#DDBB88", text: null, conditions:[ "insideElement"], variables: [""] },
	]
};

export function formatCodeText(codeTextRows, archiveType) {
	//resetting all variables
    isInsideQuotation = false;
	isInsideSemiColon = false;
	lastCharBackSlash = false;
	isInsideSimpleComment = false;
    
	variableObject.nextWordVariable = false;
	variableObject.nextWordFunction = false;
    
	const newCodeTextRows = [];

	codeTextRows.forEach((row) => {
		let newCodeTextRow = "";
		const splitRow = splitRowByChars( row );
		for (let index = 0; index < splitRow.length; index++) {
			const word = splitRow[index];
			newCodeTextRow += colorWord(word, index, splitRow);
		}
		newCodeTextRows.push(newCodeTextRow);
	});
	
	return newCodeTextRows;
}

function splitRowByChars( row ) {
	const splittedRow = [];
	const rowChars = [...row];
	let startPosition = 0;

	for (let index = 0; index < rowChars.length; index++) {
		const letter = rowChars[index];
		if ( splitChars.indexOf( letter ) != -1 ) {
			//if the last also was a splitChar
			if ( index - startPosition != 0) {
				splittedRow.push( row.substr(startPosition, index - startPosition) );
			}
			splittedRow.push( letter );
			startPosition = index + 1;
		}		
	}

	splittedRow.push( row.substr(startPosition) );

	return splittedRow;
}

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

	let returnWord = colorFormats( coloredWord, wordTrimmed );
	if (returnWord != "") {
		return returnWord;
	}

	return coloredWord;
}

function colorFormats( coloredWord, wordTrimmed ) {

	let returnWord = "";

	formats.JSX.every((wordColor) => {

		let conditionsFulfilled = true;
		let wordFound = false;

		if ( !wordColor.text ) {
			wordFound = true;
		}else{
			wordColor.text.forEach((word) => {
				if (wordTrimmed == word) {
					wordFound = true;
					return;
				}
			});
		}
		
		if ( !wordFound ) {
			return true;;
		}

		if ( wordColor.conditions ) {
			wordColor.conditions.forEach((condition) => {
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

		if ( wordColor.color ) {
			returnWord = wordColor.color + coloredWord + "#$";
		}
		if ( wordColor.variables ) {
			wordColor.variables.forEach((variable) => {
				if (variable.startsWith("!")) {
					variableObject[variable.substr(1)] = false;
				} else {
					variableObject[variable] = true;
				}
			});
		}

		return false;
	});

	return returnWord;
}

function colorComment( coloredWord, wordTrimmed, index, row ) {

	//comments
	if (isInsideSimpleComment) {
		if ( !row[index + 1] ) {
			isInsideSimpleComment = false;
			lastCharSlash = false;
			return coloredWord + "#$";
		} else {
			return coloredWord;
		}
	}
	if ( isInsideComplexComment ) {
		if ( wordTrimmed == "/" ) {
			let lastWordTrimmed = "";
			if ( row[index - 1] ) {
				lastWordTrimmed = row[index - 1].trim();
			}
			if ( lastWordTrimmed == "*" ) {
				isInsideComplexComment = false;
				return coloredWord + "#$";
			}
		}
		return coloredWord;
	}
	if (wordTrimmed == "/") {
		let nextWordTrimmed = "";
		if ( row[index + 1] ) {
			nextWordTrimmed = row[index + 1].trim();
		}
		if (nextWordTrimmed == "/") {
			isInsideSimpleComment = true;
			return "$#384887" + coloredWord;
		}
		if ( nextWordTrimmed == "*" ) {
			isInsideComplexComment = true;
			return "$#384887" + coloredWord;
		}
	}

}