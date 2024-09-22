import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import { MenuContext } from "@/store/menu-context";
import { useContext } from "react";

const levels = {
	1: "pl-0",
	2: "pl-2",
	3: "pl-4",
	4: "pl-6",
	5: "pl-8",
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
