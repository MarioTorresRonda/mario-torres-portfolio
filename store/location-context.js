'use client'

import { createContext, useEffect, useReducer, useState } from 'react';
import { getDefaultLocale, getAsyncLocale } from "@/util/Localization";

export const LocalizationContext = createContext({
    lang: {},
    locale: 'en',
    setLocalization: () => {}
});

async function LocalizationReducer(state, action) {
    if ( action.type == "SET" ) {
        return {
            lang : action.payload.lang,
            locale : action.payload.locale
        }
    }

    return state;
}

export default function LocalizationContextProvider( {children} ) {

    const [ localizationState, localizationDispatch ] = useReducer( LocalizationReducer, { lang : {...getDefaultLocale()}, locale: 'en' } )

    const [locale, setLocale] = useState(localizationState.locale);
    const [lang, setLang] = useState(localizationState.lang);


    async function setlocale(locale) {
        const lang = await getAsyncLocale( locale );
        localizationDispatch({
            type: "SET",
            payload: { locale : locale, lang : lang, }
        });

        setLocale( locale );
        setLang( lang );
    }

    

    const ctxValue = {
        lang: lang,
        locale: locale,
        setLocalization : setlocale
    }

    return <LocalizationContext.Provider value={ctxValue}>
        {children}
    </LocalizationContext.Provider>

}