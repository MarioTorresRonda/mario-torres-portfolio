'use client'

import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import { MenuContext } from "@/store/menu-context";
import { useContext } from "react";

const levels = {
	0: "pl-0",
	1: "pl-2",
	2: "pl-4",
	3: "pl-6",
	4: "pl-8",
	5: "pl-10",
};

export default function BlogNavBarItem( {id, children, level} ) {


	const {addQuery} = useUtilsSearchParam();
    const {setMenu, menu} = useContext(MenuContext);

	function handleOnClick() {
		addQuery( { 
			queryId : "chapter",
			queryValue : id
		} );
		const newMenu = {...menu}
		const newSelectedPost = {...menu.selectedPost}
		newSelectedPost.scroll = true;
		newMenu.selectedPost = newSelectedPost;
		setMenu( newMenu )
	}

	return (
		<button className={"text-stone-400 w-full h-full text-left " + levels[level]} onClick={handleOnClick}>
			{children}
		</button>
	);
}
