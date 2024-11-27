"use client";

import MainImage from "./Fragments/MainImage";
import WorkPlan from "./Fragments/WorkPlan";
import Reason from "./Fragments/Reason";
import Where from "./Fragments/Where";
import Ideas from "./Fragments/Ideas";
import Design from "./Fragments/Design";
import BlogRef from "@/components/blogs/BlogRef";
import CodeBox from "@/components/codeBox/CodeBox.jsx";

const files = [ 
	{
		importFile : import( "!!raw-loader!@/components/codeBox/CodeBox.jsx" ),
		name : "CodeBox.jsx",
	},
	{
		importFile : import( "!!raw-loader!@/components/codeBox/CodeBoxRow.jsx" ),
		name : "CodeBoxRow.jsx",
		selected: true,
		from: 13,
		to: 21
	},
	{
		importFile : import( "!!raw-loader!@/components/codeBox/CodeBoxColors.jsx" ),
		name : "CodeBoxColors.jsx",
	},
	{
		importFile : import( "!!raw-loader!@/components/codeBox/CodeBoxPage.jsx" ),
		name : "CodeBoxPage.jsx",
	},
	{
		importFile : import( "!!raw-loader!@/util/CodeFormatter.js" ),
		name : "CodeFormatter.js",
	},
	{
		importFile : import( "!!raw-loader!@/util/Localization.js" ),
		name : "Localization.js",
	}
]


export default function Blog() {
	return <BlogRef> 
		<div className="flex flex-col gap-2">
			<MainImage />
			<WorkPlan />
			<Reason />
			<Where />
			<Ideas />
			<Design />
			<CodeBox files={files}></CodeBox>
		</div>
	</BlogRef>
}
