import {forwardRef, useEffect, useImperativeHandle, useState} from "react";

const CodeBoxNavBar = forwardRef(function CodeBoxNavBar({className, onSelectFile, selectedName}, ref) {
	const [pageList, setPageList] = useState([]);

	function addPageToList(page) {
		setPageList((prevPageList) => {
			return prevPageList.indexOf(page) == -1 ? [...prevPageList, page] : prevPageList;
		});
	}

	useImperativeHandle(ref, () => {
		return {
			addPageToList,
			resetPageList: () => {
				setPageList([]);
			},
		};
	});

	function onHandleClickNavBarItem(key) {
		onSelectFile(key);
	}

    console.log( pageList )

	return (
		<div className={`bg-slate-900 flex  ${className ? className : ""}`}>
			<div className="bg-slate-700 flex pl-[1px] pt-[1px] gap-[1px] h-full w-full overflow-x-hidden hover:overflow-x-scroll pr-20">
				{pageList.map((element) => {
					return (
						<div
							onClick={() => {
								onHandleClickNavBarItem(element);
							}}
							className={`px-4 py-2 ${
								element == selectedName ? "bg-slate-950" : "bg-slate-900 hover:bg-slate-800 mb-[1px]"
							} `}
						>
							{element}
						</div>
					);
				})}
				<div className={`bg-slate-900 flex-1 mb-[1px]`}> </div>
			</div>
		</div>
	);
});

export default CodeBoxNavBar;
