import CharacterBlock from "@/components/CharacterBlock";

import { projectList } from "@/data/projects";
import Message from "../Message";
import Link from "next/link";

export default function ProjectsBlock() {
  return (
    <>
      <div className="flex flex-col md:items-center my-auto md:my-0 md:mt-10">
        <p className="text-3xl w-fit mb-3">
          <Message code={["mainPage", "projects", "mainTitle"]} />:
        </p>
        {projectList.map((item) => {
          return (
            <Link href={item.url} key={item.id}>
              <CharacterBlock
                mainClassName="mb-2"
                className="flex items-center hover:animate-pulse my-1"
                startCharacter="["
                endCharacter="]"
              >
                <Message
                  code={["mainPage", "projects", "list", ...item.name]}
                />
              </CharacterBlock>
            </Link>
          );
        })}
      </div>
    </>
  );
}
