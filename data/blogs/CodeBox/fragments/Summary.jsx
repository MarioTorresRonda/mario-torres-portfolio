import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import { useMessageText } from "@/hooks/useMessageText";

export default function Summary() {

    const getText = useMessageText();

    return <BlogChapter code={["codeBox", "summary", "title"]}>
        <BlogParagraph>
            <Message code={["codeBox", "summary", "text1"]}></Message>
        </BlogParagraph>
        <BlogParagraph>
            <Message code={["codeBox", "summary", "text2"]}></Message>
        </BlogParagraph>
        <BlogParagraph>
            <Message code={["codeBox", "summary", "text3"]}></Message>
        </BlogParagraph>
    </BlogChapter>
}