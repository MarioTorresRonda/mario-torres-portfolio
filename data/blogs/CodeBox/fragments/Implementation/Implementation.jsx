import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";
import BlogList from "@/components/blogs/blogFragments/BlogList";

import img from "@/public/posts/codeBox/navbar.png";
import img2 from "@/public/posts/codeBox/codebox.png";
import {returnListAsPs} from "@/util/Blogs";
import BlogGetTextChildren from "@/components/blogs/blogFragments/BlogGetTextChildren";

export default function Implementation() {
	return (
		<BlogChapter code={["codeBox", "implementation", "title"]}>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "text"]}></Message>
			</BlogParagraph>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "text2"]}></Message>
			</BlogParagraph>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "navbar", "text"]}></Message>{" "}
			</BlogParagraph>
			<ClientImage className="shadow shadow-black" src={img} alt={[]}></ClientImage>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "navbar", "foot"]}></Message>{" "}
			</BlogParagraph>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "codebox", "text"]}></Message>
			</BlogParagraph>
			<ClientImage className="shadow shadow-black" src={img2} alt={[]}></ClientImage>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "codebox", "foot"]}></Message>
			</BlogParagraph>
			<BlogParagraph>
				<Message code={["codeBox", "implementation", "buttons", "text"]}></Message>
			</BlogParagraph>
			<BlogGetTextChildren prop="list" code={["codeBox", "implementation", "buttons", "buttons"]} func={returnListAsPs}>
				<BlogList char="-" />
			</BlogGetTextChildren>
		</BlogChapter>
	);
}
