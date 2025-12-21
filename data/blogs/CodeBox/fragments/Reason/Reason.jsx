import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";


export default function Reason() {
   return (
        <BlogChapter code={["codeBox", "reason", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "reason", "text"]}></Message>
            </BlogParagraph>
        </BlogChapter>
    )
}