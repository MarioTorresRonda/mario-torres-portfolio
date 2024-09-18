"use client";


import {MenuContext} from "@/store/menu-context";
import {useContext, useEffect, useRef} from "react";

import MainImage from "./Fragments/MainImage";
import WorkPlan from "./Fragments/WorkPlan";
import Reason from "./Fragments/Reason";
import Where from "./Fragments/Where";
import Ideas from "./Fragments/Ideas";
import Design from "./Fragments/Design";
import BlogRef from "@/components/blogs/BlogRef";

export default function Blog() {
	
	let blogInfoRef = useRef({
		navBar: [],
		uuid: crypto.randomUUID(),
	});;

	return <BlogRef blogInfoRef={blogInfoRef} > 
		<div className="flex flex-col gap-2">
			<MainImage blogRef={blogInfoRef} />
			<WorkPlan blogRef={blogInfoRef} />
			<Reason blogRef={blogInfoRef} />
			<Where blogRef={blogInfoRef} />
			<Ideas blogRef={blogInfoRef} />
			<Design blogRef={blogInfoRef} />
		</div>
	</BlogRef>
}
