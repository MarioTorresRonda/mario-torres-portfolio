import ContentBox from "./ContentBox";
import Message from "../Message";
import BlogResumeItemImage from "./BlogResumeItemImage";
import BlogResumeList from "./BlogResumeList";

export default function BlogsResume() {

    return (<>
        <ContentBox height={"auto"} className="mb-10 mt-10">
            <div className="mx-6 flex w-full">
                <div className="w-1/2 text-center">
                    <BlogResumeItemImage />
                </div>
                <div className="w-1/2">
                    <p className="text-[30px] text-center"> <Message code={ ["mainPage", "blogs", "mainTitle"] } /> </p>
                    <p className="text-center"> <Message code={ ["mainPage", "blogs", "mainDesc"] } /> </p>
                   <BlogResumeList />
                </div>
            </div>
        </ContentBox>
    </>)
}