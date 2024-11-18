import { Suspense, useState, useRef, cloneElement, Fragment, useEffect } from "react";
import BlogSideBar from "./BlogSideBar";
import { useMessageText } from "@/hooks/useMessageText";
import Message from "../fragments/Message";
import BlogNavBarItem from "./blogNavBar/BlogNavBarItem";
import LZString from 'lz-string';

function createBlogComponent( layer, builtBlog, level, parentName ) {
    if ( layer != null ) {
        const name = parentName + "_" + layer.jsx.type.name;
        let childrenObj = null;
        if ( layer.children ) {
            const childrenArray = [];
            if ( layer.jsx.props.children ) {
                childrenArray.push( Array.isArray( layer.jsx.props.children ) ?  [...layer.jsx.props.children] : layer.jsx.props.children );
            }
            if ( layer.children ) {
                childrenArray.push( ...layer.children.map( element => createBlogComponent( element, layer.jsx.props.children, level + 1, name ) ) );
            }
            let iterator = 0;
            childrenObj = <Fragment>
                { childrenArray.map( element => {
                    return <Fragment key={iterator++}> { element } </Fragment>;
                } ) }
            </Fragment>;
        }

        let key = null;
        if ( layer.jsx.props.code ) {
            key = LZString.compressToEncodedURIComponent( name + "_" + layer.jsx.props.code.map( code => code.replaceAll(" ", "") ).join("_") );
            key = encodeURIComponent( key );
        }
        builtBlog = cloneElement( layer.jsx, {...layer.jsx.props, level, id :key }, childrenObj );
        return builtBlog;
    }
    return null;
}

function createNavBar( navBar, builtBlog ) {
    
    if ( builtBlog && typeof builtBlog === "object" ) {
        const { id, code, level, children } = builtBlog.props;
        if ( id ) {
            navBar[id] = <BlogNavBarItem level={level} id={id}> <Message code={code} /> </BlogNavBarItem>;
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

export default function BlogMain( { Blog } ) {

    const [navBar, setNavBar] = useState({});
    const [builtBlog, setBuiltBlog] = useState(null);

    useEffect(() => {
        setBuiltBlog( createBlogComponent( Blog, null, -1, "" ) );
    }, [Blog])

    useEffect(() => {
        setNavBar( createNavBar( {}, builtBlog ) );
    }, [builtBlog])

    return <>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogSideBar navBar={navBar} />
                <div className="px-4 md:flex-auto md:w-3/4 pt-2 md:pt-0">
                    { builtBlog && builtBlog }
                </div>
            </Suspense>
    </>
}