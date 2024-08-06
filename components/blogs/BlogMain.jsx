'use client'

import { MenuContext } from "@/store/menu-context";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import ContentBox from "../Index/ContentBox";
import Message from "../fragments/Message";
import { LocalizationContext } from "@/store/location-context";
import BlogNavBar from "./BlogNavBar";

function loadBlog( menu, setBlogLocalization ) {

    return lazy( asyncLoad );

    async function asyncLoad() {
        await setBlogLocalization( menu.selectedPost.id );
        return await import( "../../data/blogs/"+menu.selectedPost.id+"/Blog" );
    }
}

export default function BlogMain() {

    const { setMenu, menu } = useContext( MenuContext );
    const { setBlogLocalization } = useContext( LocalizationContext );
    const [ Blog, setBlog ] = useState( null )

    useEffect(() => {
        setBlog( loadBlog( menu, setBlogLocalization ) );
        if ( menu.selectedPost ) {
            menu.selectedPost.navBar = null;
            setMenu( menu );
        }
    }, [menu.selectedPost])
    

    if ( !menu.selectedPost ) {
        return <div></div>
    }   

    function onHandleClick() {
        menu.selectedPost = null;
        setMenu( menu );
    }

    return ( 
        <ContentBox>
            <div className="w-1/4"> 
                <div className="fixed"> 
                    <button onClick={onHandleClick} className="bg-stone-600 hover:bg-stone-500 py-2 px-6 h-12 text-nowrap mt-auto rounded-md"> 
                        <Message code={ ["mainPage", "blogs", "back" ] } /> 
                    </button>
                    <BlogNavBar navBarItems={menu.selectedPost.navBar} />
                </div> 
            </div>
            <div className="w-3/4">
                <Suspense fallback={<div>Loading...</div>}>
                    { Blog && <Blog /> }
                </Suspense>
            </div>
        </ContentBox> 
    )   
}
