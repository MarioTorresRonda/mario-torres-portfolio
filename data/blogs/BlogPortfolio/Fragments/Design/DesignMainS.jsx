import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";

export default function DesignMainS() {

   const getText = useMessageText();

    return <>
        <BlogParagraph>
            <Message code={["Blog", "chapter 5", "fragment3", "part2", "desc"]}></Message>
        </BlogParagraph>
        <BlogList className="mb-2"
            list={getText(["Blog", "chapter 5", "fragment3", "part2", "list"]).map((item) => {
                return <p key={item}> {item} </p>;
            })}
        />
    </>
}