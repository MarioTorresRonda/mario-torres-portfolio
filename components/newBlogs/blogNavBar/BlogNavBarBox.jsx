import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

import Localization from "@/components/fragments/Localization";
import BlogBackButton from "../BlogBackButton";
import BlogExtendButton from "../BlogExtendButton";
import useWindowSize from "@/hooks/useWindowSize";
import BlogNavBarScroll from "./BlogNavBarScroll";
import useWindowScroll from "@/hooks/useWindowScroll";
import { MenuContext } from "@/store/menu-context";

const fixedClass = "fixed top-0";
const staticClass = "static";

export default function BlogBagNavBox({ navBar, updateSideBarHeight, children}) {

    const windowSize = useWindowSize();
    const windowScroll = useWindowScroll();    
    const { showValue } = useContext( MenuContext );

    const boxFixed = useRef()

    const [boxHeightFromTop, setBoxHeightFromTop ] = useState(100);
    const [boxClassPosition, setBoxClassPosition ] = useState("static")

    const [scrollExpanded, setScrollExpanded] = useState(false);
    const [showExpandButton, setShowExpandButton] = useState(false);

    //To always calculate height from the box to the top and set the position to fixed when is needed.
    useEffect(() => {
        setBoxHeightFromTop( boxFixed.current.getBoundingClientRect().top + windowScroll[1] );
        if ( boxHeightFromTop <= windowScroll[1] ) {
            setBoxClassPosition(fixedClass)
        }else{
            setBoxClassPosition(staticClass) 
        }
    }, [boxFixed, boxHeightFromTop, showValue, windowScroll])

    useEffect( () => {
        //if boxClassPosition is not static, boxFixed height is always equals to 0
        //if is expanded it shouldn't update, if not the page move strange
        if ( boxClassPosition == staticClass && !scrollExpanded ) {
            updateSideBarHeight( boxFixed.current ? boxFixed.current.offsetHeight : 100 );
        }
    }, [boxClassPosition, updateSideBarHeight, windowSize, scrollExpanded ]);

    function onHandleExtendClick() {
        setScrollExpanded( oldExtended => !oldExtended );
    }

    useEffect(() => {
        setScrollExpanded( false );
    }, [ windowSize ])

    return ( 
        <div ref={boxFixed}>
            <div className={`flex flex-col w-[calc(98vw-15px-0.5rem)] md:w-[25vw] xl:w-[16vw] bg-slate-200 dark:bg-stone-800 ${boxClassPosition}`}>
                <BlogBackButton />
                <BlogNavBarScroll expanded={scrollExpanded} onContentUpdate={setShowExpandButton} navBar={navBar} >
                    {children}
                </BlogNavBarScroll>
                <BlogExtendButton onHandleExtendClick={onHandleExtendClick} show={showExpandButton} scrollExpanded={scrollExpanded} navBar={navBar}> 
                    <Localization className=""/>
                </BlogExtendButton>
            </div>
        </div>
    )
}