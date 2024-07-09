'use client'

import { useContext } from "react";
import Message from "../Message";
import { MenuContext } from "@/store/menu-context";

    export default function BlogResumeItem( {blog} ) {
        const { setBlog, blog : selectedBlog } = useContext( MenuContext );

    function onHandleSelectPost() {
        setBlog(blog);
    }

    var isSelected = selectedBlog.id == blog.id;

    return (
    <div className="flex relative mb-2" onClick={onHandleSelectPost}>
        { isSelected && <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight`}></div> }
        <div className={"px-5 py-2 w-full h-20 " + ( isSelected ? "bg-stone-600" : "hover:bg-stone-700") + " transition ease-linear duration-300"}>
            <p className="text-[20px]"> <Message code={ ["mainPage", "blog", "list", blog.title ] } /> </p>
            <p> <Message code={ ["mainPage", "blog", "list", blog.subtitle ] } />  </p>
        </div>
    </div> 
    )
}