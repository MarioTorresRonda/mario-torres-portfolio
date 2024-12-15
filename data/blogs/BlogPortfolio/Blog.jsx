"use client";

import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";
import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";

import BlogInit from "@/components/blogs/BlogInit";
import MainImage from "./Fragments/MainImage";
import Reason from "./Fragments/Reason";
import WorkPlan from "./Fragments/WorkPlan";
import Where from "./Fragments/Where";
import Ideas from "./Fragments/Ideas";

import headerImg from "@/public/Blog Preview.png";
import Design from "./Fragments/Design/Design";
import DevelopmentPlan from "./Fragments/Development Plan/DevelopmentPlan";

export function Blog() {
	return (
		<BlogInit>
			<MainImage img={headerImg}>
				<BlogTitle code={["Blog", "title"]}></BlogTitle>
				<BlogSubtitle code={["Blog", "subtitle"]}></BlogSubtitle>
			</MainImage>
			<BlogChapter code={["Blog", "chapter 1"]}>
				<WorkPlan />
			</BlogChapter>
			<BlogChapter code={["Blog", "chapter 2", "title"]}>
				<Reason />
			</BlogChapter>
			<BlogChapter code={["Blog", "chapter 3", "title"]}>
				<Where />
			</BlogChapter>
			<BlogChapter code={["Blog", "chapter 4", "title"]}>
				<Ideas />
			</BlogChapter>	
			{ Design() }
			{ DevelopmentPlan() }	
		</BlogInit>
	);
}
