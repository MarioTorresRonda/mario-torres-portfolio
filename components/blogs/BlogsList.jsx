'use client'

import { blogList } from "@/data/blogs"
import ContentBox from "../Index/ContentBox"
import BlogItem from "./BlogItem"
import { useContext } from "react";
import { MenuContext } from "@/store/menu-context";

export default function BlogsList() {

    const { menu } = useContext( MenuContext );

    if ( menu.selectedPost ) {
        return <div></div>
    }

    return ( 
    <ContentBox height={"auto"} className="mb-10 mt-20">
        <div className="mx-10 flex flex-col gap-2 w-full">
            <ul>
                {blogList.map((item) => {    
                    return ( <li key={item.id}> 
                        <BlogItem blog={item} />
                    </li> )
                })}
            </ul>
        </div>
    </ContentBox>
    )
}