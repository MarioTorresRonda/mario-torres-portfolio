'use client'

import { getLocale, getCodeFromArray } from "@/util/Localization";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function MessageP( {code} ) {

    let fallbackLang =  getLocale('en');
    let message = getCodeFromArray( fallbackLang, code );

    return <Suspense fallback={message}>
        <Message code={code} />
    </Suspense>
}

function Message( { code } ) {
    
    const searchParams = useSearchParams();
    const lang = getLocale( searchParams.get("lang") );
    let message = getCodeFromArray( lang, code );

    return ( <> { message } </>)
}