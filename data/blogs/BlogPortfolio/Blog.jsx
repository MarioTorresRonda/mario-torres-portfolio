"use client";

import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";

import BlogInit from "@/components/blogs/BlogInit";
import MainImage from "./Fragments/MainImage";
import Reason from "./Fragments/Reason/Reason";
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
			{ WorkPlan() }
			{ Reason() }
			{ Where() }
			{ Ideas() }
			{ Design() }
			{ DevelopmentPlan() }	
		</BlogInit>
	);
}
