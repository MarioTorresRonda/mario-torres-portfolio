import {useRef, useEffect, useState, useContext} from "react";


import CodeBoxPage from "./CodeBoxPage";
import CodeBoxNavBar from "./CodeBoxNavBar";
import {formatCodeText} from "@/util/CodeFormatter";
import { isEmpty } from "@/util/Objects";
import CodeBoxButtons from "./CodeBoxButtons";
import { minimizedObj } from "./minimizedObjs";
import { CodeBoxContext } from "@/store/codebox-context";

export default function CodeBox({files}) {

	const { addFormattedFile } = useContext( CodeBoxContext )
    const [minimized, setMinimized] = useState(minimizedObj);
	const [loadedFile, setLoadedFile] = useState({});
	const [selectedFile, setSelectedFile] = useState(
		files.find((file) => {
			return file.selected;
		})
	);
	
	useEffect(() => {
		const formattedFile = addFormattedFile( selectedFile );
		setLoadedFile( formattedFile );
	}, [addFormattedFile, selectedFile]);

	function onSelectFile(key) {
		setSelectedFile(
			files.find((file) => {
				if (file.name == key) {
					return file;
				}
			})
		);
	}

	let body = <div className="h-20 p-2"> Loading... </div>;

	if ( !isEmpty( loadedFile ) ) {
		body = <>
			<CodeBoxNavBar
				files={files}
				minimized={minimized.value}
				selectedName={selectedFile.name}
				onSelectFile={onSelectFile}
			/>
			<CodeBoxPage
				pageText={loadedFile}
				minimized={{...minimized, from: selectedFile.from, to: selectedFile.to}}
			/>
		</>
	}

	return (
		<div className="relative mb-4 w-full font-fira font-medium">
			<div className="h-full w-full bg-slate-950 flex flex-col max-h-[400px]">
				{body}
			</div>
			<CodeBoxButtons minimizedState={[minimized, setMinimized]} onSelectFile={onSelectFile} files={files} selectedFile={selectedFile} />
		</div>
	);
}
