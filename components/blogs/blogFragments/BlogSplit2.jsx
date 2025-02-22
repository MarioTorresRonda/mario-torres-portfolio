export default function BlogSplit2(  {className, children} ) {

    let divs;
    className = className ? className : "";

    const divsClass = `w-[100%] md:w-[49%] ${className && className} max-w-[500px]`;
    if ( !children.length || children.length < 2 ) {
        divs = <div key={children} className={divsClass} > {children} </div>;
    }else{
        divs = children.map( (item, index) => {
            return <div key={index} className={divsClass} > {item} </div>
        } ) 
    }

    return(
        <div className="mb-4">
            <div className="flex flex-col md:flex-row items-center flex-wrap gap-[2%] gap-y-[10px] ">
                { divs }
            </div>
        </div>
    )
}