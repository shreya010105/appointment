import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorList = ({ category }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/${category}`);
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, [category]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/delete${category}/${id}`);
      setDoctors(doctors.filter(doctor => doctor._id !== id));
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">List of {category}</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id} className="mb-4">
            <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full" />
            <p>Name: {doctor.name}</p>
            <p>Description: {doctor.description}</p>
            <p>Experience: {doctor.experience} years</p>
            <p>Address: {doctor.address}</p>
            <button
              onClick={() => handleDelete(doctor._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
