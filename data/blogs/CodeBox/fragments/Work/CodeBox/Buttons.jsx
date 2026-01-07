import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function Buttons({files}) {

    const files1 = [...files]
    files1[2] = {...files1[2], ...{ selected: true, from: 38, to: 57 } };

   return (
        <BlogChapter code={["codeBox", "work", "implementation", "codeBox", "buttons", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "codeBox", "buttons", "text"]}></Message>
                <CodeBox files={files1}></CodeBox>
            </BlogParagraph>
        </BlogChapter>
    )
}