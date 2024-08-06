'use client';

import Image from "next/image";
import { getMessageText } from "./Message";

export default function ClientImage( { src, alt, ...props } ) {
    return (
        <Image
            priority={false}
            {...props}
            src={src}
            alt={getMessageText(alt)}
        >
        </Image>
    )
}