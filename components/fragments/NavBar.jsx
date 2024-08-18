import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DinamicColors from "./DinamicColors"
import FAI from "./FAI"
import NavBarItem from "./NavBarItem"
import menus from "@/data/navBar"
import { faBarChart as icon } from "@fortawesome/free-regular-svg-icons"

export default function NavBar() {
    return (
        <div className="flex gap-2 mx-4 h-[10vh] ">
            <div className="flex-1 mt-1">
                <DinamicColors />
            </div>
            <div className="visible sm:invisible self-center">
                <FontAwesomeIcon
                    icon={icon}
                    className={`text-[--myColorStartSimple] w-[40px] h-[40px] transition-transform ease-in-out hover:scale-[1.2] hover:text-slate-700 dark:hover:text-stone-500 `}
                />
            </div>
            <div className="hidden sm:flex flex-col sm:flex-row justify-end gap-6 mr-4 md:mr-10">
                { Object.keys( menus ).map( (key) => { return <NavBarItem key={key} newMenu={menus[key]} /> } )  }
            </div>
        </div>
    )
}