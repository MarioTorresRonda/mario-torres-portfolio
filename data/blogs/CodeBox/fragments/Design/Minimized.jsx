import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";

import img from "@/public/posts/codeBox/minimized.png";

export default function Minimized() {
   return (
        <BlogChapter code={["codeBox", "design", "minimized", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "design", "minimized", "text"]}></Message>
                <ClientImage className="shadow shadow-black mb-4" src={img} alt={[]}>
                </ClientImage>
            </BlogParagraph>
        </BlogChapter>
    )
}