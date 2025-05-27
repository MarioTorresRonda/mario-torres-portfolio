import Message from "../fragments/Message";

export default function ProjectResumeItem( { project, isOdd, onSelectProject} ) {

    const invertedColor = "transform -scale-100";

    function onClickProject() {
        onSelectProject(project)
    }

    return (
    <div onClick={onClickProject} className="flex relative mb-2">
        <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l ${isOdd ? "" : invertedColor }`}></div>
        <div className="px-5 py-2 w-full  hover:bg-slate-300 dark:hover:bg-stone-700 transition ease-linear duration-300">
            <p className="text-[20px]"> <Message code={ ["mainPage", "projects", "list", project.name ] } /> </p>
            <p className="text-stone-500 dark:text-stone-400 text-ellipsis overflow-hidden text-[14px]" > <Message code={ ["mainPage", "projects", "list", project.description ] } />  </p>
        </div>
    </div> 
    )
}