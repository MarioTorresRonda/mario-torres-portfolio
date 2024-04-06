import Header from "@/components/Index/Header.jsx";
import Hero from "@/components/Index/Hero";
import OnDocumentReady from "@/components/OnDocumentReady";
import ProjectsBlock from "@/components/Index/ProjectsBlock";
import Socials from "@/components/Index/Socials";
import Localization from "@/components/localization";
import ProjectsResume from "@/components/Index/ProjectsResume";


export default function Home() {
  return (
    <main>
      <Header className="lg:flex h-full">
        <OnDocumentReady/>
        <Localization/>
        <Hero />
        <div className="flex flex-col md:flex-row lg:flex-col justify-around lg:h-full" >
          <Socials />
          <ProjectsBlock />
        </div>
      </Header>
      <ProjectsResume/>
    </main>
  );
}
