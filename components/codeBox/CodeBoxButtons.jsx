import {useState} from "react";

import FAI from "../fragments/FAI";
import Tooltip from "../fragments/Tooltip";
import { minimizedObj, notMinimizedObj } from "./minimizedObjs";
import {faExpandAlt as expandIcon, faCompressAlt as shrinkIcon, faCopy as copyIcon} from "@fortawesome/free-solid-svg-icons";


export default function CodeBoxButtons( { minimizedState : [ minimized, setMinimized ], onSelectFile, files, selectedFile } ) {

	function onExpandButtonClicked() {
		if (!minimized.value) {
			onSelectFile(
				files.find((file) => {
					return file.selected;
				}).name
			);
		}
		setMinimized(minimized.value ? notMinimizedObj : minimizedObj);
	}

	function onCopyCode() {
		let textToCopy = selectedFile.plainText.default;

		if ( minimized.value ) {
			const fromToRows = [];
			const allRows = textToCopy.split("\n");
			for (let index = selectedFile.from - 1; index < selectedFile.to; index++) {
				fromToRows.push( allRows[index] );
			}
			textToCopy = fromToRows.join("\n");
		}

		navigator.clipboard.writeText( textToCopy );
	}

    return (
        <div className={`absolute h-10 top-0 py-2 px-4 right-0 flex gap-4 bg-slate-900 border-t-[1px] border-slate-700 `}>
            <div className="w-6 h-6">
                <Tooltip text={["commons", "codeBox", "copyCode"]}>
                    <FAI
                        icon={copyIcon}
                        className={`h-full transition-transform ease-in-out hover:scale-[1.2] text-[#6688CC]`}
                        onClick={onCopyCode}
                    />
                </Tooltip>
            </div>
            <div className="w-6 h-6">
                <Tooltip text={minimized.icon.text}>
                    <FAI
                        icon={minimized.icon.svg}
                        className={`h-full transition-transform ease-in-out hover:scale-[1.2] text-[#6688CC]`}
                        onClick={onExpandButtonClicked}
                    />
                </Tooltip>
                
            </div>
        </div>
    )
}