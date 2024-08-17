'use client'

import { updateBubbleColors } from "@/util/DinamicColor";
import { useEffect, useState } from "react";

export default function DinamicColors() {
    
    const [time, setTime] = useState(0);
    const [ color1, setColor1 ] = useState( [255,0,0] );
    const [ color2, setColor2 ] = useState( [0,255,0] );
    updateBubbleColors( color1, color2, time );

    useEffect( () => {
        const timer = setTimeout(() => {
            if ( time >= 359 ) {
                setTime( 0 );
            }else{
                setTime( prevtime => prevtime + 1 );
            }
        }, 500);
        return () => {
            clearTimeout( timer );
        }

    }, [time]) 

    function print( param ) {
        setTime( 0 );
        setColor1(  [Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255)] )
        setColor2(  [Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255)] )
        console.log( param )
    }
    //print(0);

    return (
        <div>
            <div onClick={() => print(3)} class="rotate-[135deg] absolute -top-[16px] left-[64px] z-30 w-0 h-0 border-[30px] border-solid border-transparent border-t-[--myColorStartSimple]">
            </div>
            <div onClick={() => print(4)} class="rotate-[-45deg] absolute top-[26.3px] left-[106.3px] z-30 w-0 h-0 border-[30px] border-solid border-transparent border-t-[--myColorEndSimple]">
            </div>
        </div>
    )
}