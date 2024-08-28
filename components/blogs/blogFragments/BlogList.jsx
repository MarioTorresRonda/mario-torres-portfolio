import SVG from "@/components/fragments/SVG";

export default function BlogList( { list } ) {
    return (
        <ul className="ml-2">
            { list.map(element => 
            <li key={crypto.randomUUID()} className="flex gap-2 svg-fondo items-center">
                <div className="mb-auto"><SVG char="#" height={24}/></div>
                {element} 
            </li> ) 
            }
        </ul>
    )
}