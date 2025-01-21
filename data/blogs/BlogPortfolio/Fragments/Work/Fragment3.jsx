import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";

import UnselectedBlog from "./Fragment3/UnselectedBlog";
import SelectedBlog from "./Fragment3/SelectedBlog";


export default function Fragment3() {
    return <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 7", "part1", "fragment3", "desc"]}></Message>
        </BlogParagraph>
        { UnselectedBlog() }
        { SelectedBlog() }
    </BlogChapter>
}