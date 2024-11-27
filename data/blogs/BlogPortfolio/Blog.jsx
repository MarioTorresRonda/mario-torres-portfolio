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

import Design from "./Fragments/Design/Design";
import DesignNavBar from "./Fragments/Design/DesignNavBar";
import DesignMainPage from "./Fragments/Design/DesignMainPage";
import DesignMainPageImage from "./Fragments/Design/DesignMainPageImage";
import DesignMainPageList from "./Fragments/Design/DesignMainPageList";

import headerImg from "@/public/Blog Preview.png";
import DesignMain from "./Fragments/Design/DesignMain";
import DesignMainNS from "./Fragments/Design/DesignMainNS";
import DesignMainS from "./Fragments/Design/DesignMainS";

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
			<BlogChapter code={["Blog", "chapter 5", "title"]}>
				<Design />
				<BlogChapter code={["Blog", "chapter 5", "fragment1", "title"]}>
					<DesignNavBar />
				</BlogChapter>
				<BlogChapter code={["Blog", "chapter 5", "fragment2", "title"]}>
					<DesignMainPage />
					<BlogChapter code={["Blog", "chapter 5", "fragment2", "part1", "title"]}>
						<DesignMainPageImage />
					</BlogChapter>
					<BlogChapter code={["Blog", "chapter 5", "fragment2", "part2", "title"]}>
						<DesignMainPageList />
					</BlogChapter>
				</BlogChapter>
				<BlogChapter code={["Blog", "chapter 5", "fragment3", "title"]}>
					<DesignMain />
					<BlogChapter code={["Blog", "chapter 5", "fragment3", "part1", "title"]}>
						<DesignMainNS />
					</BlogChapter>
					<BlogChapter code={["Blog", "chapter 5", "fragment3", "part2", "title"]}>
						<DesignMainS />
					</BlogChapter>
				</BlogChapter> 
			</BlogChapter>
		</BlogInit>
	);
}
