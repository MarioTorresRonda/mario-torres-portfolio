/* eslint-disable react/jsx-no-undef */

export default function Blog() {

    console.log( 2 < 5 || 4 > 9 ); /*
       multiline
       example
       codebox
    */ console.log( 3 < 5 );

    return (
        <BlogInit>
            <MainImage img={headerImg}>
                <BlogTitle code={["Blog", "title"]}></BlogTitle>
                <BlogSubtitle code={["Blog", "subtitle"]}></BlogSubtitle>
            </MainImage>
            <Chapter1> testText </Chapter1>
            { Chapter2() }
            <div>
                { [1,6,3,2,9,11,14].filter( num => num < 5 ).map( num => <div key={num} className={ num > 10 ? "" : "" }> {num} </div> ) }
            </div>
        </BlogInit>
    );
}