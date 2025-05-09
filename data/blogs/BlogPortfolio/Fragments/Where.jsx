import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";

export default function Where() {
    return (
        <BlogChapter code={["Blog", "chapter 3", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 3", "desc"]}></Message>
            </BlogParagraph>
        </BlogChapter>
    )
}