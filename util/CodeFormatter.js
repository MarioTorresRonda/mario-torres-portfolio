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
// variable - change the value of that variable inside variableObject, if start with !, is turn to false, if not, to true 
const wordColors = {
	"$#179DFC": {text: ["[", "]"], variables: []},
	"$#225589": {text: ["export", "default", "=", "+", "-", "!"], variables: []},
	"$#225588": {text: ["import"], variables: ["nextWordVariable"]},
	"$#22558A": {text: ["from"], variables: ["!nextWordVariable"]},
	"$#9966B8": {text: ["function"], variables: ["nextWordFunction"]},
	"$#9966B9": {text: ["."], variables: ["!nextWordFunction"]},
	"$#9966BA": {text: ["(", ")"], variables: ["!nextWordFunction"]},
	"$#9966BB": {text: ["var", "const", "let", "return"], variables: [""]},
	"$#F280D0": {text: ["false", "true", "{", "}"], variables: [""]},
};

export function formatCodeText(codeTextRows) {
	const time = performance.now();
    
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
			let nextWord = false;
			if ( index + 1 != splitRow.length ) {
				nextWord = splitRow[index + 1]
			}
			newCodeTextRow += colorWord(word, nextWord);
		}
		newCodeTextRows.push(newCodeTextRow);
	});
	
	console.log( performance.now() - time + "ms" );
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

function colorWord(coloredWord, nextWord) {
	if (coloredWord.trim() == "" && nextWord) {
		return coloredWord;
	}
	const wordTrimmed = coloredWord.trim();
	
	//comments
	if (isInsideSimpleComment) {
		if ( !nextWord ) {
			isInsideSimpleComment = false;
			lastCharSlash = false;
			return coloredWord + "#$";
		} else {
			return coloredWord;
		}
	}
	if ( isInsideComplexComment ) {
		if ( wordTrimmed == "*" ) {
			const nextWordTrimmed = nextWord ? nextWord.trim() : "";
			if ( nextWordTrimmed == "/" ) {
				isInsideComplexComment = false;
				return coloredWord + "#$";
			}
		}
		return coloredWord;
	}
	if (wordTrimmed == "/") {
		const nextWordTrimmed = nextWord ? nextWord.trim() : "";
		console.log( nextWordTrimmed );
		if (nextWordTrimmed == "/") {
			isInsideSimpleComment = true;
			return "$#384887" + coloredWord;
		}
		if ( nextWordTrimmed == "*" ) {
			isInsideComplexComment = true;
			return "$#384887" + coloredWord;
		}
	}
	

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
			if (wordTrimmed == '"' || !nextWord) {
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
		if (wordTrimmed == "'" || !nextWord) {
			isInsideSemiColon = false;
			return coloredWord + "#$";
		}
		return coloredWord;
	}

	if (wordTrimmed == "'") {
		isInsideSemiColon = true;
		return "$#22AA44" + coloredWord;
	}

	let returnWord = "";
	Object.keys(wordColors).forEach((color) => {
		const wordColor = wordColors[color];
		wordColor.text.forEach((word) => {
			if (wordTrimmed == word) {
				returnWord = color + coloredWord + "#$";
				wordColor.variables.forEach((variable) => {
					if (variable.startsWith("!")) {
						variableObject[variable.substr(1)] = false;
					} else {
						variableObject[variable] = true;
					}
				});
				return;
			}
		});
		return;
	});
	if (returnWord != "") {
		return returnWord;
	}

	if (variableObject.nextWordVariable) {
		coloredWord = "$#6688CC" + coloredWord + "#$";
	} else if (variableObject.nextWordFunction) {
		coloredWord = "$#DDBB88" + coloredWord + "#$";
	}
	return coloredWord;
}