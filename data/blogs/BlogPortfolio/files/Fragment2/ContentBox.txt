
const heightVariants = {
    40: "h-[40vh]",
    90: "h-[90vh]",
    auto : "",
}

export default function ContentBox( {height, children, className} ) {

    if ( !className ) {
        className = "";
    }

    return (
    <div className={`flex ${heightVariants[height]} justify-center items-center ${className}`}>
        <div className="flex w-[100svw] xl:w-[70%] h-[90%]">
            {children}
        </div>
    </div>
    )
}