'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DinamicColors from "./DinamicColors"
import NavBarItem from "./NavBarItem"
import menus from "@/data/navBar"
import { faList as icon } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import { MenuContext } from "@/store/menu-context"

export default function NavBar() {

    const { menu, showValue, show, hide } = useContext( MenuContext );
    const [ actualMenu, setActualMenu ] = useState( menu );
    
    useEffect(() => {
        if ( actualMenu != menu )  {
            setActualMenu( menu );
            hide();
        }
    }, [menu, actualMenu]);


    const hiddenClasses = "max-h-0 scale-y-0 opacity-0";
    const showClasses = "max-h-[140px] scale-y-100 opacity-100";
    //Classes that surpass the hidden state when the site is bigger and is not needed
    const forceClasses = "sm:max-h-full sm:h-full sm:scale-y-100 sm:w-auto sm:opacity-100"

    return (
        <div className="flex flex-wrap gap-2 mx-4 min-h-[10vh]">
            <div className="flex-1 mt-1 sm:ml-4 md:ml-10 ">
                <DinamicColors />
            </div>
            <div className="block mt-8  sm:hidden" onClick={() => { showValue ? hide() : show() }}>
                <FontAwesomeIcon
                    icon={icon}
                    className={`text-[--myColorStartSimple] w-[35px] h-[35px] transition-transform ease-in-out hover:scale-[1.2] hover:text-[--myColorEndSimple] `}
                />
            </div>
            <div className={`${ showValue ? showClasses : hiddenClasses } ${forceClasses} w-full transition-all flex justify-end self-center flex-col sm:flex-row sm:gap-6 sm:mr-4 md:mr-10`} >
                { Object.keys( menus ).map( (key) => { return <NavBarItem key={key} newMenu={menus[key]} /> } )  }
            </div>
        </div>
    )
}