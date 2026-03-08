export default function BlogParagraph( { className, children, getText, ...props } ) {

    className = className ? className : "";

    return(
        <p className={"mb-4 " + className } {...props} > {children} </p>
    )
}