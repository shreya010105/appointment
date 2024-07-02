import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const { name } = useParams(); // Ensure this is correctly getting the parameter
  const [activeTab, setActiveTab] = useState('upcoming');
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Doctor Name from URL Params:', name);
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/getbookings/description/${encodeURIComponent(name)}`);
        console.log('Bookings Response:', response.data);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
        setError('Error fetching booking details');
      }
    };

    if (name) {
      fetchBookings();
    }
  }, [name]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex flex-row gap-9">
        <div className="flex flex-row gap-3 mt-2">
          <img className="size-10" src="https://www.logolynx.com/images/logolynx/20/2043aa2034232d6b02b3ecd8cad8a287.jpeg" alt="Logo" />
          <h1 className="text-blue-700 font-bold text-xl">Logoipsum</h1>
        </div>
        <div className="flex flex-row gap-5 font-medium">
          <button className="cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300"><Link to="/Home">Home</Link></button>
          <button className="cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Explore</button>
          <button className="cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Contact Us</button>
        </div>
      </div>
      <h1 className="font-bold text-2xl mt-10">My Bookings</h1>
      <div className="flex flex-row gap-5 mt-5">
        <button
          className={`cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300 ${activeTab === 'upcoming' && 'bg-gray-300'}`}
          onClick={() => handleTabChange('upcoming')}
        >
          Upcoming Bookings
        </button>
        <button
          className={`cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300 ${activeTab === 'expired' && 'bg-gray-300'}`}
          onClick={() => handleTabChange('expired')}
        >
          Expired Bookings
        </button>
      </div>
      {activeTab === 'upcoming' && (
        <div>
          <h2>Upcoming Bookings</h2>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4 mt-4">
                <img src={booking.doctorImage} alt={booking.doctorName} className="w-full h-48 object-cover mb-4" />
                <p className="font-bold text-lg mb-2">{booking.doctorName}</p>
                <p className="font-bold text-lg mb-2">{booking.doctorDescription}</p>
                <p className="text-sm text-gray-600 mb-2">{booking.patientName}</p>
                <p className="text-gray-800 mb-2">{booking.date}</p>
                <p className="text-gray-800 mb-2">{booking.time}</p>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
      {activeTab === 'expired' && (
        <div>
          <h2>Expired Bookings</h2>
          {/* Render expired bookings here */}
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Booking;
