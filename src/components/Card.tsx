
import React, { useEffect, useState } from 'react'
import { ILaunch } from './type';
import { useNavigate } from 'react-router-dom';

function Card() {

    const [launches, setLaunches] = useState<ILaunch[]>([]);
    const [pending, setIsPending] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);


    // API CALLS
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v4/launches');

            const data = await response.json();

            setLaunches(data);
            setIsPending(false);

            console.log('API response:', data);
        } catch (error) {
            console.error('api error:', error);
        };
    };

    
    return (
        <div className="flex flex-wrap gap-4 justify-center bg-black min-h-screen p-8">
            {pending && <div>loading.....</div>}
            {
               launches.map((launch, index) => (
                <div
            key={index + "_launch"}
            className="m-4 p-6 w-120 h-[450px] bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => navigate(`/cardlaunchdetails/${launch.id}`)}
        >
            <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-400">{launch.name}</h1>
                <h3 className="mt-2 text-lg text-gray-300">{launch.date_utc}</h3>
                <h2 className='text-lg text-gray-200'>Rocket: <span className="font-semibold">{launch.rocket}</span></h2>
                <h2 className='text-lg text-gray-200'>Launchpad: <span className="font-semibold">{launch.launchpad}</span></h2>
                <h2 className='text-lg text-gray-200'>Status: <span className="font-semibold">{String(launch.success)}</span></h2>
            </div>
            <div className="flex justify-center mt-4">
                <img
                    className='w-32 h-32 object-contain'
                    src={launch.links.patch.large}
                    alt={launch.name}
                />
            </div>
        </div>
            ))
            
}
        </div >
    )
}

export default Card;



