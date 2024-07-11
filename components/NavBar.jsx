import NavBarItem from "./NavBarItem"
import menus from "@/data/navBar"

export default function NavBar() {
    return (<div className="h-[10vh] flex justify-end gap-6 mr-4 md:mr-10">
        { Object.keys( menus ).map( (key) => { return <NavBarItem key={key} newMenu={menus[key]} /> } )  }
    </div>)
}