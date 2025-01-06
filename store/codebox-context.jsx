//We use this fragment to reutilize the files processed by formatCodeText

import { formatCodeText } from "@/util/CodeFormatter";
import { createContext, useCallback, useReducer } from "react";
import crypto from 'crypto';


const initialCodeBox = {
    formattedFiles: {},
} 

export const CodeBoxContext = createContext(null);

function CodeBoxReducer(state, action) {

    if ( action.type == "ADD" ) {
        state.formattedFiles[ action.payload.compressedKey ] = action.payload.formattedFile;
    }

    if ( action.type == "RESET" ) {
        state.formattedFiles = {...initialCodeBox};
    }

    return state;
}

export default function CodeBoxContextProvider( {children} ) {

    const [ codeBoxState, codeBoxDispatch ] = useReducer( CodeBoxReducer, initialCodeBox );

    
    const addFormattedFile = useCallback( ( file ) => {
        const compressedKey = file.plainText;
        if ( codeBoxState.formattedFiles[compressedKey] ) {
            return codeBoxState.formattedFiles[compressedKey];
        }

        const extension = file.name.substr( file.name.lastIndexOf(".") + 1 );
        const formattedFile = formatCodeText( file.plainText, extension );
        codeBoxDispatch({
            type: "ADD",
            payload: {
                compressedKey,
                formattedFile
            },
        }) 

        return formattedFile; 
    }, [codeBoxState.formattedFiles], );

    function resetFormattedFile() {
        codeBoxDispatch({
            type: "RESET",
            payload: null
        }) 
    };

    const ctxValue = {
        addFormattedFile,
        resetFormattedFile
    }

    return <CodeBoxContext.Provider value={ctxValue}>
        {children}
    </CodeBoxContext.Provider>

}