/* eslint-disable react/jsx-no-undef */

export default function Blog() {
    return (
        <BlogInit>
            <MainImage img={headerImg}>
                <BlogTitle code={["Blog", "title"]}></BlogTitle>
                <BlogSubtitle code={["Blog", "subtitle"]}></BlogSubtitle>
            </MainImage>
            <Chapter1> </Chapter1>
            { Chapter2() }
        </BlogInit>
    );
}