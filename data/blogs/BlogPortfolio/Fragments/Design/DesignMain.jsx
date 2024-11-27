import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";

export default function DesignMain() {
    return <>
        <BlogParagraph>
            <Message code={["Blog", "chapter 5", "fragment3", "desc"]}></Message>
        </BlogParagraph>
    </>
}