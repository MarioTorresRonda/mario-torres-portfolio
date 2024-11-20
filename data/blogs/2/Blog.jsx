"use client";

import BlogList from "@/components/blogs/blogFragments/BlogList";
import Message from "@/components/fragments/Message";
import BlogChapter from "@/components/newBlogs/blogFragments/BlogChapter";
import BlogParagraph from "@/components/newBlogs/blogFragments/BlogParagraph";
import BlogTitle from "@/components/newBlogs/blogFragments/BlogTitle";
import BlogInit from "@/components/newBlogs/BlogInit";
import {useMessageText} from "@/hooks/useMessageText";

export function Blog() {
	return (
		<BlogInit>
			<BlogTitle code={["Blog", "title"]} />
			<BlogChapter code={["Blog", "chapter 1"]}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 1 desc"]}></Message>
				</BlogParagraph>
				<BlogChapter code={["Blog", "title"]} />
				<BlogChapter code={["Blog", "chapter 1"]}>
					<BlogChapter code={["Blog", "title"]} />
					<BlogChapter code={["Blog", "chapter 1"]}>
						<BlogChapter code={["Blog", "title"]} />
						<BlogChapter code={["Blog", "chapter 1"]}></BlogChapter>
					</BlogChapter>
				</BlogChapter>
			</BlogChapter>
			<BlogChapter code={["Blog", "chapter 2", "title"]}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 2", "desc"]}></Message>
				</BlogParagraph>
				<BlogList
					list={useMessageText(["Blog", "chapter 2", "list"]).map((item) => {
						return <p> {item} </p>;
					})}
				/>
			</BlogChapter>
		</BlogInit>
	);
}
