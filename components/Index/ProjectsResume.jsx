import Message from "../Message";
import ContentBox from "./ContentBox";
import { projectList } from "@/data/projects";
import ProjectResumeItem from "./ProjectResumeItem";
import ClientLink from "../ClientLink";
import Image from "next/image";

export default function ProjectsResume() {

    
    return <>
        <ContentBox height={"auto"} className="mb-10">
            <div className="mx-6 flex w-full">
                <div className="w-1/2">
                    <p className="text-[30px] text-center"> <Message code={ ["mainPage", "projects", "mainTitle"] } /> </p>
                    <div>
                        <p className="text-center"> Most detailed list of my favorite projects </p>
                        <ul className="mt-2 relative">
                            {projectList.map((item, index) => {    
                                return ( <li key={item.id}> 
                                    <ProjectResumeItem name={item.name} description={item.description} isOdd={index % 2 == 0}  />
                                </li> )
                            })}
                        </ul>
                    </div>
                    <ClientLink title="/" url="/projects" >
                        <Message code={["commons", "seeAll"]} />
                    </ClientLink>
                </div>
                <div className="w-1/2">
                    <Image
                        src={projectList[0].image}
                        alt="Picture of the author"
                    >
                    </Image>
                </div>
            </div>
        </ContentBox>
    </>
}