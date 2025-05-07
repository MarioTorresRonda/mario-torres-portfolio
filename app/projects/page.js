import Localization from "@/components/fragments/Localization";
import ContentBox from "@/components/Index/ContentBox";
import ProjectList from "@/components/projects/projectList";
import TechColor from "@/components/projects/TechColor";
import { techColors } from "@/data/techs";

export default function page(){    
    return (
        <ContentBox height={"auto"} className="mb-10 mt-20">
            <div className="mx-2 sm:mx-10 w-full flex flex-col gap-4">
                <div className="mx-4 flex flex-wrap gap-8 justify-start">
                    { techColors.map( (color) => {
                        return <TechColor key={color.name} color={color} />
                    } ) }
                    <div className="flex-1 flex justify-end">
                        <Localization />
                    </div>
                </div>
                <ProjectList />
            </div>
        </ContentBox>
    )
}