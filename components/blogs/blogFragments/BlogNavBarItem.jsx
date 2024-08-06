const levels = {
    1: "ml-0",
    2: "ml-2",
    3: "ml-4",
    4: "ml-6",
    5: "ml-8",
}

export default function BlogNavBarItem( {children, level} ) {
    return <div className={ "text-stone-400 " + levels[level] }> {children} </div>
}