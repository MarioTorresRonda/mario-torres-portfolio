'use client'

import { getCodeFromArray } from "@/util/Localization";
import { useContext } from "react";
import { LocalizationContext } from "@/store/location-context";

export default function Message( { code } ) {
    const { lang } = useContext( LocalizationContext );
    let message = getCodeFromArray( lang, code );

    return ( <>{message}</> )
}

export function useMessageText( code ) {
    const { lang } = useContext( LocalizationContext );
    let message = getCodeFromArray( lang , code );

    return message;
}