import BlogNavBarItem from "./BlogNavBarItem"

export default function BlogTitle( { id, navBar, text} ) {

    navBar[id] = <BlogNavBarItem level={1}> {text} </BlogNavBarItem>;

    return(
        <p className="text-5xl mb-6"> {text} </p>
    )
}