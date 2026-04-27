import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import {useMessageText} from "@/hooks/useMessageText";

export default function Summary() {
	return (
		<BlogChapter code={["Future0PM", "summary", "title"]}>
			<BlogParagraph>
				<Message code={["Future0PM", "summary", "text1"]}></Message>
			</BlogParagraph>
			<BlogParagraph>
				<Message code={["Future0PM", "summary", "text2"]}></Message>
			</BlogParagraph>
			<BlogParagraph>
				<Message code={["Future0PM", "summary", "text3"]}></Message>
			</BlogParagraph>
		</BlogChapter>
	);
}
