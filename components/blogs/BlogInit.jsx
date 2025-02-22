import BlogNavBarItem from "./blogFragments/BlogNavBarItem";
import {useEffect, useState} from "react";
import Message from "../fragments/Message";
import { useSearchParams } from "next/navigation";
import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import useWindowSize from "@/hooks/useWindowSize";

export default function BlogInit({children}) {


    const { getQuery, removeQuery } = useUtilsSearchParam()
    const queryValue = encodeURIComponent( getQuery( "chapter" ) );

	const [ yOffset, setYOffset ] = useState( -20 );
    const windowSize = useWindowSize()


	useEffect(() => {
		if ( queryValue && queryValue != "null" ) {
			const element = document.getElementById(queryValue);
			if ( !element ) {
				removeQuery({ queryId: "chapter"});
				return;
			}
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
			
			window.scrollTo({top: y, behavior: 'smooth'});
		}
	}, [queryValue, removeQuery, yOffset])

	useEffect(() => {
		if ( windowSize[0] > 767) {
			setYOffset( -20 );
		}else{
			setYOffset( -220 );
		}
	}, [windowSize])
	

	return <div className="flex flex-col gap-2">{children}</div>;
}
