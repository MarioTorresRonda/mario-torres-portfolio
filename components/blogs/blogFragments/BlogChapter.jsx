import { useReducedMotion } from "framer-motion";
import BlogNavBarItem from "./BlogNavBarItem"
import { useRef } from "react";
import ScrollAnchor from "@/components/fragments/ScrollAnchor";

const textLevel = {
    1: "text-2xl  md:text-3xl font-semibold text-slate-800 dark:text-stone-300",
    2: "text-xl md:text-2xl font-semibold text-slate-700 dark:text-stone-400",
    3: "text-xl md:text-xl font-semibold text-slate-600 dark:text-stone-400",
    4: "text-lg md:text-lg font-semibold text-slate-600 dark:text-stone-400"
}

export default function BlogChapter( { level, blogRef, text, children} ) {
    
    const blogInfoRef = blogRef.current;
    const id = text.replaceAll(" ", "");
    const maxLevel = level > 4 ? 4 : level;

    const element = <BlogNavBarItem id={id} level={level + 1}> {text} </BlogNavBarItem>; 
    blogInfoRef.navBar[id] = { element };  

    return(
        <ScrollAnchor anchor={id}>
            <p className={` ${ textLevel[maxLevel] } mb-4`}> {text} </p>
            <div className="ml-3" >
                {children}
            </div>
        </ScrollAnchor>
    )

}