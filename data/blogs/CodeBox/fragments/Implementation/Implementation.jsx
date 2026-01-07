import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import { useMessageText } from "@/hooks/useMessageText";

import img from "@/public/posts/codeBox/navbar.png";
import img2 from "@/public/posts/codeBox/codebox.png";

export default function Implementation() {
    
    const getText = useMessageText();

   return (
        <BlogChapter code={["codeBox", "implementation", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "implementation", "text"]}></Message>
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["codeBox", "implementation", "text2"]}></Message>
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["codeBox", "implementation", "navbar", "text"]}></Message>
                <ClientImage className="shadow shadow-black" src={img} alt={[]}>
                </ClientImage>
                <Message code={["codeBox", "implementation", "navbar", "foot"]}></Message>
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["codeBox", "implementation", "codebox", "text"]}></Message>
                <ClientImage className="shadow shadow-black" src={img2} alt={[]}>
                </ClientImage>
                <Message code={["codeBox", "implementation", "codebox", "foot"]}></Message>
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["codeBox", "implementation", "buttons", "text"]}></Message>
                 <BlogList
                    char="-"
                    list={ [ "button1", "button2" ].map((item) => {
                        return <p key={item}> { getText(["codeBox", "implementation", "buttons", item]) } </p>;
                    }) }
                />
            </BlogParagraph>
        </BlogChapter>
    )
}