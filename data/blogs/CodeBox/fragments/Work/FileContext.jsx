import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function FileContext() {

    
    const getText = useMessageText();

    const files = [ 
        {
            route: "data/blogs/CodeBox/files/codeboxContext.txt",
            name : "codebox-content.jsx",
        }
    ]

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 91, to: 100 } }
    const files2 = [...files]
    files2[0] = {...files2[0], ...{ selected: true, from: 40, to: 56 } }
    const files3 = [...files]
    files3[0] = {...files3[0], ...{ selected: true, from: 58, to: 75 } }
    const files4 = [...files]
    files4[0] = {...files4[0], ...{ selected: true, from: 77, to: 89 } }
    
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "fileContext", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "fileContext", "text1"]}></Message>
                <CodeBox files={files1} key="files_1"></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "fileContext", "text2"]}></Message>
                <BlogList
                    list={ [ "footer2_1", "footer2_2", "footer2_3" ].map((item) => {
                        const text = getText( ["codeBox", "work", "implementation", "fileContext", item] );
                        return <p key={item}> {text} </p>;
                    }) }
                    elementClass="flex flex-col gap-2 w-full"
                    char="●"
                    contentArray={ [ 
                        <CodeBox files={files2} key="files_2"></CodeBox>, 
                        <CodeBox files={files3} key="files_3"></CodeBox>, 
                        <CodeBox files={files4} key="files_4"></CodeBox> 
                    ] }
                />
            </BlogParagraph>
        </BlogChapter>
    )
}