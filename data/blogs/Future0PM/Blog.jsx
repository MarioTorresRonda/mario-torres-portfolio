"use client";

import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";

import BlogInit from "@/components/blogs/BlogInit";
import MainImage from "@/components/blogs/blogFragments/MainImage";

import future0PMImageMain from "@/public/posts/future0PM/mainImage.png";

import End from "@/components/blogs/blogFragments/End";
import Summary from "./fragments/Summary";
import Reason from "./fragments/Reason";
import Where from "./fragments/Where";
import Ideas from "./fragments/Ideas";
import Design from "./fragments/Design";
import Work from "./fragments/Work";

export function Blog(  ) {
	return (
		<BlogInit>
			<MainImage img={future0PMImageMain}>
				<BlogTitle code={["Future0PM", "title"]}></BlogTitle>
				<BlogSubtitle code={["Future0PM", "subtitle"]}></BlogSubtitle>
			</MainImage>
			{ Reason() }
			{ Where() }
			{ Ideas() }
			{ Design() }
			{ Work() }
			{ Summary() }
			<End endCode={["mainPage", "blogs", "end"]} ></End>
		</BlogInit>
	);
}
