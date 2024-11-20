import { useCallback, useEffect, useRef, useState } from "react";
import BlogBackButton from "./BlogBackButton";
import Localization from "../fragments/Localization";
import BlogExtendButton from "./BlogExtendButton";
import useWindowSize from "@/hooks/useWindowSize";
import BlogNavBar from "./blogNavBar/BlogNavBar";
import BlogNavBarItem from "./blogNavBar/BlogNavBarItem";
import Message from "../fragments/Message";


function createNavBar( navBar, builtBlog ) {
    if ( builtBlog && typeof builtBlog === "object" ) {
        const { id, code, level, children } = builtBlog.props;
        if ( id ) {
            navBar[id] = <BlogNavBarItem    level={level} id={id}> <Message code={code} /> </BlogNavBarItem>;
        }
        if ( children ) {
            if ( Array.isArray( children ) ) {
                children.forEach(element => {
                    navBar = createNavBar( navBar, element )
                });
            }else{
                navBar = createNavBar( navBar, children );
            }
        }
    }
    return navBar;
}

export default function BlogSideBar({ blog }) {

    const overflowBox = useRef()
    const boxFixed = useRef()
    const windowSize = useWindowSize()

    const [navBar, setNavBar] = useState({});
    const [extended, setExtended] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [boxTopHeight, setBoxTopHeight] = useState(100);
    const [boxHeight, setBoxHeight] = useState(100);
    const [oldWindow, setOldWindow ] = useState([0,0]);	
    const [showExpandButton, setShowExpandButton] = useState(true);
    
    const position = scrollPosition <= boxTopHeight ? "static" : "fixed w-[95vw] md:w-1/4 md:pr-4 top-0 xl:pr-1 xl:w-1/6" ;
    const maxHeightOverflowBox = extended ? "max-h-[75vh]" :  "max-h-[15vh]  md:max-h-[40vh]";

    useEffect(() => {
        if ( blog ) {
            setNavBar( createNavBar( {}, blog ) );
        }
    }, [blog])

    function onHandleExtendClick() {
        setExtended( oldExtended => !oldExtended );
    }

    const handleScroll = useCallback( () => {
        setScrollPosition( window.pageYOffset );
        if ( boxFixed.current ) {
            setBoxHeight( boxFixed.current.offsetHeight );
        }
    }, [boxFixed]);

    const calculateTopHeight = useCallback( () => {
        if ( boxFixed.current ) {
            setBoxTopHeight( scrollPosition + boxFixed.current.getBoundingClientRect().top );
        }
    }, [scrollPosition, boxFixed]);

    useEffect(() => {
        if ( windowSize[0] != oldWindow[0] || windowSize[1] != oldWindow[1] ) { 
            setExtended( false );
            setOldWindow([windowSize[0], windowSize[1]])
        }
    }, [oldWindow, windowSize])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, navBar, extended])
    
    useEffect(() => {
        if ( position == "static") {
            calculateTopHeight();
        }
    }, [calculateTopHeight, position]);

    //extendedButton - if the component {overflowBox} is smaller than children, is should be hidden
	useEffect(() => {
		if (!extended) {
			setShowExpandButton(overflowBox.current.offsetHeight < overflowBox.current.children[0].offsetHeight);
		}
	}, [windowSize, extended, overflowBox, navBar]);

    return (
        <div className={`flex w-full flex-col md:w-1/4 p-2 z-10`} style={{height: `${boxHeight}px`}} >
            <div className={`flex flex-col ${position} `} ref={boxFixed}>
                <BlogBackButton />
                <div className={`bg-slate-200 dark:bg-stone-800  mx-2 overflow-y-scroll transition ${maxHeightOverflowBox}`} ref={overflowBox}>
                    <BlogNavBar navBarItems={navBar} />
                </div>
                <BlogExtendButton onHandleExtendClick={onHandleExtendClick} show={showExpandButton} isExtended={extended} overflowBox={overflowBox} navBar={navBar}> 
                    <Localization className=""/>
                </BlogExtendButton>
            </div>
        </div>
    )
}