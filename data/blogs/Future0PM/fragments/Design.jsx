import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogGetTextChildren from "@/components/blogs/blogFragments/BlogGetTextChildren";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import professorPicarats from "@/public/posts/future0PM/Picarats.webp"
import { returnListAsPs } from "@/util/Blogs";

export default function Design( getText ) {

    return (
        <BlogChapter code={["Future0PM", "design", "title"]}>
            <BlogParagraph >
                <Message code={["Future0PM", "design", "text"]}></Message>
            </BlogParagraph>
            <BlogChapter code={["Future0PM", "design", "puzzle", "title"]}>
                <BlogGetTextChildren prop="list" code={["Future0PM", "design", "puzzle", "steps"]} func={returnListAsPs}>
                    <BlogList char="-" />
                </BlogGetTextChildren>
                <BlogParagraph >
                    <Message code={["Future0PM", "design", "puzzle", "subText1"]}></Message>
                </BlogParagraph>
                <BlogParagraph >
                    <Message code={["Future0PM", "design", "puzzle", "subText2"]}></Message>
                </BlogParagraph>
            </BlogChapter>
            <BlogChapter code={["Future0PM", "design", "moneySystem", "title"]}>
                <BlogParagraph >
                    <Message code={["Future0PM", "design", "moneySystem", "text"]}></Message>
                </BlogParagraph>
                <BlogGetTextChildren prop="list" code={["Future0PM", "design", "moneySystem"]} codeArray={["prop1", "prop2"]} func={returnListAsPs}>
                    <BlogList char="-" contentArray={[
                        <BlogList char="=" list={ [ 
                            <Message key={1} code={["Future0PM", "design", "moneySystem", "prop1desc1"]}></Message>,
                            <Message key={2} code={["Future0PM", "design", "moneySystem", "prop1desc2"]}></Message>
                        ] } />
                    , null]} />
                </BlogGetTextChildren>
                <BlogParagraph >
                    <Message code={["Future0PM", "design", "moneySystem", "method"]}></Message>
                </BlogParagraph>
                <BlogGetTextChildren prop="list" code={["Future0PM", "design", "moneySystem", "methods"]} func={returnListAsPs}>
                    <BlogList char="-" />
                </BlogGetTextChildren>
            </BlogChapter>
        </BlogChapter>
    );
}
