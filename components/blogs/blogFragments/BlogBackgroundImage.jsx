import Image from "next/image";

export default function BlogBackgroundImage( { imageSrc, children } ) {
    return(
        <div className="relative h-60">
            <div className="flex absolute h-56 overflow-hidden items-center foto-difuminada">
                <Image width="auto" height="auto" src={imageSrc} />
            </div>
            <div className="absolute px-20 text-shadow-sm h-full w-full shadow-black flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    )
}