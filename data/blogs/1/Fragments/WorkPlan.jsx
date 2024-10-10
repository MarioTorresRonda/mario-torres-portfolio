import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";

export default function WorkPlan() {
    return (
        <BlogChapter level={1} text={useMessageText(["Blog", "chapter 1"])}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 1 desc"]}></Message>
            </BlogParagraph>
        </BlogChapter>
    )
}