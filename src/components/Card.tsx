
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
        <div>
            {pending && <div>loading.....</div>}
            {
               launches.map((launch, index) => (
                <div key={index + "_launch"} className="m-4 p-6 w-30 h-[400px] bg-black cursor-pointer" onClick={() => navigate(`/cardlaunchdetails/${launch.id}`)}>
                    <div className="text-white">{launch.name}</div>
                    <h1 className="text-5xl text-blue-500">{launch.name}</h1>
                    <h3 className="mt-2 text-lg text-white">{launch.date_utc}</h3>
                    <h2 className='text-lg text-white'>Rocket: {launch.rocket}</h2>
                    <h2 className='text-lg text-white'>Launchpad: {launch.launchpad}</h2>
                    <h2 className='text-lg text-white'>Status: {String(launch.success)}</h2>
                    <div>
                        <img className='m-1 p-10 w-30 h-80 ml-auto block -mt-32' src={launch.links.patch.large} alt={launch.name} />
                    </div>
                </div>
            ))
            
}
        </div >
    )
}

export default Card;



