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

    function changeColor( param ) {
        setTime( 0 );
        if ( param == 1 ) {
            setColor1(  [Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255)] );
        }else{
            setColor2(  [Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255), Math.trunc(Math.random() * 255)] );
        }
    }

    return (
        <div className="w-10 h-10 mt-6 rounded-full rotate-[-45deg] bg-stone-600">
            <div  className="rounded-t-full w-full h-1/2 bg-[--myColorStartSimple] hover:scale-125">
                <button className="h-full w-full" onClick={() => changeColor(1)}>
                </button>
            </div>
            <div className="rounded-b-full w-full h-1/2 bg-[--myColorEndSimple] hover:scale-125">
                <button className="h-full w-full" onClick={() => changeColor(2)}>
                </button>
            </div>
        </div>
    )
}