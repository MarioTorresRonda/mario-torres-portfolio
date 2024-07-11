'use client'

import { useContext } from "react";
import ClientImage from "../ClientImage";
import Message, { getMessageText } from "../Message";
import { MenuContext } from "@/store/menu-context";

export default function BlogItem( {blog} ) {

    const { menu, setMenu } = useContext( MenuContext );
    
    let ago = "" ;
    const monthsDiff = new Date( new Date().getTime() - blog.date ).getMonth()
    if ( monthsDiff == 0 ) {
        ago = getMessageText( ["mainPage", "blogs", "new"] )
    }else{
        ago = getMessageText( ["mainPage", "blogs", "ago"] )
        const monthSymbol = getMessageText( ["mainPage", "blogs", "months"] )[ monthsDiff == 1 ? 0 : 1 ];
        ago = ago.replaceAll( "{1}", monthsDiff + " " + monthSymbol);
    }

    function onHandleClick() {
        menu.selectedPost = blog;
        setMenu( menu );
    }

    return (
        <div className="flex relative mb-2 h-52 " >
            <div className="m-5 flex justify-center my-auto hover:scale-110 transition-all" onClick={onHandleClick}>
                <ClientImage width="250" className="rounded-md" src={blog.image} alt={["mainPage","blogs","imageAlt"]} />
            </div>
            <div className="px-5 py-4 transition ease-linear duration-300 flex-1">
                <p className="text-[30px] font-bold" onClick={onHandleClick}> <Message code={ ["mainPage", "blogs", "list", blog.title ] } /> </p>
                <div className={ (monthsDiff == 0 ? "color-fondo px-2  font-bold" : "" ) + " w-min text-nowrap" } > { ago } </div>
                <div className="flex h-20">
                    <p className="text-stone-400 pl-2 mt-2 flex-1"> <Message code={ ["mainPage", "blogs", "list", blog.subtitle ] } /> </p>
                    <button onClick={onHandleClick} className="bg-stone-600 hover:bg-stone-500 py-2 px-6 h-12 text-nowrap mt-auto rounded-md"> <Message code={ ["mainPage", "blogs", "viewMore" ] } /> </button>
                </div>
            </div>
        </div> 
    )
}