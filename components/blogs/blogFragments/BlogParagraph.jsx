export default function BlogParagraph( { className, children, ...props } ) {

    return(
        <p className={"mb-4 " + className } {...props} > {children} </p>
    )
}