'use client'

import { MenuContext } from "@/store/menu-context"
import { useContext, useEffect } from "react"
import ClientImage from "../ClientImage";
import Message, { getMessageText } from "../Message";
import { blog, home } from "@/data/navBar";
import { useNavigate } from "@/hooks/useNavigate";

export default function BlogResumeItemImage() {

    var { menu, setMenu } = useContext( MenuContext );
    const { navigate } = useNavigate( MenuContext );
    var isShow = menu.oldBlog == menu.blog;



    useEffect(() => {
      let timeout = null;
      if ( menu.symbol == home.symbol ) {
        timeout = setTimeout(() => {
          menu.oldBlog = menu.blog
          setMenu( menu );
        }, 200);
      }
        
      return () => {
        clearTimeout( timeout );
      }
    }, [menu.blog, menu.oldBlog])
    
    if ( menu.symbol != home.symbol ) {
        return (<div></div>);
    }

    function OnClickImage() {
      const newMenu = {...blog}
      newMenu.selectedPost = menu.blog;
      navigate( newMenu );
    }

    return (<>
        <div className={ ( !isShow ? "-translate-y-80" : "" ) + " transition-all flex justify-center lg:h-[250px]" }  >
            <ClientImage onClick={OnClickImage} height={250} className=" mt-3 mb-5 scale-100 hover:scale-110 transition-all" src={ menu.oldBlog.image } alt={["mainPage","blogs","imageAlt"]}/>
        </div>
        <p> <Message code={ ["mainPage", "blogs", "from"] } />: {  new Date( menu.oldBlog.date ).toLocaleDateString(getMessageText(["commons", "dateFormat"]))  } </p>
    </>
    )
}