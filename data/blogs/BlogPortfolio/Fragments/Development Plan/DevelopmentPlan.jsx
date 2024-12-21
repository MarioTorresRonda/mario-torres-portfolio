import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";

const files = [ 
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blog description.txt" ),
        name : "Blog description",
        selected: true,
        from: 0,
        to: 8
    },
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blogExample.jsx" ),
        name : "Blog example",
    }
]

const files2 = [ 
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blog description.txt" ),
        name : "Blog description"
    },
    {
        importFile : import( "!!raw-loader!@/data/blogs/BlogPortfolio/files/blogExample.jsx" ),
        name : "Blog example",
        selected: true,
        from: 3,
        to: 14
    }
]


export default function DevelopmentPlan() {
    return <BlogChapter code={["Blog", "chapter 6", "title"]}>
        <BlogParagraph>
            <Message code={["Blog", "chapter 6", "desc"]}></Message>
        </BlogParagraph>
        <CodeBox files={files}></CodeBox>    
        <BlogParagraph>
            <Message code={["Blog", "chapter 6", "desc2"]}></Message>
        </BlogParagraph>      
        <BlogParagraph>
            <Message code={["Blog", "chapter 6", "desc3"]}></Message>
        </BlogParagraph>  
        <CodeBox files={files2}></CodeBox>    
    </BlogChapter>
}