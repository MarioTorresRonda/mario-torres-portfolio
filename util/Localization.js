import messages_en from "@/data/messages_en";

export async function getAsyncLocale( locale ) {
    const messages = await import( "@/data/messages_"+locale );
    if ( !messages ) {
        return messages_en;
    }
    return messages.default;
}

export function getDefaultLocale() {
    return messages_en;
}

export function getLocaleBlog( locale ) {
    if ( locale == "en" ) {
        return messages_en;
    }if ( locale == "es" ) {
        return messages_es;
    }else{
        return messages_en;
    }
}

export function getCodeFromArray( locale, codeArray ) {

    try{
        let localePointer = locale;
        codeArray.forEach(code => {
            localePointer = localePointer[code];
        });
        return localePointer;
    }catch(e) {
        return codeArray.join('.');
    }
    
}