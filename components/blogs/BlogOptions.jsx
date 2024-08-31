'use client'

import Message from "../fragments/Message";
import BlogNavBar from "./BlogNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft as icon1 } from "@fortawesome/free-solid-svg-icons"
import { MenuContext } from "@/store/menu-context";
import { useContext, useEffect, useRef, useState } from "react";
import { isEmpty } from "@/util/Objects";
import BlogExtendButton from "./BlogExtendButton";
import useWindowSize from "@/hooks/useWindowSize";
import BlogBackButton from "./BlogBackButton";

export default function BlogOptions() {

    const { setMenu, menu, showValue } = useContext( MenuContext );
    const boxFixed = useRef();
    const overflowBox = useRef();
    const windowSize = useWindowSize()

    const [ boxProps, setBoxProps ] = useState({
        extended : false,
        scrollPosition : 0,
        boxHeight : 0,
        boxTopHeight : 100,
        position : "static"
    })

    const [oldWindow, setOldWindow] = useState([0,0]);

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

        const boxPropsNew = {...boxProps};
        if ( windowSize[0] != oldWindow[0] || windowSize[1] != oldWindow[1] ) { 
            boxPropsNew.extended = false;
            setOldWindow([windowSize[0], windowSize[1]])
            setBoxProps( {...boxPropsNew} );
        }

        

    }, [windowSize[0], windowSize[1]])

    useEffect(() => {
        
        if ( isEmpty( menu.selectedPost.navBar) ) {
            return () => {};
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();  

        let timer = setTimeout(() => {                       
            if ( boxProps.position == "static") {
                calculateTopHeight();
            }
        }, 100);

        return () => {
            clearTimeout( timer );
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ JSON.stringify( boxProps ), menu.selectedPost.navBar, showValue]);

    return (
        <div className={`flex w-full flex-col md:w-1/4 p-2 z-30`} style={{height: `${boxProps.boxHeight}px`}}>
            <div className={`flex flex-col ${boxProps.position} `} ref={boxFixed}>
                <BlogBackButton />
                <div className={`bg-slate-200 dark:bg-stone-800  mx-2 overflow-y-scroll transition ${ boxProps.extended ? "max-h-[75vh]" :  "max-h-[15vh]  md:max-h-[40vh]" } `} ref={overflowBox}>
                    <BlogNavBar navBarItems={menu.selectedPost.navBar} />
                </div>
                <BlogExtendButton boxProps={boxProps} onHandleExtendClick={onHandleExtendClick} isExtended={boxProps.isExtended } overflowBox={overflowBox}/>
            </div>
        </div>
    )
}