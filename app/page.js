import Header from "@/components/Header/Header";

import Hero from "@/components/Hero";
import Socials from "@/components/Socials";

export default function Home() {

	const text = [
		"Cargando Recursos",
		"Cargando la ventana",
		"Cargando contenido",
		"Cargando codigo",
		"Cargando Imagenes",
		"Añadiendo errores al codigo",
		"Añadiento animaciones inutiles",
		"Eliminando Errores",
		"Mirando fotos de gatos",
		"Eliminando contenidos",
		"Repitiendo codigo"
	]
	const randomText = text[Math.floor(Math.random() * text.length)];

  return (
    <main className="bg-stone-800 font-mono">
      <Header className="lg:flex">
        <Hero />
        <Socials />
      </Header>
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-stone-900 z-20 animate-opacityLoad fill-mode-forwards flex justify-center h-[100vh] items-center">
	  	<div className="md:flex items-center">
        	<div className="animate-spin h-10 w-10 md:h-20 md:w-20 bg-slate-200 mx-auto md:mx-0"></div>
			<p className="text-sm md:ml-10 lg:text-base xl:text-xl text-balance mt-3 md:mt-0 "> {randomText}... </p>
	  	</div>
      </div>
    </main>
  );
}
