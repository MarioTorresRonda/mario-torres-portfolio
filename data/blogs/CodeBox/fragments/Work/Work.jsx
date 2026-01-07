import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import Implementation from "./Implementation";


export default function Work() {
   return (
        <BlogChapter code={["codeBox", "work", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "subtitle"]}></Message>
            </BlogParagraph>
            { Implementation() }
        </BlogChapter>
    )
}