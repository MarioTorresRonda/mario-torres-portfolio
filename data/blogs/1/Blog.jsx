'use client'

import BlogChapter from "@/components/blogs/blogFragments/BlogChapter"
import BlogList from "@/components/blogs/blogFragments/BlogList"
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph"
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle"
import BlogTitle from "@/components/blogs/blogFragments/BlogTitle"
import Message from "@/components/fragments/Message"
import { MenuContext } from "@/store/menu-context"
import { useContext, useEffect } from "react"
import { useMessageText } from "@/hooks/useMessageText";

export default function Blog() {
    
    const navBar = {}

    const { setMenu, menu } = useContext( MenuContext );

    const reasonList = useMessageText( ["Blog", "chapter 2", "list"] ).map( (item) => { return <p> {item} </p> } )

    const completeBlog = ( 
        <div className="flex flex-col gap-2">
            <BlogTitle id={1} navBar={navBar} text={useMessageText( ["Blog", "title"] )} ></BlogTitle> 
            <BlogSubtitle text={useMessageText( ["Blog", "subtitle"] )} ></BlogSubtitle> 
            <BlogChapter id={2} level={1} navBar={navBar} text={useMessageText( ["Blog", "chapter 1"] )} >
                <BlogParagraph>
                    <Message code={["Blog", "chapter 1 desc"]} ></Message>
                </BlogParagraph>
            </BlogChapter> 
            <BlogChapter id={3} level={1} navBar={navBar} text={useMessageText( ["Blog", "chapter 2", "title"] )} >
                <BlogParagraph>
                    <Message code={["Blog", "chapter 2", "desc"]} ></Message>
                    <BlogList list={ reasonList } />
                </BlogParagraph>
            </BlogChapter>
        </div>
    )

    menu.selectedPost.navBar = navBar;

    useEffect(() => {
        setMenu( menu );
    }, [])

    return completeBlog
}