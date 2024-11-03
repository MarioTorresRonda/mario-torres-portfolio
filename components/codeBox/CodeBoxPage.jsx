import { useEffect, useRef } from "react";
import CodeBoxRow from "./CodeBoxRow";

export default function CodeBoxPage( { pageName, pageText, minimized, show, navBar } ) {

	const line = useRef(0);
	line.current = 0;

    useEffect( () => {
        navBar.current.addPageToList( pageName );
    },[ pageName ] )

    return <div className={`whitespace-pre-wrap flex flex-col overflow-auto ${show ? "block" : "hidden"} border-l-[1px] border-b-[1px] border-slate-700`}>
        {minimized.value && minimized.from != 0 && <CodeBoxRow key="-" rowText={"..."} />}
        {
            pageText.map((row) => {
            line.current++;
            if (!minimized.value || (line.current >= minimized.from && line.current <= minimized.to)) {
                return <CodeBoxRow key={line.current} rowNum={line.current} rowText={row} />;
            }
        })}
        {minimized.value && minimized.to != pageText.length && <CodeBoxRow key="+" rowText={"..."} />}
    </div>
}