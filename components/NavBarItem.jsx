'use client'

import { MenuContext } from "@/store/menu-context";
import { useContext } from "react";
import { useNavigate } from "@/hooks/useNavigate";

export default function NavBarItem( {id, title, num, url} ) {

    const { menu } = useContext( MenuContext );
    const { navigate } = useNavigate( MenuContext);

    function onHandleClick() {
        navigate( id, url )
    }

    return <button className="flex h-[100%] items-center z-10" onClick={() => onHandleClick()}>
        <div className=" flex flex-col items-center">
            <p> <span className="color-dinamico-texto" > {num}. </span> {title} </p>
            { id == menu && <div className="bg-slate-700 h-1 w-[120%]" ></div> }
        </div>
    </button>
}