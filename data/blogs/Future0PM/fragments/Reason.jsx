import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";

export default function Reason() {
	return (
		<BlogChapter code={["Future0PM", "reason", "title"]}>
			<BlogParagraph >
				<span className="text-gray-500/50 line-through"> <Message code={["Future0PM", "reason", "text1"]}></Message> </span>
				<Message code={["Future0PM", "reason", "text2"]}></Message>
			</BlogParagraph>
		</BlogChapter>
	);
}
