import Message from "../fragments/Message";

export default function TechColor( {color} ) {
    return <div className="flex flex-row gap-1 items-center ">
        <div className={`${color.color} h-6 w-6 `}> </div>
        <Message code={["mainPage", "projects", "techs", color.name]} />
    </div>
}