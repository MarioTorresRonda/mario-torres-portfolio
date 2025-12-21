import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";


export default function Where() {
   return (
        <BlogChapter code={["codeBox", "where", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "where", "text"]}></Message>
            </BlogParagraph>
        </BlogChapter>
    )
}