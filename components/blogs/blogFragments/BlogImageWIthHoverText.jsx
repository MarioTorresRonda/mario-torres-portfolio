import BlogBackgroundImage from "./BlogBackgroundImage";

export default function BlogImageWIthHoverText( {className, height, imageSrc, children} ) {
    
    height = height ? height : "h-20";
    
    return <BlogBackgroundImage className={height + " " + className + " overflow-hidden"} imageClass={height} imageSrc={imageSrc}>
        <div className="h-full *:translate-y-[-100%] *:hover:translate-y-0 ">
            <div className="text-md flex justify-center items-center h-full bg-black/[.6] transition-all duration-75"> 
                {children}
            </div>
        </div>
    </BlogBackgroundImage>
}