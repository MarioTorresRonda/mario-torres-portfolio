import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";

export default function Reason() {
    return (
        <>
            <BlogParagraph>
                <Message code={["Blog", "chapter 2", "desc"]}></Message>
            </BlogParagraph>
            <BlogList
                list={useMessageText(["Blog", "chapter 2", "list"]).map((item) => {
                    return <p key={item}> {item} </p>;
                })}
            />
        </>
    )
}