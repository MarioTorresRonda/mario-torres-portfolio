export default function CodeBoxNavBar( {files, minimized, onSelectFile, selectedName} ) {

	const pageList = files.map( (file) => { return file.name } )

	function onHandleClickNavBarItem(key) {
		onSelectFile(key);
	}

	return (
		<div className={`bg-slate-900 flex`}>
			<div className="bg-slate-700 flex pl-[1px] pt-[1px] gap-[1px] h-full w-full overflow-x-hidden hover:overflow-x-auto pr-20">
				{pageList.map((element) => {
					if ( minimized && element != selectedName ) {
						return <></>;
					}

					return (
						<div
							key={element}
							onClick={() => {
								onHandleClickNavBarItem(element);
							}}
							className={`px-4 py-2 ${
								element == selectedName ? "bg-slate-950 text-yellow-200" : "bg-slate-900 hover:bg-slate-800 mb-[1px]"
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
};