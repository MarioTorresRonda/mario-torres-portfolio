import {useRef, useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpandAlt as expandIcon, faCompressAlt as shrinkIcon, faCopy as copyIcon} from "@fortawesome/free-solid-svg-icons";
import CodeBoxPage from "./CodeBoxPage";
import CodeBoxNavBar from "./CodeBoxNavBar";
import {formatCodeText} from "@/util/CodeFormatter";
import Tooltip from "../fragments/Tooltip";
import { isEmpty } from "@/util/Objects";

export default function CodeBox({files}) {
	const notMinimizedObj = {
		value: false,
		icon: {
			svg: shrinkIcon,
			text: ["commons", "codeBox", "shrinkCode"],
		},
	};
	const minimizedObj = {
		value: true,
		icon: {
			svg: expandIcon,
			text: ["commons", "codeBox", "expandCode"],
		},
	};

	const [loadedFiles, setLoadedFiles] = useState({});
	const [selectedFile, setSelectedFile] = useState(
		files.find((file) => {
			return file.selected;
		})
	);
	const [minimized, setMinimized] = useState(minimizedObj);
	const navBar = useRef();

	async function processFile( file ) {
		const response = await file.importFile;
		file.plainText = response;
		return formatCodeText(response.default.split("\n"));
	
	}

	useEffect(() => {
		const loadFiles = async () => {
			const newLoadedFiles = {};
			for (const file of files) {
				 newLoadedFiles[file.name] = await processFile(file);
			}
			setLoadedFiles({...newLoadedFiles});
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

	let body = <div className="h-20 p-2"> Loading... </div>;

	if ( !isEmpty( loadedFiles ) ) {
		body = <>
			<CodeBoxNavBar
				ref={navBar}
				minimized={minimized.value}
				selectedName={selectedFile.name}
				onSelectFile={onSelectFile}
				/>
			{Object.keys(loadedFiles).map((key) => {
				return (
					<CodeBoxPage
					key={key}
					pageName={key}
					pageText={loadedFiles[key]}
					minimized={{...minimized, from: selectedFile.from, to: selectedFile.to}}
					show={selectedFile.name == key}
					navBar={navBar}
					/>
				);
			})}
		</>
	}

	return (
		<div className="relative mb-4 w-full tracking-widest">
			<div className="h-full w-full bg-slate-950 flex flex-col max-h-[400px]">
				{body}
			</div>
			<div className={`absolute h-10 top-0 py-2 px-4 right-0 flex gap-4 bg-slate-900 border-t-[1px] border-slate-700 `}>
				<div className="w-6 h-6">
					<Tooltip text={["commons", "codeBox", "copyCode"]}>
						<FontAwesomeIcon
							icon={copyIcon}
							className={`h-full transition-transform ease-in-out hover:scale-[1.2] text-[#6688CC]`}
							onClick={onCopyCode}
						/>
					</Tooltip>
				</div>
				<div className="w-6 h-6">
					<Tooltip text={minimized.icon.text}>
						<FontAwesomeIcon
							icon={minimized.icon.svg}
							className={`h-full transition-transform ease-in-out hover:scale-[1.2] text-[#6688CC]`}
							onClick={onExpandButtonClicked}
						/>
					</Tooltip>
					
				</div>
			</div>
		</div>
	);
}
