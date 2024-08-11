import BlogNavBarItem from "./BlogNavBarItem"

export default function BlogTitle( { blogRef, text} ) {

    const blogInfoRef = blogRef.current;
    const uuid = blogInfoRef.uuid + text;
    blogInfoRef.navBar[uuid] = { element : <BlogNavBarItem level={0}> {text} </BlogNavBarItem> };

    return(
        <p className="text-5xl mb-6"> {text} </p>
    )
}