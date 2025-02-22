'use client'
import { blogList } from "@/data/blogs";
import ColoredButton from "../fragments/ColoredButton";
import BlogResumeItem from "./BlogResumeItem";
import { useContext, useEffect } from "react";
import { MenuContext } from "@/store/menu-context";
import { home } from "@/data/navBar";


export default function BlogResumeList() {

    var { menu, setMenu } = useContext( MenuContext ); 
    const blogListActual = blogList.slice( menu.page * 3, (menu.page * 3) + 3 );

    function nextPage() {
        if ( blogList.length / 3 > menu.page+1) {
            menu.page = menu.page + 1
            setMenu( menu );
        }
    }

    function lastPage() {
        if ( menu.page > 0 ) {
            menu.page = menu.page - 1
            setMenu( menu );
        }
    }
    
    return (
        <div className="flex flex-row items-center">           
            <div className="w-1/12 flex justify-center hover:scale-110">
                { menu.page > 0 &&
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
                            <BlogResumeItem blog={item} />
                        </li> )
                    })}
                </ul>
            </div>
            <div className="w-1/12 flex justify-center hover:scale-110 ">
                { ( blogList.length / 3 > menu.page+1) &&
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