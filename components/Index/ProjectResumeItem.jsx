import Message from "../Message";

export default function ProjectResumeItem( {name, description, isOdd} ) {

    const colorInvertido = "transform -scale-100";

    return (
    <div className="flex relative mb-2">
        <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l ${isOdd ? "" : colorInvertido }`}></div>
        <div className="px-5 py-2 w-full  hover:bg-stone-700 transition ease-linear duration-300">
            <p className="text-[20px]"> <Message code={ ["mainPage", "projects", "list", name ] } /> </p>
            <p> <Message code={ ["mainPage", "projects", "list", description ] } />  </p>
        </div>
    </div> 
    )
}