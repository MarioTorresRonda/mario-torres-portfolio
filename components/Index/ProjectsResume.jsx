import Message from "../Message";
import ContentBox from "./ContentBox";
import { projectList } from "@/data/projects";
import ProjectResumeItem from "./ProjectResumeItem";
import ClientLink from "../ClientLink";
import ClientImage from "../ClientImage";
import { projects } from "@/data/navBar";

export default function ProjectsResume() {
    return <>
        <ContentBox height={"auto"} className="mb-10">
            <div className="mx-6 flex w-full">
                <div className="w-1/2">
                    <p className="text-[30px] text-center"> <Message code={ ["mainPage", "projects", "mainTitle"] } /> </p>
                    <div>
                        <p className="text-center"> <Message code={ ["mainPage", "projects", "mainDesc"] } /> </p>
                        <ul className="mt-2">
                            {projectList.map((item, index) => {    
                                return ( <li key={item.id}> 
                                    <ProjectResumeItem name={item.name} description={item.description} isOdd={index % 2 == 0}  />
                                </li> )
                            })}
                        </ul>
                    </div>
                    <ClientLink newMenu={projects} url="/projects" >
                        <Message code={["commons", "seeAll"]} />
                    </ClientLink>
                </div>
                <div className="w-1/2">
                    <ClientImage
                        src={projectList[0].image}
                        alt={["mainPage", "projects", "imageAlt"]}
                    >
                    </ClientImage>
                </div>
            </div>
        </ContentBox>
    </>
}