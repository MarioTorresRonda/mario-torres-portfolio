'use client'

import Message from "../fragments/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft as icon } from "@fortawesome/free-solid-svg-icons"
import { MenuContext } from "@/store/menu-context";
import { useContext } from "react";
import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";

export default function BlogBackButton() {
    
    const { setMenu, menu } = useContext( MenuContext );
	const { removeAllQuery } = useUtilsSearchParam();

    function onHandleBackClick() {
        menu.selectedPost = null;
        removeAllQuery();
        setMenu( {...menu} );
    }

    return ( <button onClick={onHandleBackClick} className="bg-slate-400 hover:bg-slate-500  dark:bg-stone-600 dark:hover:bg-stone-500 px-2 md:px-6 h-10 text-nowrap rounded-md flex items-center"> 
        <FontAwesomeIcon 
            icon={icon} 
            className={`w-[20px] h-[20px] transition ease-in-out hover:scale-[1.2]`} 
        /> 
        <div className="hidden md:block"> <Message code={ ["mainPage", "blogs", "back" ] } /> </div>
    </button> )
}