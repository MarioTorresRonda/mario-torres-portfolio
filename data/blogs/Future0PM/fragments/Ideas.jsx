import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import professorPicarats from "@/public/posts/future0PM/Picarats.webp"

export default function Ideas() {
	return (
		<BlogChapter code={["Future0PM", "ideas", "title"]}>
			<BlogParagraph >
				<Message code={["Future0PM", "ideas", "idea1"]}></Message>
			</BlogParagraph>
			<BlogParagraph >
				<Message code={["Future0PM", "ideas", "idea2"]}></Message>
			</BlogParagraph>
			<ClientImage width="auto" height="auto" src={professorPicarats} alt={["Future0PM", "ideas", "idea2"]} priority={false} />
		</BlogChapter>
	);
}
