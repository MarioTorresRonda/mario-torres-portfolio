import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";

export default function DesignMainPageList() {
    return (
        <BlogParagraph>
            <Message code={["Blog", "chapter 5", "fragment2", "part2", "desc"]}></Message>
        </BlogParagraph>
    )
}