import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";


export default function ApiCall() {

    const files = [ 
        {
            route: "data/blogs/CodeBox/files/apiCall.txt",
            name : "route.js",
        }
    ]

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 10, to: 17 } }

   return (
        <BlogChapter code={["codeBox", "work", "implementation", "apiCall", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "apiCall", "text1"]}></Message>
                <CodeBox files={files1} key="files_1"></CodeBox> 
            </BlogParagraph>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "apiCall", "text2"]}></Message>
                <BlogInfoPanel>
                    <Message code={["codeBox", "work", "implementation", "apiCall", "text3"]}></Message>
                </BlogInfoPanel>
            </BlogParagraph>
        </BlogChapter>
    )
}