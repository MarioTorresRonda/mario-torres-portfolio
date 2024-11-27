import { useEffect, useState } from "react";
import BlogNavBarItem from "./blogNavBar/BlogNavBarItem";
import Message from "../fragments/Message";
import BlogNavBar from "./blogNavBar/BlogNavBar";
import BlogBagNavBox from "./blogNavBar/BlogNavBarBox";

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

    const [navBar, setNavBar] = useState({});
    const [sideBarHeight, setSideBarHeight] = useState(100);

    useEffect(() => {
        if ( blog ) {
            setNavBar( createNavBar( {}, blog ) );
        }
    }, [blog])

    function updateSideBarHeight( newHeight ) {
        setSideBarHeight( newHeight );
    }

    return (
        <div className={`flex w-full flex-col md:w-1/4 p-2 z-10`} style={{height: `${sideBarHeight}px`}} >
            <BlogBagNavBox navBar={navBar} updateSideBarHeight={updateSideBarHeight}>
                <BlogNavBar navBarItems={navBar} />
            </BlogBagNavBox>
        </div>
    )
}