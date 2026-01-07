import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function NavBar( { files } ) {


    const files2 = [...files]
    files2[1] = {...files2[1], ...{ selected: true, from: 12, to: 29 } };

   return (
        <BlogChapter code={["codeBox", "work", "implementation", "codeBox", "navbar", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "codeBox", "navbar", "text"]}></Message>
                <CodeBox files={files2}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "codeBox", "navbar", "foot"]}></Message>
            </BlogParagraph>
        </BlogChapter>
    )
}