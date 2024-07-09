'use client'

import { createContext, useReducer } from 'react';
import { blogList } from '@/data/blogs';

export const MenuContext = createContext({
    menu: '#',
    blog: {},
    page: {},
    setMenu: () => {},
    setBlog: () => {},
    setPage: () => {}
});

function MenuReducer(state, action) {
    
    if ( action.type == "SET" ) {
            state.menu = action.payload;
    }

    if ( action.type == "SETBLOG" ) {
        state.blog = action.payload;
    }

    if ( action.type == "SETPAGE") {
        state.page = action.payload;
    }

    return { ...state };
}

export default function MenuContextProvider( {children} ) {

    const [ menuState, menuDispatch ] = useReducer( MenuReducer, { menu: '#', blog: blogList[0], page: 0 }, )

    function setMenu(menu) {
        menuDispatch({
            type: "SET",
            payload: menu
        }) 
    }

    function setBlog(blog) {
        menuDispatch({
            type: "SETBLOG",
            payload: blog
        }) 
    }

    function setPage(page) {
        menuDispatch({
            type: "SETPAGE",
            payload: page
        }) 
    }

    const ctxValue = {
        menu: menuState.menu,
        blog: menuState.blog,
        page: menuState.page,
        setMenu,
        setBlog,
        setPage,
    }

    return <MenuContext.Provider value={ctxValue}>
        {children}
    </MenuContext.Provider>

}