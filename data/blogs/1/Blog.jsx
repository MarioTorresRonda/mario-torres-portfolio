"use client";

import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";
import BlogList from "@/components/blogs/blogFragments/BlogList";
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import BlogSubtitle from "@/components/blogs/blogFragments/BlogSubtitle";
import BlogTitle from "@/components/blogs/blogFragments/BlogTitle";
import Message from "@/components/fragments/Message";
import {MenuContext} from "@/store/menu-context";
import {useContext, useEffect, useRef} from "react";
import {useMessageText} from "@/hooks/useMessageText";
import BlogBackgroundImage from "@/components/blogs/blogFragments/BlogBackgroundImage";
import BlogSplit2 from "@/components/blogs/blogFragments/BlogSplit2";
import BlogImageWIthHoverText from "@/components/blogs/blogFragments/BlogImageWIthHoverText";
import BlogImageUrl from "@/components/blogs/blogFragments/BlogImageUrl";

import headerImg from "@/public/Blog Preview.png";
import Idea1Img from "@/public/Notes.png";
import Idea2Img from "@/public/Medium.png";
import Idea3Img from "@/public/Idea3CodeText.png";
import Idea4Img from "@/public/Idea4brittanychiang.png";
import Navbar_Fragment1 from "@/public/Navbar_Fragment1.png"; 
import ClientImage from "@/components/fragments/ClientImage";

export default function Blog() {
	const {setMenu, menu} = useContext(MenuContext);
	const blogInfoRef = useRef({
		navBar: [],
		uuid: crypto.randomUUID(),
	});
	menu.blogInfo = blogInfoRef.current;

	const completeBlog = (
		<div className="flex flex-col gap-2">
			<BlogBackgroundImage
				className="h-60"
				imageSrc={headerImg}
				imageClass="absolute items-center h-56 overflow-hidden transparent-gradient brightness-50 dark:brightness-75 "
				imageAlt={["Blog", "image"]}
			>
				<div className="md:px-20 h-full w-full shadow-black text-shadow dark:text-shadow-sm flex flex-col items-center justify-center">
					<BlogTitle blogRef={blogInfoRef} text={useMessageText(["Blog", "title"])}></BlogTitle>
					<BlogSubtitle text={useMessageText(["Blog", "subtitle"])}></BlogSubtitle>
				</div>
			</BlogBackgroundImage>
			<BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText(["Blog", "chapter 1"])}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 1 desc"]}></Message>
				</BlogParagraph>
			</BlogChapter>
			<BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText(["Blog", "chapter 2", "title"])}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 2", "desc"]}></Message>
				</BlogParagraph>
				<BlogList
					list={useMessageText(["Blog", "chapter 2", "list"]).map((item) => {
						return <p> {item} </p>;
					})}
				/>
			</BlogChapter>
			<BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText(["Blog", "chapter 3", "title"])}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 3", "desc"]}></Message>
				</BlogParagraph>
			</BlogChapter>
			<BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText(["Blog", "chapter 4", "title"])}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 4", "desc"]}></Message>
				</BlogParagraph>
				<BlogSplit2>
					<BlogImageUrl
						title={useMessageText(["Blog", "chapter 4", "idea1"])}
						desc={useMessageText(["Blog", "chapter 4", "idea1Desc"])}
						imageSrc={Idea1Img}
					/>
					<BlogImageUrl
						title={useMessageText(["Blog", "chapter 4", "idea2"])}
						desc={useMessageText(["Blog", "chapter 4", "idea2Desc"])}
						imageSrc={Idea2Img}
					/>
					<BlogImageUrl
						title={useMessageText(["Blog", "chapter 4", "idea3"])}
						desc={useMessageText(["Blog", "chapter 4", "idea3Desc"])}
						imageSrc={Idea3Img}
					/>
					<BlogImageUrl
						title={useMessageText(["Blog", "chapter 4", "idea4"])}
						desc={useMessageText(["Blog", "chapter 4", "idea4Desc"])}
						imageSrc={Idea4Img}
					/>
				</BlogSplit2>
			</BlogChapter>
			<BlogChapter blogRef={blogInfoRef} level={1} text={useMessageText(["Blog", "chapter 5", "title"])}>
				<BlogParagraph>
					<Message code={["Blog", "chapter 5", "desc"]}></Message>
				</BlogParagraph>
				<BlogChapter blogRef={blogInfoRef} level={2} text={useMessageText(["Blog", "chapter 5", "fragment1", "title"])}>
					<BlogParagraph>
						<Message code={["Blog", "chapter 5", "fragment1", "desc"]}></Message>
					</BlogParagraph>
					<ClientImage className="shadow shadow-black mb-2" src={Navbar_Fragment1} alt={[]}>

					</ClientImage>
					<BlogParagraph>
						<Message code={["Blog", "chapter 5", "fragment1", "desc2"]}></Message>
					</BlogParagraph>
				</BlogChapter>
			</BlogChapter>

		</div>
	);

	menu.selectedPost.navBar = blogInfoRef.current.navBar;

	useEffect(() => {
		setMenu(menu);
	}, []);

	return completeBlog;
}
