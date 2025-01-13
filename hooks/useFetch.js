import { useEffect, useState } from 'react';

export function useFetch( fetchFn, body, defaultValue, cached ) {

    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState( defaultValue );

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn( body );
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        if ( !cached ) {
          fetchData();
        }
      }, [fetchFn, defaultValue]);

    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
    }

}