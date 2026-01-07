import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";


export default function FileList() {

    const files = [ 
        {
            route: "data/blogs/CodeBox/files/listExample.txt",
            name : "List Example.js",
            selected: true, from: 0, to: 10
        }
    ]

   return (
        <BlogChapter code={["codeBox", "work", "implementation", "fileList", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "fileList", "text"]}></Message>
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "fileList", "example"]}></Message>
                <CodeBox files={files}></CodeBox> 
            </BlogParagraph>
        </BlogChapter>
    )
}