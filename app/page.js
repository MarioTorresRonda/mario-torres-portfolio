import Header from "@/components/Header/Header";

import Hero from "@/components/Hero";
import LoadingBlock from "@/components/LoadingBlock";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="bg-stone-800 font-mono">
      <Header className="lg:flex">
        <Hero />
        <Socials />
      </Header>
      <LoadingBlock/>
    </main>
  );
}
