import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";

const files2 = [
    {
        route: "components/Index/BlogsResume.jsx",
        name : "BlogsResume.jsx",
    },
    {
        route: "components/Index/ContentBox.jsx",
        name : "ContentBox.jsx",
    },
    {
        route : "components/Index/BlogResumeList.jsx",
        name : "BlogResumeList.jsx",
    },
    {
        route : "components/fragments/ColoredButton.jsx",
        name : "ColoredButton.jsx",
    },
    {
        route : "components/Index/BlogResumeItem.jsx",
        name : "BlogResumeItem.jsx",
    },
    {
        route : "components/Index/BlogResumeItemImage.jsx",
        name : "BlogResumeItemImage.jsx",
    },
    {
        route : "data/blogs.js",
        name : "blogs.js",
    }
]

const files2_1 = [...files2]
files2_1[0] = {...files2[0], ...{ selected: true, from: 9, to: 20 } };
const files2_2 = [...files2]
files2_2[6] = {...files2[6], ...{ selected: true, from: 3, to: 11 } };
const files2_3 = [...files2]
files2_3[2] = {...files2[2], ...{ selected: true, from: 2, to: 2 } };
const files2_4 = [...files2]
files2_4[2] = {...files2[2], ...{ selected: true, from: 13, to: 13 } };
const files2_5 = [...files2]
files2_5[2] = {...files2[2], ...{ selected: true, from: 41, to: 47 } };
const files2_6 = [...files2]
files2_6[2] = {...files2[2], ...{ selected: true, from: 33, to: 37 } };
const files2_7 = [...files2]
files2_7[4] = {...files2[4], ...{ selected: true, from: 25, to: 32 } };
const files2_8 = [...files2]
files2_8[5] = {...files2[5], ...{ selected: true, from: 41, to: 51 } };

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