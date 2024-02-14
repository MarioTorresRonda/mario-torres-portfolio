import CharacterBlock from "@/components/CharacterBlock";
import Header from "@/components/Header";
import HighlightedText from "@/components/HighlightedText";
import ClickableSocial from "@/components/ClickableImage/ClickableSocial";


import { faGithub as github } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin as linkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as email } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
	return (
		<main className="bg-stone-800 font-mono">
			<Header className="lg:flex" >
				<div className="w-full lg:w-[67%]">
					<div className="flex lg:block"> 
						<p className="text-slate-100 text-[7vw] lg:text-[200px] lg:mt-[-50px]"> # </p>
						<p className="text-slate-100 text-[7vw] lg:text-7xl lg:mt-[-50px]"> Bienvenido. </p>
					</div>
					<HighlightedText
						texts={[
							"Mi nombre es Mario y soy un programador full-stack, He desarrollado varias aplicaciones en diferentes entornos y tengo conocimiento en diversos lenguajes",
							"Me encanta mantenerme actualizado y lo desmuestro aprendiendo siemrpe nuevas formas, tecnologias, y practicas para realizar proyectos de forma profesional",
						]}
					/>
				</div>
				<div className="mt-10 lg:mt-0" >
					<CharacterBlock className="flex items-center h-[200px]" startCharacter="{" endCharacter="}" >
						<div className="flex lg:flex-col gap-4">
							<div className="flex gap-4">
								<ClickableSocial icon={github}/>
								<ClickableSocial icon={linkedin}/>
							</div>
							<div className="flex gap-4">
								<ClickableSocial icon={email}/>
							</div>
						</div>
					</CharacterBlock>
				</div>
			</Header>
		</main>
	);
}
