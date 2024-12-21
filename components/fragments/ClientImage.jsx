'use client';

import { useMessageText } from "@/hooks/useMessageText";
import Image from "next/image";

export default function ClientImage( { src, alt, ...props } ) {

    
    const getText = useMessageText();

    return (
        <Image
            priority={false}
            {...props}
            src={src}
            alt={getText(alt)}
        >
        </Image>
    )
}