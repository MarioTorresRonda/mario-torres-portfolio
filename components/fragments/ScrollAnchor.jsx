import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import { MenuContext } from "@/store/menu-context";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";


export default function ScrollAnchor( {anchor, children} ) {

    const { getQuery } = useUtilsSearchParam()
    const queryValue = encodeURIComponent( getQuery( "chapter" ) );
    const [highlight, setHighlight] = useState(false)
    
    const classes = `transition-all duration-500 ${ highlight ? "animate-highlight" : "" } `;

    useEffect(() =>  {
        if ( queryValue == anchor ) {
            setHighlight( queryValue == anchor )
            const timeout = setTimeout(() => {
                setHighlight( false );
            }, 500);
            
            return () => {
                setHighlight( false );
                clearTimeout( timeout );
            }
        }
    }, [queryValue, anchor]);

    return <div className={classes} id={anchor} key={anchor}> {children} </div>
}