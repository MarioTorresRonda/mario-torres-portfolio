import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";

import blogListImage from "@/public/posts/BlogPortfolio/Blog List.png"; 

const files = [ 
    {
        route: "data/blogs/BlogPortfolio/files/UnselectedBlog/page.txt",
        name : "blogs/page.jsx",

    },
    {
        route: "data/blogs/BlogPortfolio/files/UnselectedBlog/BlogsList.txt",
        name : "blogList.jsx",

    },
    {
        route: "data/blogs/BlogPortfolio/files/UnselectedBlog/BlogItem.txt",
        name : "BlogItem.jsx",
    }
]

const files1 = [...files]
files1[0] = {...files[0], ...{ selected: true, from: 4, to: 8 } };
const files2 = [...files]
files2[2] = {...files[2], ...{ selected: true, from: 35, to: 49 } };

export default function UnselectedBlog() {
    return <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "unselectedBlog", "title"]}>
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
}