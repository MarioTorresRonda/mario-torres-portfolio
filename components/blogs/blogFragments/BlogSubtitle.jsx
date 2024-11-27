import Message from "@/components/fragments/Message";

export default function BlogSubtitle( { code } ) {

    return(
        <p className="text-md md:text-xl ml-2 mb-4 text-stone-300 dark:text-stone-400"> <Message code={code} /> </p>
    )
}