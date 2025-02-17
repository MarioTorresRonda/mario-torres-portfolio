"use client";

import {MenuContext} from "@/store/menu-context";
import {useEffect, useState} from "react";
import ClientImage from "../fragments/ClientImage";
import Message from "../fragments/Message";
import {useNavigate} from "@/hooks/useNavigate";
import {useMessageText} from "@/hooks/useMessageText";
import {blogList} from "@/data/blogs";
import { blog as newBlogMenu } from "@/data/navBar";

export default function BlogResumeItemImage({blog}) {
	const [oldBlog, setOldBlog] = useState(blogList[0]);
	const {navigate} = useNavigate(MenuContext);
	const getText = useMessageText();

	var isShow = oldBlog == blog;
	const dateFormat = getText(["commons", "dateFormat"]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setOldBlog(blog);
		}, 200);

		return () => {
			clearTimeout(timeout);
		};
	}, [blog, setOldBlog]);

	function OnClickImage() {
		navigate(newBlogMenu, blog.id);
	}

	return (
		<div>
			<div className="overflow-hidden max-w-[400px] ">
				<div className={(!isShow ? "-translate-y-80" : "") + " transition-all flex justify-center"}>
					<ClientImage
						onClick={OnClickImage}
						height={250}
						className=" mt-3 mb-5 scale-100 hover:scale-110 transition-all w-auto"
						src={oldBlog.image}
						alt={["mainPage", "blogs", "imageAlt"]}
					/>
				</div>
			</div>
			<div className="text-center">
				<p>
					{" "}
					<Message code={["mainPage", "blogs", "from"]} />: {new Date(oldBlog.date).toLocaleDateString(dateFormat)}{" "}
				</p>
			</div>
		</div>
	);
}
