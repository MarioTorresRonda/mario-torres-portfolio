import BlogNavBarItem from "../blogs/blogFragments/BlogNavBarItem";
import {useEffect} from "react";
import Message from "../fragments/Message";

export default function BlogInit({children}) {

	return <div className="flex flex-col gap-2">{children}</div>;
}
