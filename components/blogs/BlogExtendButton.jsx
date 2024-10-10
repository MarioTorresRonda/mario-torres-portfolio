import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown as icon} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import {MenuContext} from "@/store/menu-context";
import useWindowSize from "@/hooks/useWindowSize";
import { isEmpty } from "@/util/Objects";

export default function BlogExtendButton({boxProps, onHandleExtendClick, isExtended, overflowBox, children}) {
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

	const buttonClasses = "bg-slate-400 dark:bg-stone-600 px-2 md:px-6 h-10 rounded-md flex items-center"
	if (!show) {
		return <div className={`${buttonClasses} justify-end `}> 
			{children}
		</div>;
	}


	return (
		<div
			onClick={onHandleExtendClick}
			className={`${buttonClasses} hover:bg-slate-500 dark:hover:bg-stone-500 w-full text-nowrap justify-between`}
		>
			<button>
				<FontAwesomeIcon
					icon={icon}
					className={`w-[20px] h-[20px] transition ease-in-out hover:scale-[1.2] ` + (isExtended && "rotate-180")}
				/>
			</button>
			{children}
		</div>
	);
}