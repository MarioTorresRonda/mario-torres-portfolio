'use client'

import { getMessageText } from "./Message";
import NavBarItem from "./NavBarItem";

export default function NavBar() {

    const home = getMessageText( ["mainPage", "mainTitle"] );
    const project = getMessageText( ["mainPage", "projects", "mainTitle"] );

    return (<div className="h-[10vh] flex justify-end gap-6 mr-4 md:mr-10">
        <NavBarItem id="#" title={home} num="01" url="/" />
        <NavBarItem id="/" title={project} num="02" url="/projects" />
    </div>)
}