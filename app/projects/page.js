import ContentBox from "@/components/Index/ContentBox";
import ProjectList from "@/components/projects/projectList";

export default function page(){
    return (
        <ContentBox height={"auto"} className="mb-10 mt-20">
            <div className="sm:mx-10 w-full">
                <ProjectList />
            </div>
        </ContentBox>
    )
}