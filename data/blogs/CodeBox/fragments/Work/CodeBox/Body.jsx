import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function Body( { files } ) {

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 52, to: 59 } };

    const files2 = [...files]
    files2[0] = {...files2[0], ...{ selected: true, from: 31, to: 32 } };

   return (
        <BlogChapter code={["codeBox", "work", "implementation", "codeBox", "body", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "codeBox", "body", "text1"]}></Message>
                <CodeBox files={files1}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "codeBox", "body", "text2"]}></Message>
                <CodeBox files={files2}></CodeBox> 
            </BlogParagraph>
        </BlogChapter>
    )
}