'use client'

import Message from "../fragments/Message";
import ContentBox from "./ContentBox";
import { projectList } from "@/data/projects";
import ProjectResumeItem from "./ProjectResumeItem";
import ClientLink from "../fragments/ClientLink";
import ClientImage from "../fragments/ClientImage";
import { projects } from "@/data/navBar";
import { useState } from "react";
import ProjectResumeImage from "./ProjectsResumeImage";

export default function ProjectsResume() {

    const [selectedProject, setSelectedProject] = useState( projectList[0] );
    return <>
        <ContentBox height={"auto"} className="mb-10">
            <div className="px-6 flex flex-col lg:flex-row w-full">
                <div className="lg:w-1/2">
                    <p className="text-[30px] text-center"> <Message code={ ["mainPage", "projects", "mainTitle"] } /> </p>
                    <div>
                        <p className="text-center"> <Message code={ ["mainPage", "projects", "mainDesc"] } /> </p>
                        <ul className="mt-2">
                            {projectList.map((item, index) => {    
                                return ( <li key={item.id}> 
                                    <ProjectResumeItem project={item} isOdd={index % 2 == 0} onSelectProject={setSelectedProject}  />
                                </li> )
                            })}
                        </ul>
                    </div>
                    <ClientLink newMenu={projects} url="/projects" >
                        <Message code={["commons", "seeAll"]} />
                    </ClientLink>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                    <ProjectResumeImage project={selectedProject} />
                </div>
            </div>
        </ContentBox>
    </>
}