import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import { MenuContext } from "@/store/menu-context";
import { capLevel, levels } from "@/util/Blogs";
import { useContext } from "react";

export default function BlogNavBarItem( {id, children, level} ) {

	const {addQuery} = useUtilsSearchParam();
	level = capLevel( level );

	function handleOnClick() {
		addQuery( { 
			queryId : "chapter",
			queryValue : id
		} );
	}

	return (
		<button className={"dark:text-stone-400 text-stone-600 w-full h-full text-left " + levels[level]} onClick={handleOnClick}>
			{children}
		</button>
	);
}
