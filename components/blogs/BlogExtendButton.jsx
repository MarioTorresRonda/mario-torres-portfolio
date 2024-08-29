import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown as icon} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import {MenuContext} from "@/store/menu-context";
import useWindowSize from "@/hooks/useWindowSize";
import { isEmpty } from "@/util/Objects";

export default function BlogExtendButton({boxProps, onHandleExtendClick, isExtended, overflowBox}) {
	const {menu} = useContext(MenuContext);
	const windowSize = useWindowSize();
	const [show, setShow] = useState(true);

	//extendedButton - if the component {overflowBox} is smaller than children, is should be hidden
	useEffect(() => {
		if (isEmpty(menu.selectedPost.navBar)) {
			return () => {};
		}
		if (!boxProps.extended) {
			setShow(overflowBox.current.offsetHeight < overflowBox.current.children[0].offsetHeight);
		}
	}, [menu.selectedPost.navBar, boxProps.boxHeight, boxProps.extended, boxProps.boxTopHeight, windowSize]);

	if (!show) {
		return <button className="bg-stone-600 px-2 md:px-6 h-10 rounded-md "> </button>;
	}

	return (
		<button
			onClick={onHandleExtendClick}
			className="bg-stone-600 hover:bg-stone-500 px-2 md:px-6 h-10 text-nowrap rounded-md flex items-center"
		>
			<FontAwesomeIcon
				icon={icon}
				className={`w-[20px] h-[20px] transition ease-in-out hover:scale-[1.2] ` + (isExtended && "rotate-180")}
			/>
		</button>
	);
}
