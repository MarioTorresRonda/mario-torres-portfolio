import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ClickableSocial({ icon, comma, ...props }) {
	return (
		<Link className="flex ml-[-10px]" {...props} >
		<FontAwesomeIcon
			icon={icon}
			className={`text-stone-700 w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px] transition-transform ease-in-out hover:scale-[1.2] hover:text-stone-500 `}
			/>
		{ comma && <p className="lg:mt-5 text-stone-700 text-md lg:text-2xl">
			,
		</p> }
		</Link>
	);
}
