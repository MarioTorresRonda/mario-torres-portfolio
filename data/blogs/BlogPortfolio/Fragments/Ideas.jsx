import BlogImageUrl from "@/components/blogs/blogFragments/BlogImageUrl";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import BlogSplit2 from "@/components/blogs/blogFragments/BlogSplit2";
import Message from "@/components/fragments/Message";

import Idea1Img from "@/public/posts/BlogPortfolio/Notes.png";
import Idea2Img from "@/public/posts/BlogPortfolio/Medium.png";
import Idea3Img from "@/public/posts/BlogPortfolio/Idea3CodeText.png";
import Idea4Img from "@/public/posts/BlogPortfolio/Idea4brittanychiang.png";
import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";

export default function Ideas() {
    return (
    <BlogChapter code={["Blog", "chapter 4", "title"]}>                
        <BlogParagraph>
            <Message code={["Blog", "chapter 4", "desc"]}></Message>
        </BlogParagraph>
        <BlogSplit2>
            <BlogImageUrl
                title={["Blog", "chapter 4", "idea1"]}
                desc={["Blog", "chapter 4", "idea1Desc"]}
                url="https://www.seanhalpin.xyz/notes"
                imageSrc={Idea1Img}
            />
            <BlogImageUrl
                title={["Blog", "chapter 4", "idea2"]}
                desc={["Blog", "chapter 4", "idea2Desc"]}
                url="https://medium.com/@danielkorpai/design-report-may-2019-449443e87cb3"
                imageSrc={Idea2Img}
            />
            <BlogImageUrl
                title={["Blog", "chapter 4", "idea3"]}
                desc={["Blog", "chapter 4", "idea3Desc"]}
                url="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                imageSrc={Idea3Img}
            />
            <BlogImageUrl
                title={["Blog", "chapter 4", "idea4"]}
                desc={["Blog", "chapter 4", "idea4Desc"]}
                url="https://brittanychiang.com/?ref=hackernoon.com#projects"
                imageSrc={Idea4Img}
            />
        </BlogSplit2>
    </BlogChapter>	
)
}