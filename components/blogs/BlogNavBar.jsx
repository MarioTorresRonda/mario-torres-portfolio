export default function BlogNavBar( { navBarItems, className,  ...props } ) {

    className = className ? className : "";

    return ( 
    <div {...props} className={"flex py-4 relative " + className}>
        <div className={`absolute top-0 bottom-0 w-[100px] color-fondo clip-highlight-l`}></div>
        <ul className="ml-3">
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
            { navBarItems && Object.keys( navBarItems ).map( (key) => {
                const value = navBarItems[key].element;
                return ( <li key={key} > { value } </li> );
            } ) }
        </ul>
    </div> 
    )
}