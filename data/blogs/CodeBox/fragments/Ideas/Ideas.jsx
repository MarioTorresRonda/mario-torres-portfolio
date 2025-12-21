import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogImageUrl from "@/components/blogs/blogFragments/BlogImageUrl";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import BlogSplit2 from "@/components/blogs/blogFragments/BlogSplit2";
import Message from "@/components/fragments/Message";

import Idea1Img from "@/public/posts/codeBox/vs_codebox.png";

export default function Ideas() {
   return (
        <BlogChapter code={["codeBox", "ideas", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "ideas", "text"]}></Message>
            </BlogParagraph>
            <BlogSplit2>
                <BlogImageUrl
                    title={["codeBox", "ideas", "imgTitle"]}
                    desc={["codeBox", "ideas", "imgText"]}
                    url="https://code.visualstudio.com/"
                    imageSrc={Idea1Img}
                />
            </BlogSplit2>
        </BlogChapter>
    )
}