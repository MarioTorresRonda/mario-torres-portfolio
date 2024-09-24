import ScrollAnchor from "@/components/fragments/ScrollAnchor";
import BlogNavBarItem from "./BlogNavBarItem"
import { useContext } from "react";
import { MenuContext } from "@/store/menu-context";

export default function BlogTitle( { text} ) {

    const { menu } = useContext( MenuContext );

    const id = text.replaceAll(" ", "");

    const element = <BlogNavBarItem id={id} level={0}> {text} </BlogNavBarItem>; 
    menu.blogInfo.current.addItemNavBar( id, {element} );

    return(
        <ScrollAnchor anchor={id}>
            <p className="text-2xl md:text-5xl mb-6 text-center text-stone-200"> {text} </p>
        </ScrollAnchor>
    )
}