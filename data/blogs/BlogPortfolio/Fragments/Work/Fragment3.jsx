import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";

import blogListImage from "@/public/posts/BlogPortfolio/Blog List.png"; 

const files = [ 
    {
        route: "app/blogs/page.js",
        name : "blogs/page.jsx",

    },
    {
        route: "components/blogs/BlogsList.jsx",
        name : "blogList.jsx",

    },
    {
        route: "components/blogs/BlogItem.jsx",
        name : "BlogItem.jsx",
    },
    {
        route: "app/blogs/[blogId]/page.js",
        name : "[blogId]/page.jsx",
    },
    {
        route: "components/blogs/BlogLoader.jsx",
        name : "BlogLoader.jsx",

    },
]

const files1 = [...files]
files1[0] = {...files[0], ...{ selected: true, from: 4, to: 8 } };
const files2 = [...files]
files2[2] = {...files[2], ...{ selected: true, from: 35, to: 49 } };
const files3 = [...files]
files3[3] = {...files[3], ...{ selected: true, from: 3, to: 7 } };

export default function Fragment3() {
    return <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 7", "part1", "fragment3", "desc"]}></Message>
        </BlogParagraph>
        <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "unselectedBlog", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment3", "unselectedBlog", "desc"]}></Message>
            </BlogParagraph>
            <CodeBox files={files1}></CodeBox>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment3", "unselectedBlog", "descList"]}></Message>
            </BlogParagraph>
            <ClientImage className="shadow shadow-black mb-4" src={blogListImage} alt={[]} />
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment3", "unselectedBlog", "descElement"]}></Message>
            </BlogParagraph>
            <CodeBox files={files2}></CodeBox>
        </BlogChapter>
        <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "desc"]}></Message>
            </BlogParagraph>
            <CodeBox files={files3}></CodeBox>
        </BlogChapter>
    </BlogChapter>
}