import BlogImageWIthHoverText from "./BlogImageWIthHoverText";
import {faShareAltSquare as icon} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import RiskyModal from "@/components/fragments/RiskyModal";
import Message from "@/components/fragments/Message";
import FAI from "@/components/fragments/FAI";

export default function BlogImageUrl({title, desc, url, imageSrc}) {
	const ref = useRef();

	function onHandleClick() {
		ref.current.open();
	}

	return (
		<>
            <RiskyModal modalRef={ref} url={url} />
			<div className="flex bg-slate-400 dark:bg-stone-700 text-slate-700 dark:text-white">
				<p className="flex-1 text-xl text-center "> <Message code={title} /> {} </p>
				<button
					onClick={onHandleClick}
					className="hover:scale-125 hover:text-stone-300 focus:scale-125 focus:text-stone-300"
				>
					<FAI icon={icon} className="h-5 m-1 z-20 duration-100 " />
				</button>
			</div>
			<div className="h-3 bg-slate-400/50 dark:bg-stone-700/40 mx-3"></div>
			<BlogImageWIthHoverText height="h-52" imageSrc={imageSrc}>
				<div className="mx-8 text-center text-shadow shadow-black"> <Message code={desc} /> </div>
			</BlogImageWIthHoverText>
		</>
	);
}
