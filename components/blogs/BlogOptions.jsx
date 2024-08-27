'use client'

import Message from "../fragments/Message";
import BlogNavBar from "./BlogNavBar";
import SVG from "../fragments/SVG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft as icon1 } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown as icon2 } from "@fortawesome/free-solid-svg-icons"
import { MenuContext } from "@/store/menu-context";
import { useContext, useEffect, useRef, useState } from "react";


export default function BlogOptions() {

    const { setMenu, menu } = useContext( MenuContext );
    const [ extended, setExtended ] = useState( false )
    const [scrollPosition, setScrollPosition] = useState(0);

    function onHandleBackClick() {
        menu.selectedPost = null;
        setMenu( menu );
    }

    function onHandleExtendClick() {
        setExtended( !extended );
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let position = " ";
    position += scrollPosition <= 103 ? "static " : "fixed w-[95vw] md: top-0 z-30 md:md:w-1/6";

    return (
        <div className={`flex w-full flex-col md:w-1/4 p-2`}>
                <div className={`flex flex-col ${position}  `} >
                    <button onClick={onHandleBackClick} className="bg-stone-600 hover:bg-stone-500 px-2 md:px-6 h-10 text-nowrap rounded-md flex items-center"> 
                        <FontAwesomeIcon 
                            icon={icon1} 
                            className={`w-[20px] h-[20px] transition-transform ease-in-out hover:scale-[1.2]`} 
                        /> 
                        <div className="hidden md:block"> <Message code={ ["mainPage", "blogs", "back" ] } /> </div>
                    </button>
                    <div className={`bg-stone-800  mx-2 overflow-y-scroll transition-all ${ extended ? "max-h-[75vh]" :  "max-h-[15vh]  md:max-h-[40vh]" } `}>
                        <BlogNavBar navBarItems={menu.selectedPost.navBar} />
                    </div>
                    <button onClick={onHandleExtendClick} className="bg-stone-600 hover:bg-stone-500 px-2 md:px-6 h-10 text-nowrap rounded-md flex items-center"> 
                        <FontAwesomeIcon 
                            icon={icon2} 
                            className={`w-[20px] h-[20px] transition-transform ease-in-out hover:scale-[1.2] ` + ( extended && "rotate-180" ) } 
                        /> 
                        
                    </button>
                </div>
        </div>
    )
}