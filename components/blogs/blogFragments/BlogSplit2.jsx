export default function BlogSplit2( {children} ) {

    let divs;

    if ( !children.length || children.length < 2 ) {
        divs = <div key={children} className="w-[48%]"> {children} </div>;
    }else{
        divs = children.map( (item, index) => {
            return <div key={index} className="w-[48%]"> {item} </div>
        } ) 
    }

    return(
        <div className="mb-4">
            <div className="flex flex-wrap gap-[10px] ver">
                { divs }
            </div>
        </div>
    )
}