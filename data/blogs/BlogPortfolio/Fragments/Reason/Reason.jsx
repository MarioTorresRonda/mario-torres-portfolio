import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import ReasonList from "./ReasonList";

export default function Reason() {
   return (
        <BlogChapter code={["Blog", "chapter 2", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 2", "desc"]}></Message>
            </BlogParagraph>
            <ReasonList />
        </BlogChapter>
    )
}