'use client'

import { useContext } from "react";
import ClientImage from "../fragments/ClientImage";
import Message from "../fragments/Message";
import { MenuContext } from "@/store/menu-context";
import { useMessageText } from "@/hooks/useMessageText";
import { useNavigate } from "@/hooks/useNavigate";

import {blog as blogMenu} from "@/data/navBar"

export default function BlogItem( {blog} ) {
    const { navigate } = useNavigate( MenuContext );
    const getText = useMessageText();
    
    let ago = "";

    const newText = getText( ["mainPage", "blogs", "new"] );
    const agoText = getText( ["mainPage", "blogs", "ago"] );
    const monthsDiff = new Date( new Date().getTime() - blog.date ).getMonth()
    const monthsText = getText( ["mainPage", "blogs", "months"] )[ monthsDiff == 1 ? 0 : 1 ];

    if ( monthsDiff == 0 ) {
        ago = newText;
    }else{
        ago = agoText;
        ago = ago.replaceAll( "{1}", monthsDiff + " " + monthsText);
    }

    function onHandleClick() {
        navigate(blogMenu, blog.id); 
    }

    return (
        <div className="flex md:flex-row flex-col relative mb-5 md:h-52 shadow-lg shadow-stone-400 dark:shadow-stone-900" >
            <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l`}></div>
            <div className="md:m-5 mx-1 flex justify-center md:my-auto hover:scale-110 transition-all overflow-hidden" onClick={onHandleClick}>
                <ClientImage width="250" className="rounded-none md:rounded-md" src={blog.image} alt={["mainPage","blogs","imageAlt"]} />
            </div>
            <div className="px-5 py-4 transition ease-linear duration-300 flex-1">
                <p className="text-[30px] font-bold" onClick={onHandleClick}> <Message code={ ["mainPage", "blogs", "list", blog.title ] } /> </p>
                <div className={ (monthsDiff == 0 ? "color-fondo px-2  font-bold" : "" ) + " w-min text-nowrap" } > { ago } </div>
                <div className="flex flex-col xl:flex-row md:h-20 gap-2">
                    <p className="text-stone-400 pl-2 mt-2 flex-1"> <Message code={ ["mainPage", "blogs", "list", blog.subtitle ] } /> </p>
                    <button onClick={onHandleClick} className="transition-all duration-200 bg-slate-400 hover:bg-slate-500 dark:bg-stone-600 dark:hover:bg-stone-500 py-2 px-6 h-12 text-nowrap mt-auto rounded-md w-min self-end"> <Message code={ ["mainPage", "blogs", "viewMore" ] } /> </button>
                </div>
            </div>
            <div className="color-fondo h-1 w-full md:h-0 md:w-0"></div>
        </div> 
    )
}