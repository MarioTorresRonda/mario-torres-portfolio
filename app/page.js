import Header from "@/components/Index/Header.jsx";
import Hero from "@/components/Index/Hero";
import ProjectsBlock from "@/components/Index/ProjectsBlock";
import Socials from "@/components/Index/Socials";
import Localization from "@/components/fragments/Localization";
import ProjectsResume from "@/components/Index/ProjectsResume";
import BlogsResume from "@/components/Index/BlogsResume";


export default function Home() {
  return (
    <main>
      <Header className="flex flex-col lg:flex-row h-full">
        <Localization/>
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
