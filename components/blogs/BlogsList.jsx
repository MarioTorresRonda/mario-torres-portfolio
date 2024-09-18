'use client'

import { blogList } from "@/data/blogs"
import ContentBox from "../Index/ContentBox"
import BlogItem from "./BlogItem"
import { useContext } from "react";
import { MenuContext } from "@/store/menu-context";

export default function BlogsList() {

    const { menu } = useContext( MenuContext );

    return ( 
        <ContentBox height={"auto"} className="mb-10 mt-20">
            <div className="sm:mx-10 w-full">
                <ul className="flex flex-col gap-6">
                    {blogList.map((item) => {    
                        return ( <li key={item.id} className="animate-fromTop"> 
                            <BlogItem blog={item} />
                        </li> )
                    })}
                </ul>
            </div>
        </ContentBox>
    )
}