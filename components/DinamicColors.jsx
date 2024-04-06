'use client'

import { updateBubbleColors } from "@/util/DinamicColor";
import { useEffect, useState } from "react";

export default function DinamicColors() {
    
    const [time, setTime] = useState(0);
    
    updateBubbleColors(time);

    useEffect( () => {
        const timer = setTimeout(() => {
            if ( time == 359 ) {
                setTime( 0 );
            }else{
                setTime( prevtime => prevtime + 1 );
            }
        }, 500);
        return () => {
            clearTimeout( timer );
        }

    }, [time]) 

    return <div>
    </div>
}