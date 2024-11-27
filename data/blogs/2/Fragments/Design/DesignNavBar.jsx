import BlogParagraph from "@/components/blogs/blogFragments/BlogParagraph";
import ClientImage from "@/components/fragments/ClientImage";
import Message from "@/components/fragments/Message";

import Navbar_Fragment1 from "@/public/Navbar_Fragment1.png"; 

export default function DesignNavBar() {
    return <>
    <BlogParagraph>
        <Message code={["Blog", "chapter 5", "fragment1", "desc"]}></Message>
    </BlogParagraph>
    <ClientImage className="shadow shadow-black mb-2" src={Navbar_Fragment1} alt={[]}>
    </ClientImage>
    <BlogParagraph>
        <Message code={["Blog", "chapter 5", "fragment1", "desc2"]}></Message>
    </BlogParagraph>
    </>
}