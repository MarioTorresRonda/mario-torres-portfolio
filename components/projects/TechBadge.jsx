'use client'

import { useRef } from "react";
import RiskyModal from "../fragments/RiskyModal";
import Image from "next/image";

export default function TechBadge( { tech } ) {
    const ref = useRef();

    function onHandleClick() {
        ref.current.open();
    }
    
    return <>
        <RiskyModal modalRef={ref} url={tech.url} />
        <div className={` ${tech.color} px-2 py-1 rounded shadow-md  shadow-black/20 dark:shadow-black/50 hover:scale-95 transition-all flex flex-row gap-1`} onClick={onHandleClick}> 
             { tech.img && <div className="relative w-8 block"> <Image src={tech.img} fill={true} alt="icon" /> </div> } 
            <p>{ tech.name }</p>
        </div>
    </>
}