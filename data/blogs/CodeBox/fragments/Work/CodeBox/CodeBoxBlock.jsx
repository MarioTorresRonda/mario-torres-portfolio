import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";
import NavBar from "./Navbar";
import Body from "./Body";
import Buttons from "./Buttons";


export default function CodeBoxBlock() {

    const getText = useMessageText();

    const files = [ 
        {
            route: "data/blogs/CodeBox/files/CodeBoxMain.txt",
            name : "CodeBoxMain.js",
        },
        {
            route: "data/blogs/CodeBox/files/CodeBoxNavBar.txt",
            name : "CodeBoxNavBar.js",
        },
        {
            route: "data/blogs/CodeBox/files/CodeBoxButton.txt",
            name : "CodeBoxButton.js",
        },

    ]

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 63, to: 79 } };

   return (
        <BlogChapter code={["codeBox", "work", "implementation", "codeBox", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "codeBox", "text"]}></Message>
                <CodeBox files={files1}></CodeBox> 
            </BlogParagraph>
            { NavBar( { files } ) }
            { Body( { files } ) }
            { Buttons( { files } ) }
        </BlogChapter>
    )
}