'use client'

import { createContext, useReducer, useState } from 'react';
import { getDefaultLocale, getAsyncLocale, getAsyncBlogLocale } from "@/util/Localization";
import merge from '@/util/Objects';

export const LocalizationContext = createContext({
    mainLang: {},
    blogLang: {},
    locale: 'en',
    setLocalization: async () => {},
    setBlogLocalization : async () => {}
});

function LocalizationReducer(state, action) {

    if ( action.type == "SET" ) {
        state.mainLang = action.payload.mainLang;
        state.locale = action.payload.locale;
    }

    if ( action.type == "SETBLOG" ) {
        state.blogLang = action.payload.blogLang;
    }

    return {...state};
}

export default function LocalizationContextProvider( {children} ) {

    const [ localizationState, localizationDispatch ] = useReducer( LocalizationReducer, { mainLang : {...getDefaultLocale()}, blogLang : {}, locale: 'en' } )

    async function setLocale(locale) {
        const mainLang = await getAsyncLocale( locale );
        localizationDispatch({
            type: "SET",
            payload: { locale : locale, mainLang : mainLang, }
        });
    }   
    
    async function setBlog( blog ) {
        const blogLang = await getAsyncBlogLocale( localizationState.locale, blog );
        localizationDispatch({
            type: "SETBLOG",
            payload: { blogLang : blogLang }
        });
    }

    const ctxValue = {
        mainLang: localizationState.mainLang,
        blogLang: localizationState.blogLang,
        locale: localizationState.locale,
        setLocalization : setLocale,
        setBlogLocalization: setBlog,
    }

    return <LocalizationContext.Provider value={ctxValue}>
        {children}
    </LocalizationContext.Provider>

}