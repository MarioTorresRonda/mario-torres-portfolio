import { LocalizationContext } from "@/store/location-context";
import { getCodeFromArray } from "@/util/Localization";
import merge from "@/util/Objects";
import { useContext } from "react";

export function useMessageText( ) {
    const { mainLang, blogLang } = useContext( LocalizationContext );

    function getText( code ) {
        return getCodeFromArray( merge( mainLang, blogLang ), code )
    }

    return getText;
}