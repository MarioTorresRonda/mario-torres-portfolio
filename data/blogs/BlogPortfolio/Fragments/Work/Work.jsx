import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import NavBar from "@/components/fragments/NavBar";
import ProjectList_Fragment2 from "@/public/posts/BlogPortfolio/NavBar_result.png"; 

const files = [ 
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blog navbar.js" ),
        name : "navBar.js",
        selected: true,
        from: 21,
        to: 28
    }
]

const files2 = [
    {
        importFile : import( "!!raw-loader!@/components/Index/BlogsResume.jsx" ),
        name : "BlogsResume.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/components/Index/ContentBox.jsx" ),
        name : "ContentBox.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/components/Index/BlogResumeList.jsx" ),
        name : "BlogResumeList.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/components/fragments/ColoredButton.jsx" ),
        name : "ColoredButton.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/components/Index/BlogResumeItem.jsx" ),
        name : "BlogResumeItem.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/components/Index/BlogResumeItemImage.jsx" ),
        name : "BlogResumeItemImage.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/data/blogs.js" ),
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

export default function Work() {
    return <BlogChapter code={["Blog", "chapter 7", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 7", "desc"]}></Message>
        </BlogParagraph>
        <BlogChapter code={["Blog", "chapter 7", "part1", "title"]}>
            <BlogChapter code={["Blog", "chapter 7", "part1", "fragment1", "title"]}>
                <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment1", "desc"]}></Message>
                </BlogParagraph>
                <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment1", "desc2"]}></Message>
                </BlogParagraph>
                <CodeBox files={files}></CodeBox>    
                <BlogParagraph>
                <Message code={["Blog", "chapter 7", "part1", "fragment1", "desc3"]}></Message>
                </BlogParagraph>
                <ClientImage className="shadow shadow-black mb-4" src={ProjectList_Fragment2} alt={[]} />
            </BlogChapter>
            <BlogChapter code={["Blog", "chapter 7", "part1", "fragment2", "title"]}>
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
                </BlogChapter>
            </BlogChapter>
        </BlogChapter>
    </BlogChapter>
}