import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";

const files = [ 
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blog description.js" ),
        name : "Blog Description.js"
    },
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blogExample.jsx" ),
        name : "Blog Example.jsx",
    },
    {
        importFile : import( "!!raw-loader!@/util/CodeFormatter.js" ),
        name : "CodeFormatter.js",
    }
]
const files1 = [...files]
files1[0] = {...files[0], ...{ selected: true, from: 0, to: 8 }};
const files2 = [...files]
files2[1] = {...files[1], ...{ selected: true, from: 3, to: 14 }};

export default function DevelopmentPlan() {
    return <BlogChapter code={["Blog", "chapter 6", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 6", "desc"]}></Message>
        </BlogParagraph>
        <CodeBox files={files1}></CodeBox>    
        <BlogParagraph>
            <Message code={["Blog", "chapter 6", "desc2"]}></Message>
        </BlogParagraph>      
        <BlogParagraph>
            <Message code={["Blog", "chapter 6", "desc3"]}></Message>
        </BlogParagraph>  
        <CodeBox files={files2}></CodeBox>    
    </BlogChapter>
}