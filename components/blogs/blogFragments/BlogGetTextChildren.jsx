import React from "react";



export default function BlogGetTextChildren( { getText, prop, code, codeArray, func, children } ) {
    let propValue = null;
    if ( codeArray ) {
        propValue = []
        propValue.push.apply( propValue, codeArray.map( codeSuffix => getText( [...code, codeSuffix] ) ) );
    }else{
        propValue = getText( code  );
    }
    if ( func ) {
        propValue = func( propValue );
    }

    return React.cloneElement(children, { [prop]: propValue })
}