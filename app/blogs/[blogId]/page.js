import BlogLoader from "@/components/blogs/BlogLoader"

export default function page({params}){  
    return (
        <BlogLoader blogId={params.blogId} />
    )
}