import BlogBackgroundImage from "@/components/blogs/blogFragments/BlogBackgroundImage";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";
import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import { useMessageText } from "@/hooks/useMessageText";

import headerImg from "@/public/Blog Preview.png";

export default function MainImage() {
    return (
    <BlogBackgroundImage
        className="h-60"
        imageSrc={headerImg}
        imageClass="absolute items-center h-56 overflow-hidden transparent-gradient brightness-50 dark:brightness-75 "
        imageAlt={["Blog", "image"]}
    >
        <div className="md:px-20 h-full w-full shadow-black text-shadow dark:text-shadow-sm flex flex-col items-center justify-center">
            <BlogTitle text={useMessageText(["Blog", "title"])}></BlogTitle>
            <BlogSubtitle text={useMessageText(["Blog", "subtitle"])}></BlogSubtitle>
        </div>
    </BlogBackgroundImage>
    )
}