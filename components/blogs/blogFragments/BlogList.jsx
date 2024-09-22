import SVG from "@/components/fragments/SVG";

export default function BlogList( { className, list } ) {

    className = className ? className : "";

    return (
        <ul  className={"ml-2 " + className}>
            { list.map(element => 
            <li key={crypto.randomUUID()} className="flex gap-2 svg-fondo items-center">
                <div className="mb-auto"><SVG char="#" height={24}/></div>
                {element} 
            </li> ) 
            }
        </ul>
    )
}