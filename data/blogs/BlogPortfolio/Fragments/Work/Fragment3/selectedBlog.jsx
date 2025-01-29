import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";

const files = [ 
    {
        route: "app/blogs/[blogId]/page.js",
        name : "[blogId]/page.jsx",
    },
    {
        route: "components/blogs/BlogLoader.jsx",
        name : "BlogLoader.jsx",
    },
    {
        route: "store/location-context.js",
        name : "location-context.js",
    },
    {
        route: "util/Localization.js",
        name : "Localization.js",
    },
    {
        route: "components/blogs/BlogMain.jsx",
        name : "BlogMain.jsx",
    },
    {
        route: "components/blogs/BlogSideBar.jsx",
        name : "BlogSideBar.jsx",
    },
]

const files1 = [...files]
files1[0] = {...files[0], ...{ selected: true, from: 3, to: 7 } };
const files2 = [...files]
files2[1] = {...files[1], ...{ selected: true, from: 18, to: 20 } };
const files3 = [...files]
files3[1] = {...files[1], ...{ selected: true, from: 8, to: 11 } };
const files4 = [...files]
files4[2] = {...files[2], ...{ selected: true, from: 49, to: 49 } };
const files5 = [...files]
files5[3] = {...files[3], ...{ selected: true, from: 11, to: 14 } };
const files6 = [...files]
files6[4] = {...files[4], ...{ selected: true, from: 22, to: 29 } };
const files7 = [...files]
files7[4] = {...files[4], ...{ selected: true, from: 31, to: 42 } };
const files8 = [...files]
files8[5] = {...files[5], ...{ selected: true, from: 10, to: 12 } };
const files9 = [...files]
files9[5] = {...files[5], ...{ selected: true, from: 13, to: 21 } };
const files10 = [...files]
files10[5] = {...files[5], ...{ selected: true, from: 9, to: 9 } };
const files11 = [...files]
files11[5] = {...files[5], ...{ selected: true, from: 42, to: 46 } };



export default function SelectedBlog() {

    const getText = useMessageText();

    return <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "title"]}>
                <BlogParagraph>
                    <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "desc"]}></Message>
                </BlogParagraph>
                <CodeBox files={files1}></CodeBox>
                <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "asynchronousLoad", "title"]}>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "asynchronousLoad", "step1"]}></Message>
                    </BlogParagraph>
                    <CodeBox files={files2}></CodeBox>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "asynchronousLoad", "step2"]}></Message>
                    </BlogParagraph>
                    <CodeBox files={files3}></CodeBox>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "asynchronousLoad", "step3"]}></Message>
                    </BlogParagraph>
                    <CodeBox files={files4}></CodeBox>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "asynchronousLoad", "step4"]}></Message>
                    </BlogParagraph>
                    <CodeBox files={files5}></CodeBox>
                </BlogChapter>
                <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "processBlog", "title"]}>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "processBlog", "step1"]}></Message>
                    </BlogParagraph>
                    <BlogList
                        list={ getText( ["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "processBlog", "list"] ).map((item) => {
                            return <p key={item}> {item} </p>;
                        }) }
                        elementClass="flex flex-col gap-2 w-full"
                        char="●"
                        contentArray={ [ <CodeBox files={files6}></CodeBox>, <CodeBox files={files7}></CodeBox> ] }
                    />
                </BlogChapter>
                <BlogChapter code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "processNavBar", "title"]}>
                    <BlogParagraph>
                        <Message code={["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "processNavBar", "desc"]}></Message>
                    </BlogParagraph>
                    <BlogList
                        list={ getText( ["Blog", "chapter 7", "part1", "fragment3", "selectedBlog", "processNavBar", "list"] ).map((item) => {
                            return <p key={item}> {item} </p>;
                        }) }
                        elementClass="flex flex-col gap-2 w-full"
                        char="●"
                        contentArray={ [ <CodeBox files={files10}></CodeBox>, <></>, <CodeBox files={files8}></CodeBox>, <></>, <CodeBox files={files9}></CodeBox>, <CodeBox files={files11}></CodeBox> ] }
                    />
                </BlogChapter>
            </BlogChapter>
}