export const CS = {
	slashComment: true,
    colors: [
        //Comments        
        { color: "$#384887", search: [/^\/\//g] },
        { color: "$#384887", search: [/^\/\*/g] },
        //BackSlash
        {color: "$#F280D0", search: null, conditions: [ "lastCharBackSlash" ], variables: [ "!lastCharBackSlash" ] },
        {color: "$#F280D0", search: ["\\"], variables: [ "lastCharBackSlash" ] },
        //Strings
		{ color: "$#d59c84", search: ['`'], conditions: [ "isInsideBacktick" ], variables: [ "!isInsideBacktick" ] },
        { color: "$#F280D0", search: ["}"], conditions: [ "isInsideBacktick" ], variables: [ "!isInsideBacktickBracket" ] },
        { color: "$#F280D0", search: ["{"], conditions: [ "isInsideBacktick" ], variables: [ "isInsideBacktickBracket" ] },
        { color: "$#d59c84", search: null, conditions: [ "isInsideBacktick", "!isInsideBacktickBracket" ] },
        { color: "$#d59c84", search: ['`'], conditions: [ "!isInsideSemiColon", "!isInsideQuotation" ], variables: [ "isInsideBacktick" ] },
        { color: "$#d59c84", search: ['"'], conditions: [ "isInsideQuotation" ], variables: [ "!isInsideQuotation" ] },
        { color: "$#d59c84", search: null, conditions: [ "isInsideQuotation" ] },
        { color: "$#d59c84", search: ['"'], conditions: [ "!isInsideSemiColon" ], variables: [ "isInsideQuotation" ] },
        { color: "$#d59c84", search: ["'"], conditions: [ "isInsideSemiColon" ], variables: [ "!isInsideSemiColon" ] },
        { color: "$#d59c84", search: null, conditions: [ "isInsideSemiColon" ] },
        { color: "$#d59c84", search: ["'"], variables: [ "isInsideSemiColon" ] },
        //CS
        {color: "$#569cd6", search: ["class"], variables: ["nextWordClass"]},
        {color: "$#569cd6", search: ["public", "private", "protected","new"], variables: ["nextWordClass"]},
        {color: "$#569cd6", search: ["class", "void", "string", "bool", "int", "this", "true", "false", "null", "delegate"], variables: ["!nextWordClass"]},
        {color: "$#d8a0df", search: ["return", "if", "else", "switch", "case", "break", "foreach", "for", "try", "catch"]},
        {color: "$#3b8777", search: null, conditions: ["nextWordClass"], variables: ["!nextWordClass", "lastWordClass"]},
        {color: "$#3b8777", search: null, conditions: ["nextWordParent"], variables: ["!nextWordParent"]},
        {color: "$#d7d7d7", search: [":"], conditions: ["lastWordClass"], variables: ["!lastWordClass", "nextWordParent"] },
        {color: "$#d7d7d7", search: ["["], variables: ["insideSquares"]},
        {color: "$#d7d7d7", search: ["]"], variables: ["!insideSquares"]},
        {color: "$#d7d7d7", search: ["(", ")", ":", ",", ".", "=", "==", "+", "-", ";", "<", ">"]},
        {color: "$#4dc6ad", search: null, conditions: ["insideSquares"]},
        {color: "$#d0d2a5", searchPos: 1, search: ["("]},
        {color: "$#3b8777", searchPos: 1, search: ["."]},
        {color: "$#b4cda8", search: [/^\d+$/g]},        
    ],
    usedVariables: [
        "nextWordClass",
        "lastWordClass",
        "nextWordParent"
    ]
}