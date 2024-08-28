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

    const { setMenu, menu, showValue } = useContext( MenuContext );
    const boxFixed = useRef();
    const [ boxProps, setBoxProps ] = useState({
        extended : false,
        scrollPosition : 0,
        boxHeight : 0,
        boxTopHeight : 100,
        position : "static"
    })

    function onHandleBackClick() {
        menu.selectedPost = null;
        setMenu( menu );
    }

    function onHandleExtendClick() {
        const boxPropsNew = {...boxProps};
        boxPropsNew.extended = !boxPropsNew.extended;
        setBoxProps( {...boxPropsNew} );
    }
    
    function handleScroll() {
        const boxPropsNew = {...boxProps};
        boxPropsNew.scrollPosition = window.pageYOffset;
        boxPropsNew.position = boxPropsNew.scrollPosition <= boxPropsNew.boxTopHeight ? "static" : "fixed w-[95vw] md:w-1/4 md:pr-4 top-0 xl:pr-1 xl:w-1/6";

        if ( boxFixed.current ) {
            boxPropsNew.boxHeight = boxFixed.current.offsetHeight;
        }

        setBoxProps( {...boxPropsNew} );
    }

    function calculateTopHeight() {
        const boxPropsNew = {...boxProps};
        boxPropsNew.boxTopHeight = boxPropsNew.scrollPosition + boxFixed.current.getBoundingClientRect().top;
        setBoxProps( {...boxPropsNew} );
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ JSON.stringify( boxProps ), menu.selectedPost.navBar]);

    useEffect( () => {
        let timer = setTimeout(() => {                       
            if ( boxProps.position == "static") {
                calculateTopHeight();
            }
        }, 100);

        return () => {
            clearTimeout( timer );
        };
    }, [ JSON.stringify( boxProps ), showValue ] )

<<<<<<< Updated upstream
    let position = "md:fixed ";
    position += scrollPosition <= 103 ? "static " : "fixed w-[95vw] top-0 z-30";

    return (
        <div className={`flex w-full flex-col md:w-1/4 p-2`}>
                <div className={`flex flex-col ${position} md:w-1/4 xl:w-1/6`} >
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
=======

    return (
        <div className={`flex w-full flex-col md:w-1/4 p-2 z-30`} style={{height: `${boxProps.boxHeight}px`}}>
            <div className={`flex flex-col ${boxProps.position} `} ref={boxFixed}>
                <button onClick={onHandleBackClick} className="bg-stone-600 hover:bg-stone-500 px-2 md:px-6 h-10 text-nowrap rounded-md flex items-center"> 
                    <FontAwesomeIcon 
                        icon={icon1} 
                        className={`w-[20px] h-[20px] transition ease-in-out hover:scale-[1.2]`} 
                    /> 
                    <div className="hidden md:block"> <Message code={ ["mainPage", "blogs", "back" ] } /> </div>
                </button>
                <div className={`bg-stone-800  mx-2 overflow-y-scroll transition ${ boxProps.extended ? "max-h-[75vh]" :  "max-h-[15vh]  md:max-h-[40vh]" } `}>
                    <BlogNavBar navBarItems={menu.selectedPost.navBar} />
>>>>>>> Stashed changes
                </div>
                <button onClick={onHandleExtendClick} className="bg-stone-600 hover:bg-stone-500 px-2 md:px-6 h-10 text-nowrap rounded-md flex items-center"> 
                    <FontAwesomeIcon 
                        icon={icon2} 
                        className={`w-[20px] h-[20px] transition ease-in-out hover:scale-[1.2] ` + ( boxProps.extended && "rotate-180" ) } 
                    /> 
                    
                </button>
            </div>
        </div>
    )
}