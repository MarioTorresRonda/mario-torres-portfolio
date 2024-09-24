import useWindowSize from "@/hooks/useWindowSize";
import { MenuContext } from "@/store/menu-context";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function BlogRef( {children} ) {

    const {setMenu, menu} = useContext(MenuContext);
	const [ yOffset, setYOffset ] = useState( -20 );
	const searchParams = useSearchParams();
    const windowSize = useWindowSize()

	const completeBlog = (
	    children
	);
	
	useEffect(() => {
		//Update navbar
		menu.selectedPost.navBar = menu.blogInfo.current.navBar;
		setMenu(menu);
	}, []);

	useEffect(() => {
		try{
			const element = document.getElementById(searchParams.get("chapter"));
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

			window.scrollTo({top: y, behavior: 'smooth'});

			if ( menu.selectedPost.scroll ) {
				const newSelectedPost = {...menu.selectedPost}
				newSelectedPost.scroll = false;
				const newMenu = {...menu}
				newMenu.selectedPost = newSelectedPost;
				setMenu( newMenu )
			}
		}catch(e) {}
	}, [searchParams, menu.selectedPost.scroll]);

	useEffect(() => {
		if ( windowSize[0] > 767) {
			setYOffset( -20 );
		}else{
			setYOffset( -220 );
		}
	}, [windowSize[0]])

	return completeBlog; 
}