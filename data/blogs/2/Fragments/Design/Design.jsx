
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import {useMessageText} from "@/hooks/useMessageText";

import ClientImage from "@/components/fragments/ClientImage";
import BlogList from "@/components/blogs/blogFragments/BlogList";

export default function Design() {
    return (
        <>
            <BlogParagraph>
                <Message code={["Blog", "chapter 5", "desc"]}></Message>
            </BlogParagraph>
        </>
    )
}