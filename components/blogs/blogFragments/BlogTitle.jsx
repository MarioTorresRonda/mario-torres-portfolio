import BlogNavBarItem from "./BlogNavBarItem"

export default function BlogTitle( { blogRef, text} ) {

    const blogInfoRef = blogRef.current;
    const id = text.replaceAll(" ", "");

    const element = <BlogNavBarItem id={id} level={0}> {text} </BlogNavBarItem>; 
    blogInfoRef.navBar[id] = { element };  

    return(
        <p className="text-2xl md:text-5xl mb-6 text-center text-stone-200"> {text} </p>
    )
}