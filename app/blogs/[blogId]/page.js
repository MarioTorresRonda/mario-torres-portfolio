import BlogLoader from "@/components/blogs/BlogLoader"

export default async function page({params}){  
    params = await params;
    return (
        <BlogLoader blogId={params.blogId} />
    )
}