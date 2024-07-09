'use client'

import { MenuContext } from "@/store/menu-context"
import { useContext, useEffect } from "react"
import ClientImage from "../ClientImage";
import Message, { getDateText, getMessageText } from "../Message";

export default function BlogResumeItemImage() {

    var { oldBlog, blog, setOldBlog } = useContext( MenuContext );

    var isShow = oldBlog == blog;


    useEffect(() => {
      const timeout = setTimeout(() => {
        setOldBlog( blog );
      }, 200);
    
      return () => {
        clearTimeout( timeout );
      }
    }, [oldBlog, blog])
    


    return (<>
        <div className={ ( !isShow ? "-translate-y-80" : "" ) + " transition-all flex justify-center h-[250px]" } >
            <ClientImage height={250} className=" mt-3 mb-5 scale-100 hover:scale-110 transition-all" src={ oldBlog.image} alt={["mainPage","blogs","imageAlt"]}/>
        </div>
        <p> <Message code={ ["mainPage", "blogs", "from"] } />: {  new Date( oldBlog.date ).toLocaleDateString(getMessageText(["commons", "dateFormat"]))  } </p>
    </>
    )
}