import BlogBackgroundImage from "./BlogBackgroundImage";

export default function BlogImageWIthHoverText({className, height, imageSrc, children}) {
	height = height ? height : "h-20";
	className = className ? className : "";

	return (
		<BlogBackgroundImage
			className={`${height} ${className} overflow-hidden`}
			imageClass={`${height} overflow-hidden w-full justify-center`}
			imageSrc={imageSrc}
            clientImagClass="max-w-none"
		>
			<button className="h-full *:translate-y-[-100%] *:hover:translate-y-0 *:focus:translate-y-0 text-white">
				<div className="text-md flex justify-center items-center h-full bg-black/[.6] transition-all duration-75">
					{children}
				</div>
			</button>
		</BlogBackgroundImage>
	);
}
