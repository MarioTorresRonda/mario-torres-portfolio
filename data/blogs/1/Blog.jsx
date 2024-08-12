'use client'

import BlogChapter from "@/components/blogs/blogFragments/BlogChapter"
import BlogList from "@/components/blogs/blogFragments/BlogList"
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph"
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle"
import BlogTitle from "@/components/blogs/blogFragments/BlogTitle"
import Message from "@/components/fragments/Message"
import { MenuContext } from "@/store/menu-context"
import { useContext, useEffect, useRef } from "react"
import { useMessageText } from "@/hooks/useMessageText";
import BlogBackgroundImage from "@/components/blogs/blogFragments/BlogBackgroundImage"
import BlogSplit2 from "@/components/blogs/blogFragments/BlogSplit2"
import BlogImageWIthHoverText from "@/components/blogs/blogFragments/BlogImageWIthHoverText"


import headerImg from "@/public/Blog Preview.png"
import Idea1Img from "@/public/Notes.png"
import Idea2Img from "@/public/Medium.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogImageUrl from "@/components/blogs/blogFragments/BlogImageUrl"

export default function Blog() {
    
    const { setMenu, menu } = useContext( MenuContext );
    const blogInfoRef = useRef({
        navBar: [],
        uuid: crypto.randomUUID()
    })
    menu.blogInfo = blogInfoRef.current; 

    const completeBlog = ( 
        <div className="flex flex-col gap-2">
            <BlogBackgroundImage className="relative h-60" imageSrc={headerImg} imageClass="absolute items-center h-56 overflow-hidden foto-difuminada" imageAlt={["Blog", "image"]}>
                <div className="px-20 text-shadow-sm h-full w-full shadow-black flex flex-col items-center justify-center">
                    <BlogTitle blogRef={blogInfoRef} text={useMessageText( ["Blog", "title"] )} ></BlogTitle> 
                    <BlogSubtitle text={useMessageText( ["Blog", "subtitle"] )} ></BlogSubtitle> 
                </div>
            </BlogBackgroundImage>
            <BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText( ["Blog", "chapter 1"] )} >
                <BlogParagraph>
                    <Message code={["Blog", "chapter 1 desc"]} ></Message>
                </BlogParagraph>
            </BlogChapter> 
            <BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText( ["Blog", "chapter 2", "title"] )} >
                <BlogParagraph>
                    <Message code={["Blog", "chapter 2", "desc"]} ></Message>
                </BlogParagraph>
                <BlogList list={ useMessageText( ["Blog", "chapter 2", "list"] ).map( (item) => { return <p> {item} </p> } ) } />
            </BlogChapter>
            <BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText( ["Blog", "chapter 3", "title"] )} >
                <BlogParagraph>
                    <Message code={["Blog", "chapter 3", "desc"]} ></Message>
                </BlogParagraph>
            </BlogChapter>
            <BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText( ["Blog", "chapter 4", "title"] )} >
                <BlogParagraph>
                    <Message code={["Blog", "chapter 4", "desc"]} ></Message>
                </BlogParagraph>
                <BlogSplit2>
                    <BlogImageUrl 
                        title={useMessageText( ["Blog", "chapter 4", "idea1"] )} 
                        desc={useMessageText( ["Blog", "chapter 4", "idea1"] )} 
                        imageSrc={Idea1Img} 
                        />
                    <BlogImageUrl 
                        title={useMessageText( ["Blog", "chapter 4", "idea2"] )} 
                        desc={useMessageText( ["Blog", "chapter 4", "idea2"] )} 
                        imageSrc={Idea2Img} 
                        />
                    <BlogImageUrl 
                        title={useMessageText( ["Blog", "chapter 4", "idea2"] )} 
                        desc={useMessageText( ["Blog", "chapter 4", "idea2"] )} 
                        imageSrc={Idea2Img} 
                        />
                    <BlogImageUrl 
                        title={useMessageText( ["Blog", "chapter 4", "idea2"] )} 
                        desc={useMessageText( ["Blog", "chapter 4", "idea2"] )} 
                        imageSrc={Idea2Img} 
                        />
                    
                </BlogSplit2>
            </BlogChapter>
        </div>
    )

    menu.selectedPost.navBar = blogInfoRef.current.navBar;

    useEffect(() => {
        setMenu( menu );
    }, [])

    return completeBlog
}