import { Link } from 'react-router-dom';
import Topdiv from './Topdiv';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dentist() {
  const [Dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getalldentists');
        setDentists(response.data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);
  const appointmentbooking = async (name) => {
    try {
      const selectedBoooking = bookings.find((booking) => booking.name === name);
      if (selectedBoooking) {
        const response = await fetch('http://localhost:4000/addbooking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedBoooking),
        });
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        const data = await response.json();
        console.log('doctor added to booking:', data);
        setBookingDoctors([...bookingDoctors, selectedBoooking]);
      }
    } catch (error) {
      console.error('Error adding item to booking:', error);
    }
  };

  return (
    <div className="flex flex-row">
      <Topdiv />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold my-4 underline">Dentist</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {Dentists.map((dentist) => (
            <div key={dentist.id} className="mb-8">
              <div className="border border-blue-700 p-4 rounded-lg w-60 hover:scale-110 transition-transform duration-300 p-4 shadow-lg"> 
                <img src={dentist.image} alt={dentist.name} className="w-full h-40 object-cover rounded-md mb-4" /> 
                <div style={{ height: 'auto' }}>
                  <p className="text-blue-700 border rounded-xl bg-blue-300 mt-4 px-2 py-1">{dentist.description}</p>
                  <h2 className="text-xl font-semibold">{dentist.name}</h2>
                  <p className="text-blue-700">{dentist.experience}</p>
                  <p className="text-black">{dentist.address}</p>
                  <button 
                  onClick={() => appointmentbooking(dentist.name)}
                  className="mt-4 cursor-pointer rounded-full border border-blue-800 px-3 py-1 ml-14 text-blue-600 hover:bg-blue-300">
                    <Link to={`/dentist/${dentist.name}`}>Book Now</Link> {/* Link using the dentist ID */}
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