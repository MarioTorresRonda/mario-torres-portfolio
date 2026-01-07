import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";


export default function FormatInit( files ) {

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 30, to: 34 } }
    
    
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "formatTextFunction", "formatInit", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "formatInit", "text"]}></Message>
                <CodeBox files={files1}></CodeBox>
            </BlogParagraph>
        </BlogChapter>
    )
}