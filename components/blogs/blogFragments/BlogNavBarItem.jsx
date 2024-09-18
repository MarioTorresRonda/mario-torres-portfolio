import useUtilsSearchParam from "@/hooks/useUtilsSearchParam";

const levels = {
	1: "pl-0",
	2: "pl-2",
	3: "pl-4",
	4: "pl-6",
	5: "pl-8",
};

export default function BlogNavBarItem( {id, children, level} ) {

	const {addQuery} = useUtilsSearchParam();

	function handleOnClick() {
		addQuery( { 
				queryId : "chapter",
				queryValue : id
		} );
	}

	return (
		<button className={"text-stone-400 w-full h-full text-left " + levels[level]} onClick={handleOnClick}>
			{children}
		</button>
	);
}
