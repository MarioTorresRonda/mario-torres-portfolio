import {useRef, useEffect, useState, useContext} from "react";


import CodeBoxPage from "./CodeBoxPage";
import CodeBoxNavBar from "./CodeBoxNavBar";
import { isEmpty } from "@/util/Objects";
import CodeBoxButtons from "./CodeBoxButtons";
import { minimizedObj } from "./minimizedObjs";
import { CodeBoxContext } from "@/store/codebox-context";
import { useFetch } from "@/hooks/useFetch";
import { fetchCodeBoxFile } from "./http";

export default function CodeBox({files}) {

	const [minimized, setMinimized] = useState(minimizedObj);
	
	const [selectedFile, setSelectedFile] = useState(
		files.find((file) => {
			return file.selected;
		})
	);
	const { addFormattedFile } = useContext( CodeBoxContext )
	const [ formattedFile, setFormattedFile] = useState({});

	const {
		isFetching, 
		fetchedData : loadedFile,
		error,
		setFetchedData : setLoadedFile
	} = useFetch( fetchCodeBoxFile, selectedFile, selectedFile );

	useEffect(() => {
		if ( loadedFile.plainText ) {
			const formattedFile = addFormattedFile( loadedFile );
			setFormattedFile( formattedFile );
		}
	}, [addFormattedFile, loadedFile, isFetching]);

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

	if ( !isEmpty( formattedFile ) ) {
		body = <>
			<CodeBoxNavBar
				files={files}
				minimized={minimized.value}
				selectedName={selectedFile.name}
				onSelectFile={onSelectFile}
			/>
			<CodeBoxPage
				pageText={formattedFile}
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
