'use client'

import { createContext, useReducer } from 'react';
import { usePathname } from 'next/navigation'
import menus from '@/data/navBar';

export const MenuContext = createContext({
    menu: { 
        symbol: '#',
        //Mainpage
        oldBlog: {},
        blog: {},
        page: {},
    },
    showValue: false,
} );

function MenuReducer(state, action) {
    
    if ( action.type == "SET" ) {
            state.menu = action.payload;
    }

    if ( action.type == "SHOW" ) {
        state.showValue = true;
    }

    if ( action.type == "HIDE" ) {
        state.showValue = false;
    }

    return { ...state };
}

export default function MenuContextProvider( {children} ) {
    
    let menu = null;
    Object.keys( menus ).forEach(key => {
        var path = usePathname();
        const slashIndex = path.indexOf("/", 2);
        if ( menus[key].url == path.substring(0, slashIndex != -1 ? slashIndex : path.length ) ) {
            menu = menus[key];
        }
    });

    const [ menuState, menuDispatch ] = useReducer( MenuReducer, { menu : menu, showValue : false } )

    function setMenu(menu) {
        menuDispatch({
            type: "SET",
            payload: menu
        }) 
    }

    function show(menu) {
        menuDispatch({
            type: "SHOW"
        }) 
    }

    function hide(menu) {
        menuDispatch({
            type: "HIDE"
        }) 
    }


    const ctxValue = {
        menu: menuState.menu,
        setMenu,
        showValue : menuState.showValue,
        show,
        hide,
    }

    return <MenuContext.Provider value={ctxValue}>
        {children}
    </MenuContext.Provider>

}