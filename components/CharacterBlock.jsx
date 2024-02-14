export default function CharacterBlock({ className, startCharacter, endCharacter, children }) {
	return (
		<div className="flex gap-2">
			<svg height="200" width="100" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="150" className=" fill-slate-900 text-[200px]"> {startCharacter} </text>
            </svg>
			<div className={className}>
                { children }
            </div>
            <svg className="ml-[-10px]" height="400" width="100" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="150" className=" fill-slate-900 text-[200px]"> {endCharacter} </text>
            </svg>
		</div>
	);
}
