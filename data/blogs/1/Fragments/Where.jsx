import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";

export default function Where( { blogRef } ) {
    return (
        <BlogChapter blogRef={blogRef} level={1} text={useMessageText(["Blog", "chapter 3", "title"])}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 3", "desc"]}></Message>
            </BlogParagraph>
        </BlogChapter>
    )
}