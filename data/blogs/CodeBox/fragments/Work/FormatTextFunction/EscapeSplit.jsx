import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function EscapeSplit( files ) {

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 221, to: 227 } }
    
    
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "formatTextFunction", "escapeSplit", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "escapeSplit", "text"]}></Message>
                <CodeBox files={files1}></CodeBox>
            </BlogParagraph>
        </BlogChapter>
    )
}