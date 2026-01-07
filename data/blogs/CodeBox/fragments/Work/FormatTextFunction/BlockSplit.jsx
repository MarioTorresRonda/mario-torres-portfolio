import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogInfoPanel from "@/components/blogs/blogFragments/BlogInfoPanel";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import { useMessageText } from "@/hooks/useMessageText";


export default function BlockSplit( files ) {

    const getText = useMessageText();

    const files1 = [...files]
    files1[0] = {...files1[0], ...{ selected: true, from: 8, to: 14 } }
    const files2 = [...files]
    files2[0] = {...files2[0], ...{ selected: true, from: 123, to: 127 } }
    const files3 = [...files]
    files3[0] = {...files3[0], ...{ selected: true, from: 129, to: 130 } }
    const files4 = [...files]
    files4[0] = {...files4[0], ...{ selected: true, from: 163, to: 175 } }
    const files5 = [...files]
    files5[0] = {...files5[0], ...{ selected: true, from: 131, to: 143 } }
    const files6 = [...files]
    files6[0] = {...files6[0], ...{ selected: true, from: 145, to: 161 } }
    const files7 = [...files]
    files7[0] = {...files7[0], ...{ selected: true, from: 180, to: 197 } }
    const files8 = [...files]
    files8[0] = {...files8[0], ...{ selected: true, from: 199, to: 206 } }
    
    
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text1"]}></Message>
                <CodeBox files={files1}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text2"]}></Message>
                <CodeBox files={files2}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text3"]}></Message>
                <CodeBox files={files3}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text4"]}></Message>
                <CodeBox files={files4}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text5"]}></Message>
                <CodeBox files={files5}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text6"]}></Message>
                <CodeBox files={files6}></CodeBox> 
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text7"]}></Message>
                <CodeBox files={files7}></CodeBox> 
                <BlogList
                    list={ [ "foot7_1", "foot7_2" ].map((item) => {
                        const text = getText( ["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", item] );
                        return <p key={item}> {text} </p>;
                    }) }
                    elementClass="flex flex-col gap-2 w-full"
                    char="-"
                />
                <Message code={["codeBox", "work", "implementation", "formatTextFunction", "blockSplit", "text8"]}></Message>
                <CodeBox files={files8}></CodeBox>
            </BlogParagraph>
        </BlogChapter>
    )
}