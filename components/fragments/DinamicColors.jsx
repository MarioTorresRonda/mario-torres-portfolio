'use client'

import { useMessageText } from "@/hooks/useMessageText";
import { updateBubbleColors } from "@/util/DinamicColor";
import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

export default function DinamicColors() {
    
    const getText = useMessageText();
    const [time, setTime] = useState(0);
    const [ color1, setColor1 ] = useState( [255,0,0] );
    const [ color2, setColor2 ] = useState( [0,255,0] );

    updateBubbleColors( color1, color2, time );

    useEffect( () => {
        const timer = setTimeout(() => {
            if ( time >= 359 ) {
                setTime( 0 );
            }else{
                setTime( prevtime => prevtime + 2 );
            }
        }, 1000);
        return () => {
            clearTimeout( timer );
        }

    }, [time]) 

    function changeColor( param ) {
        setTime( 0 );
        if ( param == 1 ) {
            setColor1(  [Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255)] );
        }else{
            setColor2(  [Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255)] );
        }
    }

    return (
        <div className="w-10 h-10 rounded-full bg-stone-600">
            <div className="w-10 h-10 rotate-[-45deg] ">                 
                <div className="rounded-t-full w-full h-1/2 bg-[--myColorStartSimple] hover:scale-125">
                    <Tooltip className="rotate-[45deg] h-full w-full" text={["commons", "configuration", "changeColor1"]}>
                        <button aria-label={getText(["commons", "configuration", "changeColor1"])} className="h-full w-full" onClick={() => changeColor(1)} />
                    </Tooltip>
                </div>
                <div className="rounded-b-full w-full h-1/2 bg-[--myColorEndSimple] hover:scale-125">
                    <Tooltip className="rotate-[45deg] h-full w-full" text={["commons", "configuration", "changeColor2"]}>
                        <button aria-label={getText(["commons", "configuration", "changeColor2"])} className="h-full w-full" onClick={() => changeColor(2)} />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}