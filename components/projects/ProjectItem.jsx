'use client'

import { useNavigate } from "@/hooks/useNavigate"
import ClientImage from "../fragments/ClientImage"
import FAI from "../fragments/FAI"
import Message from "../fragments/Message"
import TechBadge from "./TechBadge"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useRouter } from 'next/navigation'

export default function ProjectItem( { project } ) {

    const router = useRouter();

    function onHandleViewMore() {
        router.push(project.url, { scroll: false })
    }

    function onHandleViewGitHub() {
        router.push(project.github, { scroll: false })
    }

    return (
        <div className="flex flex-col relative mb-5 md:h-60 shadow-lg shadow-stone-400 dark:shadow-stone-900" >
            <div className="px-5 py-4 transition ease-linear duration-300 flex-1">
                <p className="text-[30px] font-bold"> <Message code={ ["mainPage", "projects", "list", project.name ] } /> </p>
                <div className="flex flex-col xl:flex-row md:h-20 gap-2">
                    <p className="text-stone-400 pl-2 mt-2 flex-1"> <Message code={ ["mainPage", "projects", "list", ( project.name + "Desc" ) ] } /> </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="order-2 gap-4 md:order-1 flex flex-wrap mx-4 my-4">
                    <button onClick={onHandleViewMore} className="transition-all duration-200 bg-slate-400 hover:bg-slate-500 dark:bg-stone-600 dark:hover:bg-stone-500 py-2 px-6 h-12 text-nowrap rounded-md w-min"> 
                        <Message code={ ["mainPage", "blogs", "viewMore" ] } /> 
                    </button>
                    { project.github && ( 
                        <button onClick={onHandleViewGitHub} >      
                            <FAI icon={faGithub} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-slate-500 dark:text-stone-700 hover:text-slate-700 dark:hover:text-stone-500 hover:scale-[1.2]" />
                        </button> 
                    ) }
                </div>
                <div className="order-1 md:order-1 flex-1 flex flex-wrap gap-2 items-center justify-end mx-4 md:mr-8 mb-2">
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