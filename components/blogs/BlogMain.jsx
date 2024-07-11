'use client'

import { MenuContext } from "@/store/menu-context";
import { lazy, Suspense, useContext } from "react";
import ContentBox from "../Index/ContentBox";
import Message from "../Message";

export default function BlogMain() {

    const { setMenu, menu } = useContext( MenuContext );

    if ( !menu.selectedPost ) {
        return <div></div>
    }

    const Blog = lazy( async() => await import( "../../data/blogs/"+menu.selectedPost.id+"/Blog" ));

    function onHandleClick() {
        menu.selectedPost = null;
        setMenu( menu );
    }

    return ( <ContentBox>
        <div className="w-1/5"> <div className="fixed"> 
            <button onClick={onHandleClick} className="bg-stone-600 hover:bg-stone-500 py-2 px-6 h-12 text-nowrap mt-auto rounded-md"> 
                <Message code={ ["mainPage", "blogs", "back" ] } /> 
            </button>
        </div> </div>
        <div className="w-4/5">
            <Suspense fallback={<div>Loading...</div>}>
                <Blog />
            </Suspense>
        </div>
    </ContentBox> )
}