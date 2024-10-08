import HighlightedText from "@/components/fragments/HighlightedText";
import Message from "@/components/fragments/Message";

export default function Hero() {

    return (
        <div className="w-full lg:w-2/3">
            <div className="flex lg:block"> 
                <p className="text-slate-600 dark:text-slate-100 text-[7vw] lg:text-[200px] lg:mt-[-50px]"> # </p>
                <p className="text-slate-600 dark:text-slate-100 text-[7vw] lg:text-7xl lg:mt-[-50px]"> <Message code={ ["mainPage", "mainTitle"] } /> </p>
            </div>
            <HighlightedText className="text-md md:text-base"
                texts={[
                    <Message key={"mainDescription1"} code={ ["mainPage", "mainDescription1"] } />,
                    <Message key={"mainDescription2"} code={ ["mainPage", "mainDescription2"] } />
                ]}
            />
        </div>
    )
}