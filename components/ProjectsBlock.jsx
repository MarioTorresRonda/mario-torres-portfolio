import CharacterBlock from "@/components/CharacterBlock";

import { projectList } from "@/data/projects";
import Link from "next/link";

export default function ProjectsBlock() {
  return (
    <>
      <div className="flex flex-col mt-10 lg:mt-10 md:items-center">
        <p className="text-3xl w-fit mb-3"> Projectos </p>
        {projectList.map((item) => {
          return (
            <CharacterBlock
            mainClassName="mb-2"
            key={item.id}
            className="flex items-center hover:animate-pulse my-1"
            startCharacter="["
            endCharacter="]"
            > {item.name} </CharacterBlock>
          );
        })}
        <Link href="/projects"> <p className="text-stone-400"> Ver todos... </p> </Link>
      </div>
    </>
  );
}
