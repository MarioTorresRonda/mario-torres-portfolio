'use client'

import { getMessageText } from "./Message";
import NavBarItem from "./NavBarItem";

export default function NavBar() {

    const home = getMessageText( ["mainPage", "mainTitle"] );
    const project = getMessageText( ["mainPage", "projects", "mainTitle"] );
    const blog = getMessageText( ["mainPage", "blogs", "mainTitle"] );

    return (<div className="h-[10vh] flex justify-end gap-6 mr-4 md:mr-10">
        <NavBarItem id="#" title={home} num="01" url="/" />
        <NavBarItem id="/" title={project} num="02" url="/projects" />
        <NavBarItem id="&" title={blog} num="03" url="/blogs" />
    </div>)
}