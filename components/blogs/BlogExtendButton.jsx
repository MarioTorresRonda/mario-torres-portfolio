import {faCaretDown as icon} from "@fortawesome/free-solid-svg-icons";

import FAI from "../fragments/FAI";

export default function BlogExtendButton({ onHandleExtendClick, scrollExpanded, show, children}) {

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
				<FAI
					icon={icon}
					className={`w-[20px] h-[20px] transition ease-in-out hover:scale-[1.2] ` + (scrollExpanded && "rotate-180")}
				/>
			</button>
			{children}
		</div>
	);
}
