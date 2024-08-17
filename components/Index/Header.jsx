import ContentBox from "./ContentBox";

export default function Header({ children, ...props }) {
	return (
		<ContentBox height={90}>
			<div className="relative flex-auto transition-colors duration-[400ms] color-fondo h-[100%]">
				<div className="absolute color-fondo inverso h-[100%] w-[100%] opacity-animation">
				</div>
				<div className="absolute bg-slate-200 dark:bg-stone-800 w-[calc(100%-240px)] h-[101%] -mt-1 ml-[120px]">
				</div>
				<div className="absolute overflow-y-auto overflow-x-hidden flex-auto bg-slate-200 dark:bg-stone-800 w-[calc(100%-40px)] h-[calc(100%-40px)] ml-5 mt-5 p-4 md:p-20">
					<div {...props}>
						{children}
					</div>
				</div>
			</div>
		</ContentBox>
	);
}
