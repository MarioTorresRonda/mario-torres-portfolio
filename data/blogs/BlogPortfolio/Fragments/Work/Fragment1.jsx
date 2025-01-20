import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import ProjectList_Fragment2 from "@/public/posts/BlogPortfolio/NavBar_result.png"; 

const files = [ 
    {
        route: "data/blogs/BlogPortfolio/files/blog navbar.js",
        name : "navBar.js",
        selected: true,
        from: 21,
        to: 28
    }
]

export default function Fragment1() {

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
}