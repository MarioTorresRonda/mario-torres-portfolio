import ClientImage from "../fragments/ClientImage"
import Message from "../fragments/Message"
import TechBadge from "./TechBadge"

export default function ProjectItem( { project } ) {
    return (
        <div className="flex flex-col relative mb-5 md:h-60 shadow-lg shadow-stone-400 dark:shadow-stone-900" >
            <div className="px-5 py-4 transition ease-linear duration-300 flex-1">
                <p className="text-[30px] font-bold"> <Message code={ ["mainPage", "projects", "list", project.name ] } /> </p>
                <div className="flex flex-col xl:flex-row md:h-20 gap-2">
                    <p className="text-stone-400 pl-2 mt-2 flex-1"> <Message code={ ["mainPage", "projects", "list", ( project.name + "Desc" ) ] } /> </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <button className="order-2 md:order-1 transition-all duration-200 bg-slate-400 hover:bg-slate-500 dark:bg-stone-600 dark:hover:bg-stone-500 py-2 px-6 mx-5 my-4 h-12 text-nowrap rounded-md w-min"> 
                    <Message code={ ["mainPage", "blogs", "viewMore" ] } /> 
                </button>
                <div className=" order-1 md:order-2 flex-1 flex flex-wrap gap-2 items-center justify-end mr-10 mb-2">
                    { project.tech.map( ( tech ) => {
                        return <TechBadge key={tech.name} tech={tech} />
                    } ) }
                </div>
            </div>
            <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-r`}></div>
            <div className="color-fondo h-1 w-full md:h-0 md:w-0"></div>
        </div> 
    )
}