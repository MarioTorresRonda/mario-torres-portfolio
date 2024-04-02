'use client'

import { MenuContext } from "@/store/menu-context";
import CharacterBlock from "./CharacterBlock";
import Tooltip from "./Tooltip";
import { useContext } from "react";
import { useNavigate } from "@/hooks/useNavigate";

export default function NavBarItem( {title, alt, url} ) {

    const { menu } = useContext( MenuContext );
    const { navigate } = useNavigate( MenuContext);

    return <div className="flex h-[100%] items-center" onClick={() => navigate( title, url )} >
        <CharacterBlock
            className="flex justify-center h-[100%] w-[30%]"
            startCharacter="["
            endCharacter="]"
            mainClassName="text-[50px]"
        >
            <div className="w-[50px] flex flex-col items-center">
                <Tooltip text={alt} className="h-[86%]"> <p> {title} </p> </Tooltip> 
                { title === menu  && <div className="bg-slate-700 h-[7%] w-[120%] " ></div> }
            </div>
        </CharacterBlock>
    </div>
}