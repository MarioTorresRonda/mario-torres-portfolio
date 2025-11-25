import SVG from "@/components/fragments/SVG";

export default function BlogList( { listClass, elementClass, list, char, contentArray } ) {

    listClass = listClass ? listClass : "";
    elementClass = elementClass ? elementClass : "";
    char = char ? char : "#";
    contentArray = contentArray ? contentArray : [];

    return (
        <ul  className={"ml-2 " + listClass}>
            { list.map( (element, index) => {
            return <li key={element.key} className="flex gap-2 svg-fondo items-center">
                <div className="mb-auto"><SVG char={char} height={24}/></div>
                <div className={elementClass}>
                    {element}
                    { contentArray[index] && contentArray[index] }
                </div>
            </li>  
            } ) }
        </ul>
    )
}