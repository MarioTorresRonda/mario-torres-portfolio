import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogGetTextChildren from "@/components/blogs/blogFragments/BlogGetTextChildren";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import CodeBox from "@/components/codeBox/CodeBox";
import Message from "@/components/fragments/Message";
import {returnListAsPs} from "@/util/Blogs";

export default function Formats(getText) {
	const files = [
		{
			route: "data/blogs/CodeBox/files/formatExample.txt",
			name: "Format Example.js",
		},
	];

	const files1 = [...files];
	files1[0] = {...files1[0], ...{selected: true, from: 5, to: 11}};
	const files2 = [...files];
	files2[0] = {...files2[0], ...{selected: true, from: 44, to: 53}};
	const files3 = [...files];
	files3[0] = {...files3[0], ...{selected: true, from: 54, to: 56}};
	const files4 = [...files];
	files4[0] = {...files4[0], ...{selected: true, from: 57, to: 60}};

	return (
		<BlogChapter code={["codeBox", "work", "implementation", "formats", "title"]}>
			<BlogParagraph>
				<Message code={["codeBox", "work", "implementation", "formats", "text"]}></Message>
			</BlogParagraph>
			<BlogGetTextChildren
				prop="list"
				code={["codeBox", "work", "implementation", "formats", "list"]}
				func={returnListAsPs}
			>
				<BlogList
					elementClass="flex flex-col gap-2 w-full"
					char="●"
					contentArray={[
						<CodeBox files={files1} key="files_1"></CodeBox>,
						<CodeBox files={files2} key="files_2"></CodeBox>,
						<CodeBox files={files3} key="files_3"></CodeBox>,
						<CodeBox files={files4} key="files_4"></CodeBox>,
					]}
				/>
			</BlogGetTextChildren>
		</BlogChapter>
	);
}
