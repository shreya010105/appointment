import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NeurologistDetails() {
  const { name } = useParams();
  const [neurologist, setNeurologist] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNeurologist = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/getneurologist/${name}`);
        setNeurologist(response.data);
      } catch (error) {
        console.error('Error fetching neurologist details:', error);
        setError('Error fetching neurologist details');
      }
    };

    fetchNeurologist();
  }, [name]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!neurologist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-row gap-9">
        <div className="flex flex-row gap-3 mt-2">
          <img className="size-10 shadow-md rounded-full" src="https://www.logolynx.com/images/logolynx/20/2043aa2034232d6b02b3ecd8cad8a287.jpeg" />
          <h1 className="text-blue-700 font-bold text-xl">Logoipsum</h1>
        </div>
        <div className="flex flex-row gap-5 font-medium">
          <button className="cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Home</button>
          <button className="cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Explore</button>
          <button className="cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Contact Us</button>
        </div>
      </div>
      <h1 className="text-black font-medium py-7 ml-4">Neurologist</h1>
      <div className='flex flex-row gap-10'>
        <div className="shadow-lg border p-4 rounded-lg">
          <img src={neurologist.image} alt={neurologist.name} className="neurologist-image size-56 rounded-2xl" />
        </div>
        <div className="shadow-lg border p-4 rounded-lg">
          <h2 className='text-black text-2xl font-semibold'>{neurologist.name}</h2>
          <p className='text-blue-500 border w-24 border-gray-400 rounded-full bg-slate-200 mb-2'>{neurologist.description}</p>
          <p className="mb-2">{neurologist.experience}</p>
          <p className="mb-2">{neurologist.address}</p>
          <div className='flex flex-col gap-5'>
            <div className="flex flex-row gap-3 items-center ">
              <img src="https://www.freepnglogos.com/uploads/official-youtube-logo-png-18.png" className="size-7 rounded-full" />
              <img src="https://tse3.mm.bing.net/th?id=OIP.ozDiSGJlUqI6815cRlJiNAHaHa&pid=Api&P=0&h=180" className="size-7 rounded-full" />
              <img src="https://1000logos.net/wp-content/uploads/2017/02/Twitter-Logosu.png" className="size-7 rounded-full" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.Ux2AIO7El8dpiVUvF2DYFgHaHa&pid=Api&P=0&h=180" className="size-7 rounded-full" />
            </div>
            <div>
            <Link to={`/Patreg/${neurologist.name}`}>
                <button className="cursor-pointer rounded-full border border-blue-800 bg-blue-500 px-3 mt-2 text-white hover:bg-blue-600">
                  Appointment Booking
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg border p-4 rounded-lg mt-4">
        <h1 className="text-xl font-extrabold">About Me</h1>
        <p>Looking for comfortable, confident, and convenient care from a cardiologist in Mooresville? You've come to the right place. From the minute you walk into our office, you will notice a difference at Doctors. We at Cardiology Group care about you, your family, and your friends, and we are here to help you achieve your healthiest, brightest heart. We know every person's cardiac needs are unique. That's why we offer a selection of treatment options in a comfortable, convenient atmosphere. We're confident we can provide superior cardiac care that no other cardiologist in Mooresville, NC, can offer.</p>
      </div>
    </div>
  );
}
