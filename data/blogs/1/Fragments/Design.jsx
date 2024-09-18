import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import {useMessageText} from "@/hooks/useMessageText";

import Navbar_Fragment1 from "@/public/Navbar_Fragment1.png"; 
import ProjectList_Fragment2 from "@/public/ProjectList_Fragment2.png"; 
import ClientImage from "@/components/fragments/ClientImage";

export default function Design( { blogRef } ) {
    return (
        <BlogChapter blogRef={blogRef} level={1} text={useMessageText(["Blog", "chapter 5", "title"])}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 5", "desc"]}></Message>
            </BlogParagraph>
            <BlogChapter blogRef={blogRef} level={2} text={useMessageText(["Blog", "chapter 5", "fragment1", "title"])}>
                <BlogParagraph>
                    <Message code={["Blog", "chapter 5", "fragment1", "desc"]}></Message>
                </BlogParagraph>
                <ClientImage className="shadow shadow-black mb-2" src={Navbar_Fragment1} alt={[]}>
                </ClientImage>
                <BlogParagraph>
                    <Message code={["Blog", "chapter 5", "fragment1", "desc2"]}></Message>
                </BlogParagraph>
            </BlogChapter>
            <BlogChapter blogRef={blogRef} level={2} text={useMessageText(["Blog", "chapter 5", "fragment2", "title"])}>
                <BlogParagraph>
                    <Message code={["Blog", "chapter 5", "fragment2", "desc"]}></Message>
                </BlogParagraph>
                <ClientImage className="shadow shadow-black mb-2" src={ProjectList_Fragment2} alt={[]}>
                </ClientImage>
                <BlogChapter blogRef={blogRef} level={3} text={useMessageText(["Blog", "chapter 5", "fragment2", "part1", "title"])}>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 5", "fragment2", "part1", "desc"]}></Message>
                    </BlogParagraph>
                </BlogChapter>
                <BlogChapter blogRef={blogRef} level={3} text={useMessageText(["Blog", "chapter 5", "fragment2", "part2", "title"])}>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 5", "fragment2", "part2", "desc"]}></Message>
                    </BlogParagraph>
                </BlogChapter>
            </BlogChapter>
        </BlogChapter>
    )
}