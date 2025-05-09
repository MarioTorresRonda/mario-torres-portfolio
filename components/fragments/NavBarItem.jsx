'use client'

import { MenuContext } from "@/store/menu-context";
import { useNavigate } from "@/hooks/useNavigate";
import { useMessageText } from "@/hooks/useMessageText";

export default function NavBarItem( { newMenu, selected } ) {

    const { navigate } = useNavigate( MenuContext);
    const getText = useMessageText();
    
    const menuText = getText( newMenu.title )

    function onHandleClick() {
        navigate( newMenu );
    }

    return (
        <div className="flex h-[100%] p-2 items-center z-10 justify-end" >
            <button className="flex flex-row sm:flex-col items-center" onClick={() => onHandleClick()}>
                <p> <span className="color-dinamico-texto" > {newMenu.num}. </span> {menuText} </p>
                { selected && <div className="bg-slate-400 dark:bg-slate-700 ml-3 w-1 h-8 sm:ml-0 sm:h-1 sm:w-[120%]" ></div> }
            </button>
        </div> 
    )
}