import { projectList } from "@/data/projects"
import ProjectItem from "./ProjectItem"

export default function ProjectList() {
    return <div className="flex flex-col gap-6">
        { projectList.map( ( project ) => {
            return <ProjectItem key={project.id} project={project} />
        }) }
    </div>
}