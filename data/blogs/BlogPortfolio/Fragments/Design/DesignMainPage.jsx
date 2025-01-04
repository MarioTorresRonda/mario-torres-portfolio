import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";

import ProjectList_Fragment2 from "@/public/posts/BlogPortfolio/ProjectList_Fragment2.png"; 

export default function DesignMainPage() {
    return (
        <>
            <BlogParagraph>
                <Message
                 code={["Blog", "chapter 5", "fragment2", "desc"]}></Message>
            </BlogParagraph>
            <ClientImage className="shadow shadow-black mb-2" src={ProjectList_Fragment2} alt={[]} />
        </>
    )
}