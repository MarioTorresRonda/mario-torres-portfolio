'use client'

import { Suspense, useState, cloneElement, Fragment, useEffect } from "react";
import BlogSideBar from "./BlogSideBar";
import crypto from 'crypto';
import BlogTitle from "./blogFragments/BlogTitle";
import BlogChapter from "./blogFragments/BlogChapter";
import CodeBoxContextProvider from "@/store/codebox-context";

const chapterTypes = [
    BlogTitle,
    BlogChapter
]

function createBlogComponent( layer, level, parentName ) {
    if ( layer != null ) {
        //This types indicates when chapter start, chapters are shown in navbar.
        const isChapter = chapterTypes.indexOf( layer.type ) != -1;
        let finalKey = null;
        let childrenObj = null;
        let name = parentName.join("_");
        if ( isChapter ) {
            parentName = [...parentName, layer.type.name];
            name = parentName.join("_");
            level = level + 1; 
            const unCompressedKey = name + "_" + layer.props.code.map( code => code.replaceAll(" ", "") ).join("_");
            const compressedKey = crypto.createHash('sha1').update(unCompressedKey).digest( 'base64' );
            finalKey = encodeURIComponent( compressedKey.substring(0, 15) );
        }

        if ( layer.props.children ) {
            if ( Array.isArray( layer.props.children ) ) {
                const childrenArray = [];
                childrenArray.push( ...layer.props.children.map( element => createBlogComponent( element, level, parentName ) ) );
                let iterator = 0;
                childrenObj = childrenArray.map( element => {
                        return <Fragment key={name + iterator++}> { element } </Fragment>;
                } );
            }else{
                childrenObj = createBlogComponent( layer.props.children,level + 1, parentName );
            }
        }

        const newLayer = cloneElement( layer, {...layer.props, level, id : finalKey }, childrenObj );
        return newLayer;
    }
    return null;
}

export default function BlogMain( { Blog } ) {

    const [builtBlog, setBuiltBlog] = useState(null);

    useEffect(() => {
        if ( Blog ) {
            setBuiltBlog( createBlogComponent( Blog, -1, [] ) );
        }
    }, [Blog])

    return <>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogSideBar blog={builtBlog} />
                <CodeBoxContextProvider>
                    <div className="px-4 md:flex-auto md:w-3/4 pt-2 md:pt-0">
                        { builtBlog && builtBlog }
                    </div>
                </CodeBoxContextProvider>
            </Suspense>
    </>
}