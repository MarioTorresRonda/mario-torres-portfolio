'use client'

import ContentBox from "./ContentBox";
import Message from "../fragments/Message";
import BlogResumeItemImage from "./BlogResumeItemImage";
import BlogResumeList from "./BlogResumeList";
import { blogList } from "@/data/blogs";
import { useState } from "react";

export default function BlogsResume() {

    const [ selectedBlog, setSelectedBlog ] = useState( blogList[0] );

    return (<>
        <ContentBox height={"auto"} className="mb-10">
            <div className="px-6 flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 lg:order-2">
                    <p className="text-[30px] text-center"> <Message code={ ["mainPage", "blogs", "mainTitle"] } /> </p>
                    <p className="text-center"> <Message code={ ["mainPage", "blogs", "mainDesc"] } /> </p>
                    <BlogResumeList blogState={[selectedBlog, setSelectedBlog]} />
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <BlogResumeItemImage blog={selectedBlog} />
                </div>
            </div>
        </ContentBox>
    </>)
}