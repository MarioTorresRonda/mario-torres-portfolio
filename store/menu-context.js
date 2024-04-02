'use client'

import { createContext, useReducer } from 'react';

export const MenuContext = createContext({
    menu: '#',
    setMenu: () => {}
});

function MenuReducer(state, action) {
    if ( action.type == "SET" ) {
        return {
            menu : action.payload
        }
    }

    return state;
}

export default function MenuContextProvider( {children} ) {

    const [ menuState, menuDispatch ] = useReducer( MenuReducer, { menu: '#' } )

    function setMenu(menu) {
        menuDispatch({
            type: "SET",
            payload: menu
        }) 
    }

    const ctxValue = {
        menu: menuState.menu,
        setMenu
    }

    return <MenuContext.Provider value={ctxValue}>
        {children}
    </MenuContext.Provider>

}