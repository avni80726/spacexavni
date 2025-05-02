import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ILaunch } from './type';

function CardLaunchDetails() {
  const { id } = useParams<{ id: string }>();
  const [launch, setLaunch] = useState<ILaunch | null>(null);
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = async (launchId: string) => {
    try {
      const response = await fetch(`https://api.spacexdata.com/v4/launches/${launchId}`);
      const data = await response.json();
      setLaunch(data);
      setIsPending(false);
    } catch (error) {
      console.error('API error:', error);
    }
  };

  if (pending) return <div>Loading...</div>;

  if (!launch) return <div>No launch data found.</div>;

  return (
    <div className="m-4 p-6 bg-black text-white">
      <h1 className="text-5xl text-blue-500">{launch.name}</h1>
      <h3 className="mt-2 text-lg">{launch.date_utc}</h3>
      <h2>Rocket: {launch.rocket}</h2>
      <h2>Launchpad: {launch.launchpad}</h2>
      <h2>Status: {String(launch.success)}</h2>
      <img
        className="m-1 p-10 w-30 h-80 ml-auto block -mt-32"
        src={launch.links.patch.large}
        alt={launch.name}
      />
    </div>
  );
}

export default CardLaunchDetails;
