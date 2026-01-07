"use client";

import BlogInit from "@/components/blogs/BlogInit";
import MainImage from "../BlogPortfolio/Fragments/MainImage";
import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";

import headerImg from '@/public/posts/codeBox/CodeBoxMainImage.jpg';
import Reason from "./fragments/Reason/Reason";
import Where from "./fragments/Where/Where";
import Ideas from "./fragments/Ideas/Ideas";
import Design from "./fragments/Design/Design";
import Implementation from "./fragments/Implementation/Implementation";
import Work from "./fragments/Work/Work";
import Summary from "./fragments/Summary";

export function Blog() {
	return (
		<BlogInit>
			<MainImage img={headerImg}>
				<BlogTitle code={["codeBox", "title"]}></BlogTitle>
				<BlogSubtitle code={["codeBox", "subtitle"]}></BlogSubtitle>
			</MainImage>
			{ Reason() }
			{ Where() }
			{ Ideas() }
			{ Design() }
			{ Implementation() }
			{ Work() }
			{ Summary() }
		</BlogInit>
	);
}
