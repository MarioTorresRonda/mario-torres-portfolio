import { useRouter } from "next/navigation";
import { useContext } from "react";

export function useNavigate( MenuContext ) {

    const router = useRouter();
    const { setMenu } = useContext( MenuContext );

    function navigate( title, url ) {
        console.log( url )
        setMenu(title);
        router.push(url)
    }

    return { navigate };


}