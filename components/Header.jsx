import { motion } from "framer-motion";

export default function Header({ children, ...props }) {
	return (
		<div className="flex w-[100vw] h-[90vh] justify-center items-center">
			<div className="flex w-[100vw] xl:w-[70%] h-[90%]">
				<div className="relative flex-auto transition-colors duration-[400ms] color-fondo h-[100%]">
					<div className="absolute bg-stone-800 w-[calc(100%-240px)] h-[101%] -mt-1 ml-[120px]">
					</div>
					<div className="absolute overflow-y-auto overflow-x-hidden flex-auto bg-stone-800 w-[calc(100%-40px)] h-[calc(100%-40px)] ml-5 mt-5 p-4 md:p-20">
						<div {...props}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
