export default function BlogNavBar({navBarItems, className, ...props}) {
	className = className ? className : "";
	return (
		<div {...props} className={"flex py-4 relative " + className}>
			<div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l`}></div>
			<ul className="w-full">
				{navBarItems &&
					Object.keys(navBarItems).map((key) => {
						return (
							<li className="transition-all duration-150 hover:bg-gradient-to-r pl-3 hover:pl-4 from-stone-300 dark:from-stone-600 to-transparent w-full"  key={key} >
								{navBarItems[key]}	
							</li>
						);
					})}
			</ul>
		</div>
	);
}
