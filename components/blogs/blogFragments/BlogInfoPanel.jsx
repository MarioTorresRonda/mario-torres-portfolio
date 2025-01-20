import FAI from "@/components/fragments/FAI";
import BlogParagraph from "./BlogParagraph";
import { faExclamationCircle as icon} from "@fortawesome/free-solid-svg-icons";

export default function BlogInfoPanel( {children} ) {
    return (
        <div className="bg-slate-800 py-2 px-5 rounded-md border-slate-700 border-2 flex flex-col md:flex-row gap-5 items-center mb-4">
            <div className="h-6 w-6 min-h-6 min-w-6"> 
                <FAI icon={icon}></FAI>
            </div>
            <div className="flex flex-col gap-2">
                { Array.isArray( children ) && children.map( (child, index) => {
                    return (<div key={index}> {child} </div>);
                })}
                { !Array.isArray( children ) && <div > {children} </div> }
            </div>
        </div>
    )
}