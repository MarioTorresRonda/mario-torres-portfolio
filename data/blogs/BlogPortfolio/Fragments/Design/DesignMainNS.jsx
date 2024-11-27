import BlogList from "@/components/blogs/blogFragments/BlogList";
import Message from "@/components/fragments/Message";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import { useMessageText } from "@/hooks/useMessageText";

export default function DesignMainNS() {
        return <>
            <BlogParagraph>
                <Message code={["Blog", "chapter 5", "fragment3", "part1", "desc"]}></Message>
            </BlogParagraph>
            <BlogList className="mb-2"
                list={useMessageText(["Blog", "chapter 5", "fragment3", "part1", "list"]).map((item) => {
                    return <p key={item}> {item} </p>;
                })}
            />
        </>
}