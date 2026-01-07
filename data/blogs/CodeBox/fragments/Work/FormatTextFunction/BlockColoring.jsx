import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function BlockColoring( files ) {

    const getText = useMessageText();

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 40, to: 41 } }
    const files2 = [...files]
    files2[0] = {...files2[0], ...{ selected: true, from: 42, to: 54 } }
    const files3 = [...files]
    files3[0] = {...files3[0], ...{ selected: true, from: 236, to: 247 } }

    const files4 = [...files]
    files4[0] = {...files4[0], ...{ selected: true, from: 252, to: 252 } }
    const files5 = [...files]
    files5[0] = {...files5[0], ...{ selected: true, from: 255, to: 265 } }
    const files6 = [...files]
    files6[0] = {...files6[0], ...{ selected: true, from: 271, to: 287 } }
    const files7 = [...files]
    files7[0] = {...files7[0], ...{ selected: true, from: 289, to: 291 } }
    const files8 = [...files]
    files8[0] = {...files8[0], ...{ selected: true, from: 293, to: 308 } }
    const files9 = [...files]
    files9[0] = {...files9[0], ...{ selected: true, from: 310, to: 312 } }
    const files10 = [...files]
    files10[0] = {...files10[0], ...{ selected: true, from: 315, to: 317 } }
    const files11 = [...files]
    files11[0] = {...files11[0], ...{ selected: true, from: 320, to: 328 } }
    const files12 = [...files]
    files12[0] = {...files12[0], ...{ selected: true, from: 330, to: 333 } }
    
    
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "formatTextFunction", "blockColoring", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockColoring", "text1"]}></Message>
                <CodeBox files={files1}></CodeBox>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockColoring", "text2"]}></Message>
                <CodeBox files={files2}></CodeBox>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockColoring", "text3"]}></Message>
                <CodeBox files={files3}></CodeBox>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockColoring", "text4"]}></Message>
                <BlogList
                    list={ getText(["codeBox", "work", "implementation", "formatTextFunction", "blockColoring", "text4_list"]).map((item) => {
                        return <p key={item}> {item} </p>;
                    }) }
                    elementClass="flex flex-col gap-2 w-full"
                    char="-"
                    contentArray={ [ 
                        <CodeBox files={files4} key="files_4"></CodeBox>,
                        <CodeBox files={files5} key="files_5"></CodeBox>,
                        <CodeBox files={files6} key="files_6"></CodeBox>,
                        <CodeBox files={files7} key="files_7"></CodeBox>,
                        <CodeBox files={files8} key="files_8"></CodeBox>,
                        <CodeBox files={files9} key="files_9"></CodeBox>,
                        <CodeBox files={files10} key="files_10"></CodeBox>,
                        <CodeBox files={files11} key="files_11"></CodeBox>,
                        <CodeBox files={files12} key="files_12"></CodeBox>,
                    ] }                    
                />
            </BlogParagraph>
        </BlogChapter>
    )
}