import CharacterBlock from "@/components/CharacterBlock";

import { projectList } from "@/data/projects";
import Message from "../Message";
import Link from "next/link";
import ClientLink from "../ClientLink";

export default function ProjectsBlock() {
  return (
    <>
      <div className="flex flex-col mt-10 lg:mt-10 md:items-center">
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
        <ClientLink title="/" url="/projects" >
          <Message code={["commons", "seeAll"]} />
        </ClientLink>
      </div>
    </>
  );
}
