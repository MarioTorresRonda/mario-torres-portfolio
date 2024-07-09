'use client'

import { MenuContext } from "@/store/menu-context"
import { useContext } from "react"
import ClientImage from "../ClientImage";
import Message, { getDateText, getMessageText } from "../Message";

export default function BlogResumeItemImage() {

    var {blog} = useContext( MenuContext );

    return (<>
        <ClientImage src={blog.image} alt={["mainPage","blogs","imageAlt"]}/>
        <p> <Message code={ ["mainPage", "blogs", "from"] } />: {  new Date( blog.date ).toLocaleDateString(getMessageText(["commons", "dateFormat"]))  } </p>
    </>
    )
}