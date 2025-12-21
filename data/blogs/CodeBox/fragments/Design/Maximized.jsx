import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";


import img from "@/public/posts/codeBox/maximized.png";

export default function Maximized() {
   return (
        <BlogChapter code={["codeBox", "design", "maximized", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "design", "maximized", "text"]}></Message>
            </BlogParagraph>
            <ClientImage className="shadow shadow-black mb-4" src={img} alt={[]}>
            </ClientImage>
        </BlogChapter>
    )
}