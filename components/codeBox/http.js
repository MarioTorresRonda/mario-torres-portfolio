export async function fetchCodeBoxFile( file ) {
    
    
    const response = await fetch('/api/files', {
        method: 'POST',
        body: JSON.stringify( file ),
        headers: {
            'Content-Type' : 'application/json'
        } 
    }  );
    const resData = await response.json();

    if ( !response.ok ) {
        throw new Error('Failed to fetch meals');
    }

    return resData.message;
}
