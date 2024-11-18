'use client'

import BlogLoader from "@/components/newBlogs/BlogLoader"

export default function page({params}){  
    return (
        <BlogLoader blogId={params.blogId} />
    )
}