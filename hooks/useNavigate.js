import { blogList } from "@/data/blogs";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export function useNavigate( MenuContext ) {

    const router = useRouter();
    const { setMenu } = useContext( MenuContext );

    function navigate( newMenu ) {
        setMenu( {...newMenu} );
        router.push(newMenu.url)
    }



    return { navigate };


}