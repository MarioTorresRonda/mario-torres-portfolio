import BlogNavBarItem from "./BlogNavBarItem"

const textLevel = {
    1: "text-3xl font-semibold text-stone-300",
    2: "text-2xl font-semibold text-stone-400",
    3: "text-xl font-semibold text-stone-400",
    4: "text-lg font-semibold text-stone-400"
}

export default function BlogChapter( { level, blogRef, text, children} ) {
    
    const blogInfoRef = blogRef.current;
    const uuid = blogInfoRef.uuid + text;
    const maxLevel = level > 4 ? 4 : level;
    
    blogInfoRef.navBar[uuid] = { element : <BlogNavBarItem level={level + 1}> {text} </BlogNavBarItem> };  

    return(
        <div>
            <p className={` ${ textLevel[maxLevel] } ml- mb-4`}> {text} </p>
            <div className="ml-3" >
                {children}
            </div>
        </div>
    )

}