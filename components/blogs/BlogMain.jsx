'use client'

import { MenuContext } from "@/store/menu-context";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import ContentBox from "../Index/ContentBox";
import { LocalizationContext } from "@/store/location-context";
import BlogOptions from "./BlogOptions";

function loadBlog( blogId, setBlogLocalization ) {

    return lazy( asyncLoad );

    async function asyncLoad() {
        await setBlogLocalization( blogId );
        return await import( "../../data/blogs/"+blogId+"/Blog" );
    }
}

export default function BlogMain( {blogId} ) {

    const { setBlogLocalization } = useContext( LocalizationContext );
    const [ Blog, setBlog ] = useState( null )
    const { menu } = useContext( MenuContext );
    
    useEffect(() => {
        setBlog( loadBlog( blogId, setBlogLocalization ) );
    }, [])

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
