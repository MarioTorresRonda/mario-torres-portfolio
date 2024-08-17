import ContentBox from "./ContentBox";
import Message from "../fragments/Message";
import BlogResumeItemImage from "./BlogResumeItemImage";
import BlogResumeList from "./BlogResumeList";

export default function BlogsResume() {

    return (<>
        <ContentBox height={"auto"} className="mb-10 mt-20">
            <div className="sm:mx-6 flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2 lg:order-2">
                    <p className="text-[30px] text-center"> <Message code={ ["mainPage", "blogs", "mainTitle"] } /> </p>
                    <p className="text-center"> <Message code={ ["mainPage", "blogs", "mainDesc"] } /> </p>
                   <BlogResumeList />
                </div>
                <div className="lg:w-1/2 text-center overflow-hidden flex items-center justify-center">
                    <BlogResumeItemImage />
                </div>
            </div>
        </ContentBox>
    </>)
}