import { useRef } from "react";
import CodeBoxColors from "./CodeBoxColors";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";

export default function CodeBoxRow({rowNum, rowText}) {

	rowText = rowText ? rowText : "";
	const rowColors = getRowColors( rowText );
	const col = useRef(0);
	col.current = 0;

	return (
		<div className="flex flex-row gap-1 w-full text-nowrap">
			<span className="select-none text-right min-w-10 w-10"> {rowNum} </span>
			<p className="text-[#6688CC]">
				{rowColors.map((word) => {
					col.current++;
					return <CodeBoxColors key={rowNum + ";" + col.current} rowWord={word} />;
				})}
			</p>
		</div>
	);
}

//Divide the string in an array with the color codes
function getRowColors( rowText ) {
	var rowColors = [];
	var chars = [...rowText];

	var lastIndex = 0;
	var lastClose = 0;
	var insideColor = false;

	for (let index = 0; index < chars.length - 1; index++) {
		const char1 = chars[index];
		const char2 = chars[index + 1];

		//if it was outside color and starts a color
		if ( char1 == "$" && char2 == "#" && !insideColor ) {
			//if color is first character, we should not create a empty string
			if ( index != lastIndex ) {
				//if is space between the last close and the last index
				if ( lastClose <= lastIndex) {
					rowColors.push( rowText.substr(lastIndex, index - lastIndex) );
				}else{
					rowColors.push( rowText.substr(lastIndex, lastClose - lastIndex) );
					if ( lastClose != index ) { 
						rowColors.push( rowText.substr(lastClose, index - lastClose) );
					}
				}
				lastIndex = index;
			}
			insideColor = true;
		}

		if ( char1 == "#" && char2 == "$" ) {
			lastClose = index + 2;
			insideColor = false;
			//we add one to the index so we skip characters we already know.
			//it also fix a bug when the sequence $#$# appears
			index++;
		}
	}

	if ( lastClose <= lastIndex ) {
		rowColors.push( rowText.substr(lastIndex) );
	}else{
		rowColors.push( rowText.substr(lastIndex, lastClose - lastIndex) );
		rowColors.push( rowText.substr(lastClose) );
	}
	return rowColors;
}
