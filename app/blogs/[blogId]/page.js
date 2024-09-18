'use client'

import BlogMain from "@/components/blogs/BlogMain";
import { blogList } from "@/data/blogs"
import { MenuContext } from "@/store/menu-context";
import { useContext, useEffect } from "react";

export default function page({params}){  

    const { menu, setMenu } = useContext( MenuContext );

    useEffect(() => {
        if ( !menu.selectedPost ) {
            const newMenu = {...menu}
            const blogItem =  blogList.find( (blog) => blog.id == params.blogId );
            newMenu.selectedPost = blogItem;
            setMenu( newMenu );
        }
    }, [menu.selectedPost])

    
    return (
        <BlogMain blogId={params.blogId} />
    )
}