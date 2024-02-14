export default function HighlightedText({ texts, className, ...props }) {
	return (
		<div className={`${className} flex mt-[20px]`} {...props}>
			<div className="bg-slate-700 self-stretch w-2 mr-[20px]"></div>
			<div className="flex flex-col gap-5 pt-2">
				{texts.map((text, index) => {
					return (
						<div key={index} className="text-balance whitespace-pre-line">
							{text}
						</div>
					);
				})}
			</div>
		</div>
	);
}
