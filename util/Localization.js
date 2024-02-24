import messages_en from "@/data/messages_en";
import messages_es from "@/data/messages_es";

export function getLocale( locale ) {
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