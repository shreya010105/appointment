import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Patreg() {
  const { doctorId } = useParams();
  const [appointment, setAppointment] = useState({
    patientName: '',
    phoneNumber: '',
    date: '',
    time: '',
    note: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (appointment.date) {
      fetchAvailableTimes(appointment.date, doctorId);
    }
  }, [appointment.date, doctorId]);

  const fetchAvailableTimes = async (date, doctor) => {
    try {
      const response = await axios.get(`http://localhost:4000/availableTimes?date=${date}&doctor=${doctor}`);
      setAvailableTimes(response.data);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleBooking = async () => {
    try {
      await axios.post('http://localhost:4000/addpatients', { ...appointment, doctor: doctorId });
      alert('Appointment booked successfully');
      setAppointment({
        patientName: '',
        phoneNumber: '',
        date: '',
        time: '',
        note: '',
      });
      setAvailableTimes((prevTimes) => prevTimes.filter((time) => time !== appointment.time));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        console.error('Error booking appointment:', error);
      }
    }
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '3:00 PM',
    '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  ];

  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <video autoPlay muted loop id="bg-video" className="fixed top-0 left-0 min-w-full min-h-full z-0 opacity-50">
          <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0484/large_preview/_import_60e933af21df59.82633554.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <h1 className="text-sm font-bold text-black">Book Appointment</h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-20">
                  <h1 className="mt-3 font-normal text-blue-600">PatientName</h1>
                  <input
                    type="text"
                    name="patientName"
                    value={appointment.patientName}
                    onChange={handleChange}
                    className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-row gap-20">
                  <h1 className="mt-3 font-normal text-blue-600">Phone Number</h1>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={appointment.phoneNumber}
                    onChange={handleChange}
                    className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex flex-row gap-32">
                  <h1 className="mt-3 font-normal text-blue-600">Date</h1>
                  <input
                    type="date"
                    name="date"
                    value={appointment.date}
                    onChange={handleChange}
                    className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex flex-row gap-32">
                  <h1 className="mt-3 font-normal text-blue-600">Time</h1>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {appointment.time || 'Select Time'}
                    </button>
                    {showDropdown && (
                      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="none">
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                              onClick={() => {
                                setAppointment({ ...appointment, time });
                                setShowDropdown(false);
                              }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-36">
                  <h1 className="mt-3 font-normal text-blue-600">Note</h1>
                  <textarea
                    name="note"
                    value={appointment.note}
                    onChange={handleChange}
                    className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Additional Notes"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={handleBooking}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Confirm
                </button>
                <Link
                  to="/Booking"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-center"
                >
                  Go to My Bookings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
