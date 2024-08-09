'use client'

import { MenuContext } from "@/store/menu-context";
import { useContext } from "react";
import { useNavigate } from "@/hooks/useNavigate";
import { useMessageText } from "@/hooks/useMessageText";

export default function NavBarItem( { newMenu } ) {

    const { menu } = useContext( MenuContext );
    const { navigate } = useNavigate( MenuContext);
    
    const menuText = useMessageText( newMenu.title )

    function onHandleClick() {
        navigate( newMenu );
    }

    return <button className="flex h-[100%] items-center z-10" onClick={() => onHandleClick()}>
        <div className=" flex flex-col items-center">
            <p> <span className="color-dinamico-texto" > {newMenu.num}. </span> {menuText} </p>
            { menu && newMenu.symbol == menu.symbol && <div className="bg-slate-700 h-1 w-[120%]" ></div> }
        </div>
    </button>
}