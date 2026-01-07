import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";

const files2 = [
    {
        route: "data/blogs/BlogPortfolio/files/Fragment2/BlogsResume.txt",
        name : "BlogsResume.jsx",
    },
    {
        route: "data/blogs/BlogPortfolio/files/Fragment2/ContentBox.txt",
        name : "ContentBox.jsx",
    },
    {
        route : "data/blogs/BlogPortfolio/files/Fragment2/BlogResumeList.txt",
        name : "BlogResumeList.jsx",
    },
    {
        route : "data/blogs/BlogPortfolio/files/Fragment2/ColoredButton.txt",
        name : "ColoredButton.jsx",
    },
    {
        route : "data/blogs/BlogPortfolio/files/Fragment2/BlogResumeItem.txt",
        name : "BlogResumeItem.jsx",
    },
    {
        route : "data/blogs/BlogPortfolio/files/Fragment2/BlogResumeItemImage.txt",
        name : "BlogResumeItemImage.jsx",
    },
    {
        route : "data/blogs/BlogPortfolio/files/Fragment2/blogs.txt",
        name : "blogs.js",
    }
]

const files2_1 = [...files2]
files2_1[0] = {...files2[0], ...{ selected: true, from: 15, to: 26 } };
const files2_2 = [...files2]
files2_2[6] = {...files2[6], ...{ selected: true, from: 5, to: 11 } };
const files2_3 = [...files2]
files2_3[2] = {...files2[2], ...{ selected: true, from: 3, to: 3 } };
const files2_4 = [...files2]
files2_4[2] = {...files2[2], ...{ selected: true, from: 13, to: 13 } };
const files2_5 = [...files2]
files2_5[2] = {...files2[2], ...{ selected: true, from: 41, to: 45 } };
const files2_6 = [...files2]
files2_6[2] = {...files2[2], ...{ selected: true, from: 32, to: 36 } };
const files2_7 = [...files2]
files2_7[4] = {...files2[4], ...{ selected: true, from: 21, to: 30 } };
const files2_8 = [...files2]
files2_8[5] = {...files2[5], ...{ selected: true, from: 36, to: 52 } };

export default function Fragment2() {
    return <BlogChapter code={["Blog", "chapter 7", "part1", "fragment2", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 7", "part1", "fragment2", "desc"]}></Message>
        </BlogParagraph>
        <CodeBox files={files2_1}></CodeBox> 
        <BlogInfoPanel>
            <Message code={["Blog", "chapter 7", "part1", "fragment2", "explication1"]}></Message>
            <Message code={["Blog", "chapter 7", "part1", "fragment2", "explication2"]}></Message>
        </BlogInfoPanel>
        <BlogChapter code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "desc"]}></Message>
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "explanation1"]}></Message>
            </BlogParagraph>
            <CodeBox files={files2_2}></CodeBox>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "explanation2"]}></Message>
            </BlogParagraph>
            <CodeBox files={files2_3}></CodeBox>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "explanation3"]}></Message>
            </BlogParagraph>
            <CodeBox files={files2_4}></CodeBox>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "explanation4"]}></Message>
            </BlogParagraph>
            <CodeBox files={files2_5}></CodeBox>
            <BlogChapter code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "pages", "title"]}>
                <BlogParagraph>
                    <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "pages", "explanation"]}></Message>
                </BlogParagraph>
                <CodeBox files={files2_6}></CodeBox>
            </BlogChapter>
            <BlogChapter code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "blogResumeItem", "title"]}>
                <BlogParagraph>
                    <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment1", "blogResumeItem", "explanation"]}></Message>
                </BlogParagraph>
                <CodeBox files={files2_7}></CodeBox>
            </BlogChapter>
        </BlogChapter>
        <BlogChapter code={["Blog", "chapter 7", "part1", "fragment2", "fragment2", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment2", "fragment2", "desc"]}></Message>
            </BlogParagraph>
            <CodeBox files={files2_8}></CodeBox>
        </BlogChapter>
    </BlogChapter>
}