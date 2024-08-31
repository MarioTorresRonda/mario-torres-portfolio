import BlogNavBarItem from "./BlogNavBarItem"

const textLevel = {
    1: "text-2xl  md:text-3xl font-semibold text-slate-800 dark:text-stone-300",
    2: "text-xl md:text-2xl font-semibold text-slate-700 dark:text-stone-400",
    3: "text-xl md:text-xl font-semibold text-slate-600 dark:text-stone-400",
    4: "text-lg md:text-lg font-semibold text-slate-600 dark:text-stone-400"
}

export default function BlogChapter( { level, blogRef, text, children} ) {
    
    const blogInfoRef = blogRef.current;
    const uuid = blogInfoRef.uuid + text;
    const maxLevel = level > 4 ? 4 : level;
    
    blogInfoRef.navBar[uuid] = { element : <BlogNavBarItem level={level + 1}> {text} </BlogNavBarItem> };  

    return(
        <div>
            <p className={` ${ textLevel[maxLevel] } mb-4`}> {text} </p>
            <div className="ml-3" >
                {children}
            </div>
        </div>
    )

}