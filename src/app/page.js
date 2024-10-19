'use client';
import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [light , setlight] = useState('red')

  useEffect(() => {
    const interval = setInterval(() => {
      setlight(prevLight => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        if (prevLight === 'green') return 'red';
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-900 p-6 rounded-lg flex flex-col space-y-4">
        <div className={`w-16 h-16 rounded-full ${light == "red" || light == 'yellow' ? 'bg-red-600' : 'bg-red-300'}`}/>
        <div className={`w-16 h-16 rounded-full ${light == "yellow" ? 'bg-yellow-500' : 'bg-yellow-200'}`}/>
        <div className={`w-16 h-16 rounded-full ${light == "green" ? 'bg-green-600' : 'bg-green-200'}`}/>
      </div>
    </div>
  );
};

export default TrafficLight;

