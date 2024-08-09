import { LocalizationContext } from "@/store/location-context";
import { getCodeFromArray } from "@/util/Localization";
import { useContext } from "react";

export function useMessageText( code ) {
    const { lang } = useContext( LocalizationContext );
    let message = getCodeFromArray( lang , code );

    return message;
}