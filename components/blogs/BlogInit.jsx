import BlogMain from "@/components/blogs/BlogMain";
import { blogList } from "@/data/blogs"
import { MenuContext } from "@/store/menu-context";
import { useContext, useEffect } from "react";

export default function BlogInit({blogId}){  

    const { menu, setMenu } = useContext( MenuContext );

    useEffect(() => {
        if ( !menu.selectedPost ) {
            const newMenu = {...menu}
            const blogItem =  blogList.find( (blog) => blog.id == blogId );
            newMenu.selectedPost = blogItem;
            setMenu( newMenu );
        }
    }, [menu.selectedPost, blogId, menu, setMenu])

    
    return (
        <BlogMain blogId={blogId} />
    )
}