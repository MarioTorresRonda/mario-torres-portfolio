'use client';

import Image from "next/image";
import { getMessageText } from "./Message";

export default function ClientImage( { src, alt } ) {
    return (
        <Image
            src={src}
            alt={getMessageText(alt)}
        >
        </Image>
    )
}