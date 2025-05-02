import React, { useState, useEffect} from 'react'
import { ILaunch } from './type';

const useFetch = (url: string) => {

    const [launches, setLaunches] = useState<ILaunch[]>([]);
        const [pending, setIsPending] = useState(true);
        const[error , setError] = useState(null);
        
    
        useEffect(() => {
            fetchData();
        }, [url]);
    
    
        // API CALLS
        const fetchData = async () => {
            try {
                const response = await fetch(url);
    
                const data = await response.json();
    
                setLaunches(data);
                setIsPending(false);
                setError(null);
    
                console.log('API response:', data);
            } catch (error) {
                console.error('api error:', error);
                
            };
        };
    
    return{launches,pending,error}
    
}

export default useFetch
