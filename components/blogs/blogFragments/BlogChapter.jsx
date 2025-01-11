import Message from "@/components/fragments/Message";
import ScrollAnchor from "@/components/fragments/ScrollAnchor";

const textLevel = {
    0: "text-2xl md:text-3xl font-semibold text-slate-800 dark:text-stone-300",
    1: "text-xl md:text-2xl font-semibold text-slate-700 dark:text-stone-400",
    2: "text-xl md:text-xl font-semibold text-slate-600 dark:text-stone-400",
    3: "text-lg md:text-lg font-semibold text-slate-600 dark:text-stone-400"
}

export default function BlogChapter( { level, code, children, id} ) {
    
    const maxLevel = level > 4 ? 4 : level;

    return(
        <ScrollAnchor anchor={id}>
            <p className={` ${ textLevel[maxLevel] } mb-4`}> <Message code={code} /> </p>
            <div className="ml-[1vw]" >
                {children}
            </div>
        </ScrollAnchor>
    )

}