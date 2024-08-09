'use client';

import { useMessageText } from "@/hooks/useMessageText";
import Image from "next/image";

export default function ClientImage( { src, alt, ...props } ) {
    return (
        <Image
            priority={false}
            {...props}
            src={src}
            alt={useMessageText(alt)}
        >
        </Image>
    )
}