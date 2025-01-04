'use client'

import { MenuContext } from "@/store/menu-context"
import { useContext, useEffect } from "react"
import ClientImage from "../fragments/ClientImage";
import Message from "../fragments/Message";
import { blog, home } from "@/data/navBar";
import { useNavigate } from "@/hooks/useNavigate";
import { useMessageText } from "@/hooks/useMessageText";

export default function BlogResumeItemImage() {

    var { menu, setMenu } = useContext( MenuContext );
    const { navigate } = useNavigate( MenuContext );
    const getText = useMessageText();
    var isShow = menu.oldBlog == menu.blog;
    const dateFormat = getText(["commons", "dateFormat"]);

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
    }, [menu, menu.blog, menu.oldBlog, setMenu])
    
    if ( menu.symbol != home.symbol ) {
        return (<div></div>);
    }

    function OnClickImage() {
      navigate( blog, menu.blog.id );
    }

    return (<div>
        <div className="overflow-hidden max-w-[400px] ">
          <div className={ ( !isShow ? "-translate-y-80" : "" ) + " transition-all flex justify-center" }  >
              <ClientImage onClick={OnClickImage} height={250} className=" mt-3 mb-5 scale-100 hover:scale-110 transition-all w-auto" src={ menu.oldBlog.image } alt={["mainPage","blogs","imageAlt"]}/>
          </div>
        </div>
        <div className="text-center">
        <p> <Message code={ ["mainPage", "blogs", "from"] } />: {  new Date( menu.oldBlog.date ).toLocaleDateString(dateFormat)  } </p>
        </div>
    </div>
    )
}