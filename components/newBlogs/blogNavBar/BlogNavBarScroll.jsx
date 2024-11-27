import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";

export default function BlogNavBarScroll( {onContentUpdate, navBar, expanded, children } ) {

    const windowSize = useWindowSize();
    const overflowBox = useRef();
    
    const [boxHeight, setBoxHeight] = useState(0)
    const [contentHeight, setContentHeight] = useState(0);

    const maxHeightOverflowBox = expanded ? "max-h-[calc(75vh-5rem)]" :  "max-h-[15vh]  md:max-h-[40vh]";

    //Calculate inside box content height
    useEffect(() => {
        setContentHeight( overflowBox?.current?.children[0].offsetHeight );
    }, [ overflowBox, navBar ])  

    //The BoxHeight can change when windowSize change due to having vh as class
    useEffect(() => {
        setBoxHeight( overflowBox?.current?.offsetHeight );
    }, [ overflowBox, navBar, windowSize, expanded ])  

    //expanded for when the window height change when the navbar was expanded and its was not updated
    useEffect(() => {
        if ( !expanded ) {
            onContentUpdate( boxHeight < contentHeight );
        }
    }, [boxHeight, contentHeight, onContentUpdate, expanded])  

    return ( 
    <div className={`bg-slate-200 dark:bg-stone-800 mx-2 overflow-y-scroll transition ${maxHeightOverflowBox}`} ref={overflowBox}>
        {children}
    </div>)
}