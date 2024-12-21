import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";

export default function WorkPlan() {
    return (
        <BlogChapter code={["Blog", "chapter 1"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 1 desc"]}></Message>
            </BlogParagraph>           
        </BlogChapter>
        
    )
}