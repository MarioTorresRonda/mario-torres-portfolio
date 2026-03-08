import { useMessageText } from "@/hooks/useMessageText";
import BlogList from "@/components/blogs/blogFragments/BlogList";

export default function ReasonList( { getText } ) {
    return <BlogList
        list={ getText( ["Blog", "chapter 2", "list"] ).map((item) => {
            return <p key={item}> {item} </p>;
        }) }
    />
}