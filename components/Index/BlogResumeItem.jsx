'use client'

import { useContext } from "react";
import Message from "../Message";
import { MenuContext } from "@/store/menu-context";
import { blog as newBlogMenu } from "@/data/navBar";
import { useNavigate } from "@/hooks/useNavigate";

export default function BlogResumeItem( {blog} ) {
    const { menu, setMenu } = useContext( MenuContext );
    const { navigate } = useNavigate( MenuContext );

    function onHandleSelectPost() {
        menu.blog = blog;
        setMenu(menu);
    }

    function onDblClickPost() {
        const newMenu = {...newBlogMenu}
        newMenu.selectedPost = blog;
        console.log( newMenu );
        navigate( newMenu );
    }

    var isSelected = menu.blog.id == blog.id;

    return (
    <div className="flex relative mb-2" onClick={onHandleSelectPost} onDoubleClick={onDblClickPost} >
        { isSelected && <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l`}></div> }
        <div className={"px-5 py-2 w-full h-20 " + ( isSelected ? "bg-stone-600" : "hover:bg-stone-700") + " transition ease-linear duration-300"}>
            <p className="text-[20px]"> <Message code={ ["mainPage", "blogs", "list", blog.title ] } /> </p>
            <p> <Message code={ ["mainPage", "blogs", "list", blog.subtitle ] } />  </p>
        </div>
        { isSelected && <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-r`}></div> }
    </div> 
    )
}