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
		}catch(e) {}
	}, [searchParams]);

	return completeBlog; 
}