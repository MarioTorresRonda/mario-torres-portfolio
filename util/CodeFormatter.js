let isInsideQuotation = false;
let isInsideSemiColon = false;
let lastCharSlash = false;
let lastCharBackSlash = false;
var isInsideSimpleComment = false;

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
	"$#9966BB": {text: ["var", "const", "let"], variables: [""]},
	"$#F280D0": {text: ["false", "true", "{", "}"], variables: [""]},
};

export function formatCodeText(codeTextRows) {

    //resetting all variables
    isInsideQuotation = false;
	isInsideSemiColon = false;
	lastCharSlash = false;
	lastCharBackSlash = false;
	isInsideSimpleComment = false;
    
	variableObject.nextWordVariable = false;
	variableObject.nextWordFunction = false;
    
	const newCodeTextRows = [];

	codeTextRows.forEach((row) => {
		let newCodeTextRow = "";
		let startPosition = 0;
		const rowChars = [...row];

		for (let index = 0; index < rowChars.length; index++) {
			const letter = rowChars[index];
			for (const splitChar of splitChars) {
				if (splitChar == letter) {
					const word = row.substr(startPosition, index - startPosition);
					newCodeTextRow += colorWord(word, false);

					const splitter = row.substr(index, 1);
					newCodeTextRow += colorWord(splitter, false);

					startPosition = index + 1;
					break;
				}
			}
		}

		let word = row.substr(startPosition, row.length - startPosition);
		newCodeTextRow += colorWord(word, true);
		newCodeTextRows.push(newCodeTextRow);
	});
	return newCodeTextRows;
}

function colorWord(coloredWord, lastSegment) {
	if (coloredWord.trim() == "" && !lastSegment) {
		return coloredWord;
	}
	const wordTrimmed = coloredWord.trim();

	//comments
	if (isInsideSimpleComment) {
		if (lastSegment) {
			isInsideSimpleComment = false;
			lastCharSlash = false;
			return coloredWord + "#$";
		} else {
			return coloredWord;
		}
	}
	if (wordTrimmed == "/") {
		if (lastCharSlash) {
			isInsideSimpleComment = true;
			return "$#384887" + coloredWord;
		} else {
			lastCharSlash = true;
			return coloredWord;
		}
	} else {
		lastCharSlash = false;
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
			if (wordTrimmed == '"' || lastSegment) {
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
		if (wordTrimmed == "'" || lastSegment) {
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