'use client'

import ClientImage from "../ClientImage";
import Message, { getMessageText } from "../Message";

export default function BlogItem( {blog} ) {

    let ago = "" ;
    const monthsDiff = new Date( new Date().getTime() - blog.date ).getMonth()
    if ( monthsDiff == 0 ) {
        ago = getMessageText( ["mainPage", "blogs", "new"] )
    }else{
        ago = getMessageText( ["mainPage", "blogs", "ago"] )
        const monthSymbol = getMessageText( ["mainPage", "blogs", "months"] )[ monthsDiff == 1 ? 0 : 1 ];
        ago = ago.replaceAll( "{1}", monthsDiff + " " + monthSymbol);
    }

    return (
    <div className="flex relative mb-2 hover:bg-stone-700 h-52" >
        <div className="m-5 flex justify-center my-auto">
            <ClientImage width="250" className="rounded-md" src={blog.image} alt={["mainPage","blogs","imageAlt"]} />
        </div>
        <div className="px-5 py-4 transition ease-linear duration-300">
            <p className="text-[20px]"> <Message code={ ["mainPage", "blogs", "list", blog.title ] } /> </p>
            <p> <Message code={ ["mainPage", "blogs", "list", blog.subtitle ] } />  </p>
            <div className={ (monthsDiff == 0 ? "color-dinamico-texto " : "" ) + "" } > { ago } </div>
        </div>
    </div> 
    )
}