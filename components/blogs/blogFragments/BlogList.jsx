import SVG from "@/components/fragments/SVG";

export default function BlogList( { list } ) {
    return (
        <ul className="ml-2">
        { list.map(element => 
        <li key={crypto.randomUUID()} className="flex gap-2 svg-fondo items-center">
            <SVG char="#" height={24}/>
            {element} 
        </li> ) }
        </ul>
    )
}