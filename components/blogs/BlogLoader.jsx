'use client'

import { useContext, useEffect, useState } from "react";
import ContentBox from "../Index/ContentBox";
import { LocalizationContext } from "@/store/location-context";
import BlogMain from "./BlogMain";

async function asyncLoad( blogId, setBlogLocalization ) {
    await setBlogLocalization( blogId );
    return import( "../../data/blogs/"+blogId+"/Blog" );
}

export default function BlogLoader({blogId}) {

    const [ Blog, setBlog ] = useState( null )
    const { setBlogLocalization, locale } = useContext( LocalizationContext );

    useEffect(() => {
        asyncLoad( blogId, setBlogLocalization ).then( (response) => { setBlog( response.Blog ) }  );
    }, [blogId, setBlogLocalization, locale])

    return (
    <ContentBox>
        <div className="flex flex-col md:flex-row w-full overflow-hidden">
            <BlogMain Blog={ Blog } />
        </div>
    </ContentBox> )
}