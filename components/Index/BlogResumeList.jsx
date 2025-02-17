'use client'

import { blogList } from "@/data/blogs";
import ColoredButton from "../fragments/ColoredButton";
import BlogResumeItem from "./BlogResumeItem";
import { useState } from "react";

export default function BlogResumeList( {blogState} ) {

    const { page, setPage } = useState( 0 );
    const informedPage = page ? page : 0;

    const blogListActual = blogList.slice( informedPage * 3, (informedPage * 3) + 3 );

    function nextPage() {
        if ( blogList.length / 3 > informedPage + 1 ) {
            setPage( informedPage + 1 );
        }
    }

    function lastPage() {
        if ( informedPage > 0 ) {
            setPage( informedPage - 1 );
        }
    }
    

    return (
        <div className="flex flex-row items-center">           
            <div className="w-1/12 flex justify-center hover:scale-110">
                { informedPage > 0 &&
                <ColoredButton onClick={() => { lastPage() }} >
                    <p className="text-slate-200 dark:text-stone-800 text-[90px] -mt-[42px] -ml-[18px] select-none">
                        {'<'}
                    </p>
                </ColoredButton>
                }
            </div>
            <div className="w-10/12">
                <ul className="mt-2 h-[17rem]">
                    {blogListActual.map((item) => {    
                        return ( <li key={item.id}> 
                            <BlogResumeItem blog={item} blogState={blogState}/>
                        </li> )
                    })}
                </ul>
            </div>
            <div className="w-1/12 flex justify-center hover:scale-110 ">
                { ( blogList.length / 3 > informedPage+1) &&
                <ColoredButton onClick={() => { nextPage() }}>
                    <p className="text-slate-200 dark:text-stone-800 text-[90px] -mt-[42px] -ml-[24px]  select-none">
                        {'>'}
                    </p>
                </ColoredButton>
                }
            </div>
        </div>
    )
}