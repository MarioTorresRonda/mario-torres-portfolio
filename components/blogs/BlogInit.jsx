import BlogNavBarItem from "./blogFragments/BlogNavBarItem";
import {useEffect, useState} from "react";
import Message from "../fragments/Message";
import { useSearchParams } from "next/navigation";
import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import useWindowSize from "@/hooks/useWindowSize";
import useDocumentHeight from "@/hooks/useDocumentHeight";

export default function BlogInit({children}) {


    const { getQuery, removeQuery } = useUtilsSearchParam()
    const queryValue = encodeURIComponent( getQuery( "chapter" ) );

	const [ yOffset, setYOffset ] = useState( -20 );
	const [ lastQuery, setLastQuery ] = useState();
    const windowSize = useWindowSize();
	const documentHeight = useDocumentHeight();

	const [lastWindowHeight, setLastWindowHeight] = useState(documentHeight);
	const [scrolling, setScrolling ] = useState( false );

	useEffect(() => {
		if ( lastQuery != queryValue || ( documentHeight != lastWindowHeight && scrolling ) ) {
			
			setLastQuery( queryValue )

			if ( queryValue && queryValue != "null" ) {
				//If element does not exist, do not continue to search or scroll
				const element = document.getElementById(queryValue);
				if ( !element ) {
					removeQuery({ queryId: "chapter"});
					return;
				}
				const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
				
				setLastWindowHeight( documentHeight );
				window.scrollTo({top: y});
				document.body.style.overflow = 'hidden';
				setScrolling( true );
			}
		}


		
	}, [lastQuery, queryValue, removeQuery, yOffset, documentHeight, lastWindowHeight, scrolling])
	
	useEffect(() => {
		const timeout = setTimeout(() => {
			document.body.style.overflow = '';
			setScrolling( false );
		}, 500);
		
		return () => {
			clearTimeout( timeout );
		}
	}, [ documentHeight, lastWindowHeight, scrolling ])
	

	useEffect(() => {
		if ( windowSize[0] > 767) {
			setYOffset( -20 );
		}else{
			setYOffset( -220 );
		}
	}, [windowSize]);
	

	return <div className="flex flex-col gap-2">{children}</div>;
}
