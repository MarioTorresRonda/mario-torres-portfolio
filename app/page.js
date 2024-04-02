import Header from "@/components/Header";

import Hero from "@/components/Hero";
import ProjectsBlock from "@/components/ProjectsBlock";
import Socials from "@/components/Socials";
import Localization from "@/components/localization";

export default function Home() {
  return (
    <main className="">
      <Header className="lg:flex h-full" open>
        <Localization />
        <Hero />
        <div className="flex flex-col md:flex-row lg:flex-col justify-around lg:h-full" >
          <Socials />
          <ProjectsBlock />
        </div>
      </Header>
    </main>
  );
}
