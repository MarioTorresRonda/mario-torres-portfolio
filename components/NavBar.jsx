import NavBarItem from "./NavBarItem";

export default function NavBar() {
    return (<div className="h-[10vh] flex justify-center">
        <NavBarItem title="#" alt="Home" url="/" />
        <NavBarItem title="/" alt="Proyectos" url="/projects" />
    </div>)
}