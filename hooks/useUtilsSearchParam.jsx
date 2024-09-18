import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function useUtilsSearchParam(  ) {

    const router = useRouter();
	const pathName = usePathname();
    const searchParams = useSearchParams();

    function addQuery( { queryId, queryValue } ) {

        var searchParamsString = "?";
        var queryIdFound = false;
        searchParams.forEach((value, key) => {
            if ( key == queryId ) {
                queryIdFound = true;
                searchParamsString += `${key}=${queryValue}&`;
            }else{
                searchParamsString += `${key}=${value}&`;
            }
        })

        if ( !queryIdFound ) {
            searchParamsString += `${queryId}=${queryValue}&`;
        }

        searchParamsString = searchParamsString.substring( 0, searchParamsString.length - 1 );

        var completePath = pathName + searchParamsString;
        router.push( completePath, { scroll: false } );
    }

    function removeAllQuery() {
        router.push( pathName, { scroll: false } );
    }

    return { addQuery, removeAllQuery }

}