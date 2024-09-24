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
	return <BlogRef> 
		<div className="flex flex-col gap-2">
			<MainImage/>
			<WorkPlan />
			<Reason />
			<Where />
			<Ideas />
			<Design />
		</div>
	</BlogRef>
}
