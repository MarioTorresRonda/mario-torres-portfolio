import HighlightedText from "@/components/HighlightedText";
import Message from "@/components/Message";

export default function Hero() {

    return (
        <div className="w-full lg:w-2/3">
            <div className="flex lg:block"> 
                <p className="text-slate-100 text-[7vw] lg:text-[200px] lg:mt-[-50px]"> # </p>
                <p className="text-slate-100 text-[7vw] lg:text-7xl lg:mt-[-50px]"> <Message code={ ["mainPage", "mainTitle"] } /> </p>
            </div>
            <HighlightedText className="text-xs md:text-base"
                texts={[
                    "Mi nombre es Mario y soy un programador full-stack, He desarrollado varias aplicaciones en diferentes entornos y tengo conocimiento en diversos lenguajes",
                    "Me encanta mantenerme actualizado y lo desmuestro aprendiendo siemrpe nuevas formas, tecnologias, y practicas para realizar proyectos de forma profesional",
                ]}
            />
        </div>
    )
}