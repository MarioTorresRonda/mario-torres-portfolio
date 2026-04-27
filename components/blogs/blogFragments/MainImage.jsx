import BlogBackgroundImage from "@/components/blogs/blogFragments/BlogBackgroundImage";



export default function MainImage(  { img, children} ) {
    return (
    <BlogBackgroundImage
        className="h-60"
        imageSrc={img}
        imageClass="absolute items-center h-56 overflow-hidden transparent-gradient brightness-50 dark:brightness-75 "
        imageAlt={["Blog", "image"]}
        priority={true}
    >
        <div className="md:px-20 h-full w-full shadow-black text-shadow dark:text-shadow-sm flex flex-col items-center justify-center">
            {children}
        </div>
    </BlogBackgroundImage>
    )
}