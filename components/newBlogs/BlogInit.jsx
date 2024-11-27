import BlogNavBarItem from "../blogs/blogFragments/BlogNavBarItem";
import {useEffect, useState} from "react";
import Message from "../fragments/Message";
import { useSearchParams } from "next/navigation";
import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import useWindowSize from "@/hooks/useWindowSize";

export default function BlogInit({children}) {


    const { getQuery } = useUtilsSearchParam()
    const queryValue = encodeURIComponent( getQuery( "chapter" ) );

	const [ yOffset, setYOffset ] = useState( -20 );
    const windowSize = useWindowSize()


	useEffect(() => {
		if ( queryValue && queryValue != "null" ) {
			const element = document.getElementById(queryValue);
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
			
			window.scrollTo({top: y, behavior: 'smooth'});
		}
	}, [queryValue, yOffset])

	useEffect(() => {
		if ( windowSize[0] > 767) {
			setYOffset( -20 );
		}else{
			setYOffset( -220 );
		}
	}, [windowSize])
	

	return <div className="flex flex-col gap-2">{children}</div>;
}
