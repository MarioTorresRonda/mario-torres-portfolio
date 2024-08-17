import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogImageWIthHoverText from "./BlogImageWIthHoverText";
import { faShareAltSquare as icon } from "@fortawesome/free-solid-svg-icons";

export default function BlogImageUrl( { title, desc, url, imageSrc } ) {
    return <>
        <div className="flex bg-stone-700">
        <p className="flex-1 text-xl text-center"> {title} </p> 
            <FontAwesomeIcon
                icon={icon}
                className="text-white h-5 m-1 z-20 duration-100 hover:scale-125 hover:text-stone-300"
            />
        </div>
        <div className="h-3 bg-stone-700/40 mx-3"></div>
        <BlogImageWIthHoverText height="h-52" imageSrc={imageSrc}>
            <div className="mx-8 text-center text-shadow shadow-black">
                {desc}
            </div>
        </BlogImageWIthHoverText>
    </>
}