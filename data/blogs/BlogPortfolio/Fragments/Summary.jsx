import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import { useMessageText } from "@/hooks/useMessageText";

export default function Summary() {

    const getText = useMessageText();

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
        <BlogList
            list={ getText( ["Blog", "chapter 8", "list"] ).map((item) => {
                return <p key={item}> {item} </p>;
            }) }
            elementClass="flex flex-col gap-2 w-full"
            char="-"
        />
    </BlogChapter>
}