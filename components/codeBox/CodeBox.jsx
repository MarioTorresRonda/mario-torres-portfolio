import {useRef, useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpandAlt as expandIcon, faCompressAlt as shrinkIcon} from "@fortawesome/free-solid-svg-icons";
import CodeBoxPage from "./CodeBoxPage";
import CodeBoxNavBar from "./CodeBoxNavBar";
import {formatCodeText} from "@/util/CodeFormatter";

export default function CodeBox({files}) {
	const notMinimizedObj = {value: false, icon: { svg : shrinkIcon, class : "bg-slate-900 border-t-[1px] border-slate-700" } };
	const minimizedObj = {value: true, icon : {svg: expandIcon, class : ""}};

	const [loadedFiles, setLoadedFiles] = useState({});
	const [selectedFile, setSelectedFile] = useState(
		files.find((file) => {
			return file.selected;
		})
	);
	const [minimized, setMinimized] = useState(minimizedObj);
	const navBar = useRef();

	useEffect(() => {
		const loadFiles = async () => {
			const tiempoAntes = performance.now();
			const newLoadedFiles = {};
			await files.forEach(async (file) => {
				const response = await file.importFile;
				newLoadedFiles[file.name] = formatCodeText(response.default.split("\n"));
			});
			setLoadedFiles({...newLoadedFiles});
			console.log( ( performance.now() - tiempoAntes ) + " milisegundos");
		};
		loadFiles();
	}, [files]);

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

	function onSelectFile(key) {
		setSelectedFile(
			files.find((file) => {
				if (file.name == key) {
					return file;
				}
			})
		);
	}

	if (!loadedFiles) {
		return <div> Loading... </div>;
	}

	return (
		<div className="relative mb-10 w-full tracking-widest">
			<div className="h-full w-full bg-slate-950 flex flex-col max-h-[400px]">
				<CodeBoxNavBar
					ref={navBar}
					className={minimized.value ? "hidden" : ""}
					selectedName={selectedFile.name}
					onSelectFile={onSelectFile}
				/>
				{Object.keys(loadedFiles).map((key) => {
					return (
						<CodeBoxPage
							pageName={key}
							pageText={loadedFiles[key]}
							minimized={{...minimized, from: selectedFile.from, to: selectedFile.to}}
							show={selectedFile.name == key}
							navBar={navBar}
						/>
					);
				})}
			</div>
			<div className={`absolute h-10 top-0 py-2 px-4 right-0 flex gap-2 ${minimized.icon.class}`}>
				<div className="w-6 h-6">
					<FontAwesomeIcon
						icon={minimized.icon.svg}
						className={`h-full transition-transform ease-in-out hover:scale-[1.2] text-[#6688CC]`}
						onClick={onExpandButtonClicked}
					/>
				</div>
			</div>
		</div>
	);
}
