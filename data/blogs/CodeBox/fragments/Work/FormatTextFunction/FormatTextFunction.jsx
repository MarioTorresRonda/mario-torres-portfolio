import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import BlockSplit from "./BlockSplit";
import EscapeSplit from "./EscapeSplit";
import ResetVars from "./ResetVars";
import FormatInit from "./FormatInit";
import BlockColoring from "./BlockColoring";


export default function FormatTextFunction() {

    const files = [ 
        {
            route: "data/blogs/CodeBox/files/CodeFormatter.txt",
            name : "CodeFormatter.js",
        }
    ]

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 19, to: 20 } }
    
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "formatTextFunction", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "text"]}></Message>
                <CodeBox files={files1} key="files_1"></CodeBox> 
                { BlockSplit( files ) }
                { EscapeSplit( files ) }
                { ResetVars( files ) }
                { FormatInit( files ) }
                { BlockColoring( files ) }
            </BlogParagraph>
        </BlogChapter>
    )
}