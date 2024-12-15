
import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import Message from "@/components/fragments/Message";
import {useMessageText} from "@/hooks/useMessageText";

import ClientImage from "@/components/fragments/ClientImage";
import BlogList from "@/components/blogs/blogFragments/BlogList";

import DesignNavBar from "./DesignNavBar";
import DesignMainPage from "./DesignMainPage";
import DesignMainPageImage from "./DesignMainPageImage";
import DesignMainPageList from "./DesignMainPageList";

import DesignMain from "./DesignMain";
import DesignMainNS from "./DesignMainNS";
import DesignMainS from "./DesignMainS";

import BlogChapter from "@/components/blogs/blogFragments/BlogChapter";

export default function Design() {
    return (
        <BlogChapter code={["Blog", "chapter 5", "title"]}>
            <BlogParagraph>
                <Message code={["Blog", "chapter 5", "desc"]}></Message>
            </BlogParagraph>
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
    )
}