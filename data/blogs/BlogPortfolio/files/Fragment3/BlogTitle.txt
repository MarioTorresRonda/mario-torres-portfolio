import Message from "@/components/fragments/Message";
import ScrollAnchor from "@/components/fragments/ScrollAnchor";

export default function BlogTitle( { code, id } ) {
    return(
        <ScrollAnchor anchor={id}>
            <p className="text-2xl md:text-5xl mb-6 text-center text-stone-200"> 
                <Message code={code} />
            </p>
        </ScrollAnchor>
    )
}