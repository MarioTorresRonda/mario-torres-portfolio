import Header from "@/components/Index/Header.jsx";
import Hero from "@/components/Index/Hero";
import ProjectsBlock from "@/components/Index/ProjectsBlock";
import Socials from "@/components/Index/Socials";
import Localization from "@/components/fragments/Localization";
import ProjectsResume from "@/components/Index/ProjectsResume";
import BlogsResume from "@/components/Index/BlogsResume";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header className="flex flex-col lg:flex-row h-full">
        <Localization absolute={true}/>
        <Hero />
        <div className="flex flex-col md:flex-row lg:flex-col md:justify-around lg:h-full items-center flex-1" >
          <Socials />
          <ProjectsBlock />
        </div>
      </Header>
      <ProjectsResume/>
      <BlogsResume />
    </main>
  );
}
