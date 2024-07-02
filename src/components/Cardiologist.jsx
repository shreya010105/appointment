import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Topdiv from './Topdiv';

export default function Cardiologist() {
  const [cardiologists, setCardiologists] = useState([]);

  useEffect(() => {
    const fetchCardiologists = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallcardiologists');
        setCardiologists(response.data);
      } catch (error) {
        console.error('Error fetching cardiologists:', error);
      }
    };

    fetchCardiologists();
  }, []);

  return (
    <div className="flex flex-row">
      <Topdiv />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold my-4 underline">Cardiologists</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {cardiologists.map((cardiologist) => (
            <div key={cardiologist.id} className="mb-8">
              <div className="border border-blue-700 p-4 rounded-lg w-60 hover:scale-110 transition-transform duration-300 p-4 shadow-lg">
                <img src={cardiologist.image} alt={cardiologist.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <div style={{ height: 'auto' }}>
                  <p className="text-blue-700 border rounded-xl bg-blue-300 mt-4 px-2 py-1">{cardiologist.description}</p>
                  <h2 className="text-xl font-semibold">{cardiologist.name}</h2>
                  <p className="text-blue-700">{cardiologist.experience}</p>
                  <p className="text-black">{cardiologist.address}</p>
                  <button className="mt-4 cursor-pointer rounded-full border border-blue-800 px-3 py-1 ml-14 text-blue-600 hover:bg-blue-300">
                    <Link to={`/cardiologist/${cardiologist.name}`}>Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
