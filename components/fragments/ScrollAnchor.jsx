import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";
import { MenuContext } from "@/store/menu-context";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";


export default function ScrollAnchor( {anchor, children} ) {

    const { getQuery } = useUtilsSearchParam()
    const queryValue = getQuery( "chapter" );
    const [hightlight, setHightlight] = useState(false)
    const {menu} = useContext(MenuContext);
    
    const classes = `transition-all duration-500 ${ hightlight ? "animate-hightlight" : "" } `;

    useEffect(() =>  {
        if ( queryValue == anchor ) {
            setHightlight( queryValue == anchor )
            const timeout = setTimeout(() => {
                setHightlight( false );
            }, 500);
            
            return () => {
                setHightlight( false );
                clearTimeout( timeout );
            }
        }
    }, [queryValue, menu.selectedPost.scroll]);

    return <div className={classes} id={anchor} key={anchor}> {children} </div>
}