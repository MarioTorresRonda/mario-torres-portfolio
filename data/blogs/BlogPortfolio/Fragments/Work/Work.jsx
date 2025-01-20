import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import Fragment1 from "./Fragment1";
import Fragment2 from "./Fragment2";
import Fragment3 from "./Fragment3";

export default function Work() {
    return <BlogChapter code={["Blog", "chapter 7", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 7", "desc"]}></Message>
        </BlogParagraph>
        <BlogChapter code={["Blog", "chapter 7", "part1", "title"]}>
            { Fragment1() }
            { Fragment2() }
            { Fragment3() }
        </BlogChapter>
    </BlogChapter>
}