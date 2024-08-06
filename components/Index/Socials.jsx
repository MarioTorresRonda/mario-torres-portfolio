import CharacterBlock from "@/components/fragments/CharacterBlock";

import ClickableSocial from "@/components/Index/ClickableSocial";

import { faGithub as github } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as email } from "@fortawesome/free-regular-svg-icons";

export default function Socials() {
  return (
    <div className="mt-10 lg:mt-0">
      <CharacterBlock
        className="flex items-center h-[50px] md:h-[100px] lg:h-[200px]"
        startCharacter="{"
        endCharacter="}"
      >
        <div className="flex lg:flex-col gap-4">
          <div className="flex gap-4">
            <ClickableSocial href="https://github.com/MarioTorresRonda" icon={github} comma={true}/>
            <ClickableSocial href="https://www.linkedin.com/in/mariotorresronda/" icon={linkedin} comma={true}/>
          </div>
          <div className="flex gap-4">
            <ClickableSocial href="mailto:mariotorresrma@gmail.com" icon={email} comma={true}/>
          </div>
        </div>
      </CharacterBlock>
    </div>
  );
}
