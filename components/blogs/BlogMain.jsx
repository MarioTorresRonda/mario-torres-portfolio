'use client'

import { MenuContext } from "@/store/menu-context";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import ContentBox from "../Index/ContentBox";
import { LocalizationContext } from "@/store/location-context";
import BlogOptions from "./BlogOptions";

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

    return ( 
        <ContentBox>
            <div className="flex flex-col md:flex-row w-full">
                <BlogOptions />
                <div className="px-4 md:flex-auto md:w-3/4 pt-2 md:pt-0">
                    <Suspense fallback={<div>Loading...</div>}>
                        { Blog && <Blog /> }
                    </Suspense>
                </div>
            </div>
        </ContentBox> 
    )   
}
