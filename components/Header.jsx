export default function Header({ children, ...props }) {
	return (
		<>
			<div className="flex w-[100vw] justify-center h-[100vh] items-center">
				<div className="flex w-[100vw] xl:w-[1280px]">
					<div className="flex-auto bg-slate-900 h-[100vh] xl-h:h-[700px] ">
						<div className="absolute flex-auto bg-stone-800 w-[calc(100vw-240px)] h-[700px] ml-[120px] xl:w-[1040px] "></div>
						<div className="absolute overflow-y-auto overflow-x-hidden flex-auto bg-stone-800 w-[calc(100vw-40px)] xl:w-[1240px] h-[calc(100vh-40px)] xl-h:h-[660px] ml-5 mt-5 z-10 p-4 md:p-20">
							<div {...props}>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
