import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import { returnListAsPs } from "@/util/Blogs";
import BlogGetTextChildren from "@/components/blogs/blogFragments/BlogGetTextChildren";

export default function Summary() {


    return <BlogChapter code={["Blog", "chapter 8", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 8", "text1"]}></Message>
        </BlogParagraph>
        <BlogParagraph>
            <Message code={["Blog", "chapter 8", "text2"]}></Message>
        </BlogParagraph>
        <BlogParagraph>
            <Message code={["Blog", "chapter 8", "listText"]}></Message>
        </BlogParagraph>
        <BlogGetTextChildren 
            prop="list" 
            code={["Blog", "chapter 8", "list"]}
            func={returnListAsPs}
        >
            <BlogList
                elementClass="flex flex-col gap-2 w-full"
                char="-"
            />
        </BlogGetTextChildren>
        
    </BlogChapter>
}