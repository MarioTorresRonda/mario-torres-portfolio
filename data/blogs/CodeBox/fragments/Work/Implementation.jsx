import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import FileList from "./FileList";
import Formats from "./Formats";
import CodeBoxBlock from "./CodeBox/CodeBoxBlock";
import ApiCall from "./ApiCall";
import FileContext from "./FileContext";
import FormatTextFunction from "./FormatTextFunction/FormatTextFunction";


export default function Implementation() {
   return (
        <BlogChapter code={["codeBox", "work", "implementation", "title"]}>
            <BlogParagraph>
                <Message code={["codeBox", "work", "implementation", "text"]}></Message>
            </BlogParagraph>
            { FileList() }
            { Formats() }
            { CodeBoxBlock() }
            { ApiCall() }
            { FileContext() }
            { FormatTextFunction() }
        </BlogChapter>
    )
}