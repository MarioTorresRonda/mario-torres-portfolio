"use client";

import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";

import BlogInit from "@/components/blogs/BlogInit";
import MainImage from "@/components/blogs/blogFragments/MainImage";


import headerImg from '@/public/posts/BlogPortfolio/Blog Preview.png';

import End from "@/components/blogs/blogFragments/End";
import Summary from "./fragments/Summary";
import Reason from "./fragments/Reason";

export function Blog(  ) {
	return (
		<BlogInit>
			<MainImage img={headerImg}>
				<BlogTitle code={["Future0PM", "title"]}></BlogTitle>
				<BlogSubtitle code={["Future0PM", "subtitle"]}></BlogSubtitle>
			</MainImage>
			{ Reason() }
			{ Summary() }
			<End endCode={["mainPage", "blogs", "end"]} ></End>
		</BlogInit>
	);
}
