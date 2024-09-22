import { MenuContext } from "@/store/menu-context";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

export default function BlogRef( {blogInfoRef, children} ) {

    const {setMenu, menu} = useContext(MenuContext);
	const searchParams = useSearchParams();

	menu.blogInfo = blogInfoRef.current;

	const completeBlog = (
	    children
	);

	menu.selectedPost.navBar = blogInfoRef.current.navBar;

	useEffect(() => {
		setMenu(menu);
	}, []);

	useEffect(() => {
		try{
			document.getElementById(searchParams.get("chapter")).scrollIntoView();
			if ( menu.selectedPost.scroll ) {
				const newSelectedPost = {...menu.selectedPost}
				newSelectedPost.scroll = false;
				const newMenu = {...menu}
				newMenu.selectedPost = newSelectedPost;
				setMenu( newMenu )
			}
		}catch(e) {}
	}, [searchParams, menu.selectedPost.scroll]);

	return completeBlog; 
}