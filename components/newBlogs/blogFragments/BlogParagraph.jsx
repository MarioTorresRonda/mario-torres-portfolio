export default function BlogParagraph( { className, children, ...props } ) {

    className = className ? className : "";

    return(
        <p className={"mb-4 " + className } {...props} > {children} </p>
    )
}