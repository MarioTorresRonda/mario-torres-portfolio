import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClickableSocial({ icon, ...props }) {
	return (
		<>
		<FontAwesomeIcon
			icon={icon}
			className={`text-stone-700 w-[50px] h-[50px]
			transition-transform ease-in-out hover:scale-[1.2] hover:text-stone-500 `}
			fixedWidth
			/>
		<p className="mt-5 ml-[-17px] text-stone-700 text-2xl">
			,
		</p>
		</>
	);
}
