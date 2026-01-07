import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";


export default function ResetVars( files ) {

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 23, to: 27 } }
    
    return (
        <BlogChapter code={["codeBox", "work", "implementation", "formatTextFunction", "resetVars", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "resetVars", "text"]}></Message>
                <CodeBox files={files1}></CodeBox>
            </BlogParagraph>
        </BlogChapter>
    )
}