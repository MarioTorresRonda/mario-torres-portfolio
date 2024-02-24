import Header from "@/components/Header";

import Hero from "@/components/Hero";
import LoadingBlock from "@/components/LoadingBlock";
import ProjectsBlock from "@/components/ProjectsBlock";
import Socials from "@/components/Socials";
import Localization from "@/components/localization";

export default function Home() {
  return (
    <main className="bg-stone-800 font-mono">
      <Header className="lg:flex">
        <Localization />
        <Hero />
        <div className="flex flex-col md:flex-row lg:flex-col justify-around" >
          <Socials />
          <ProjectsBlock />
        </div>
      </Header>
      <LoadingBlock/>
    </main>
  );
}
