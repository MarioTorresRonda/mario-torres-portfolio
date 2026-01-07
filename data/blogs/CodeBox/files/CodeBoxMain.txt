import {useEffect, useState, useContext} from "react";

import CodeBoxPage from "./CodeBoxPage";
import CodeBoxNavBar from "./CodeBoxNavBar";
import {isEmpty} from "@/util/Objects";
import CodeBoxButtons from "./CodeBoxButtons";
import {minimizedObj} from "./minimizedObjs";
import {CodeBoxContext} from "@/store/codebox-context";
import {useFetch} from "@/hooks/useFetch";

export default function CodeBoxMain({files, formattedFileState}) {
	//Cached loaded Files and formatted files
	const {addLoadedFile, addFormattedFile} = useContext(CodeBoxContext);

	const [selectedFile, setSelectedFile] = useState(
		files.find((file) => {
			return file.selected;
		})
	);
	const [formattedFile, setFormattedFile] = useState({});
	const [minimized, setMinimized] = useState(minimizedObj);

	const {
		isFetching,
		fetchedData: loadedFile,
		setFetchedData: setLoadedFile,
	} = useFetch(addLoadedFile, selectedFile, {}, [minimized]);

	useEffect(() => {
		if (loadedFile.plainText) {
			const formattedFile = addFormattedFile(loadedFile);
			setFormattedFile(formattedFile);
		}
	}, [addFormattedFile, loadedFile, isFetching, setFormattedFile]);

	function onSelectFile(key) {
		setLoadedFile({});
		setFormattedFile({});

		setSelectedFile(
			files.find((file) => {
				if (file.name == key) {
					return file;
				}
			})
		);
	}

	let body = <div className="h-20 p-2"> Loading... </div>;

	if (!isFetching && !isEmpty(formattedFile)) {
		body = (
			<>
				<CodeBoxPage
					pageText={formattedFile}
					minimized={{...minimized, from: selectedFile.from, to: selectedFile.to}}
				/>
			</>
		);
	}

	return (
		<div className="relative mb-4 w-full font-fira font-medium">
			<div className="h-full w-full bg-slate-950 flex flex-col max-h-[400px]">
				<CodeBoxNavBar
					files={files}
					minimized={minimized.value}
					selectedName={selectedFile.name}
					onSelectFile={onSelectFile}
				/>
				{body}
			</div>
			<CodeBoxButtons
				minimizedState={[minimized, setMinimized]}
				onSelectFile={onSelectFile}
				files={files}
				selectedFile={selectedFile}
			/>
		</div>
	);
}
