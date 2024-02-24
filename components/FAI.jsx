import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FAI( { icon } ) {
    return ( <FontAwesomeIcon
    icon={icon}
    className={`text-stone-700 w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px] transition-transform ease-in-out hover:scale-[1.2] hover:text-stone-500 `}
    /> )
}