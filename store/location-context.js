'use client'

import { createContext, useReducer } from 'react';
import { getLocale } from "@/util/Localization";

export const LocalizationContext = createContext({
    lang: {},
    locale: 'en',
    setLocalization: () => {}
});

function LocalizationReducer(state, action) {
    if ( action.type == "SET" ) {
        const lang = {...getLocale( action.payload )};
        return {
            lang : lang,
            locale : action.payload
        }
    }

    return state;
}

export default function LocalizationContextProvider( {children} ) {

    const [ localizationState, localizationDispatch ] = useReducer( LocalizationReducer, { lang : {...getLocale("en")}, locale: 'en' } )

    function setlocale(locale) {
        localizationDispatch({
            type: "SET",
            payload: locale
        }) 
    }

    const ctxValue = {
        lang: localizationState.lang,
        locale: localizationState.locale,
        setLocalization : setlocale
    }

    return <LocalizationContext.Provider value={ctxValue}>
        {children}
    </LocalizationContext.Provider>

}