export default function BlogNavBar( { navBarItems } ) {

    return ( 
    <div className="flex mt-2 relative">
        <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l`}></div>
        <ul className="ml-3">
            { navBarItems && Object.values( navBarItems ).map( (item) => {
                return ( item );
            } ) }
        </ul>
    </div> 
    )
}