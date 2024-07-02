import React, { useState } from 'react';
import axios from 'axios';

const AddDoc = () => {
  const [doctor, setDoctor] = useState({
    image: '',
    description: '',
    name: '',
    experience: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiEndpoint;
      switch (doctor.description.toLowerCase()) {
        case 'dentist':
          apiEndpoint = 'http://localhost:4000/adddentists';
          break;
        case 'cardiologist':
          apiEndpoint = 'http://localhost:4000/addccardiologists';
          break;
        case 'eye':
          apiEndpoint = 'http://localhost:4000/addeyes';
          break;
        case 'general':
          apiEndpoint = 'http://localhost:4000/addgenerals';
          break;
        case 'neurologist':
          apiEndpoint = 'http://localhost:4000/addneurologists';
          break;
        case 'orthopedic':
          apiEndpoint = 'http://localhost:4000/addorthopedics';
          break;
        case 'otologist':
          apiEndpoint = 'http://localhost:4000/addotologists';
          break;
        case 'surgon':
          apiEndpoint = 'http://localhost:4000/addsurgons';
          break;
        default:
          throw new Error('Invalid description');
      }
      await axios.post(apiEndpoint, doctor);
      alert('Doctor added successfully');
      setDoctor({
        image: '',
        description: '',
        name: '',
        experience: '',
        address: ''
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        console.error('Error adding doctor:', error);
      }
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Doctor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL</label>
            <input 
              type="text" 
              id="image" 
              name="image" 
              value={doctor.image} 
              onChange={handleInputChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter image URL" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea 
              id="description" 
              name="description" 
              rows="1" 
              value={doctor.description} 
              onChange={handleInputChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter description" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={doctor.name} 
              onChange={handleInputChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter name" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">Experience (years)</label>
            <input 
              type="number" 
              id="experience" 
              name="experience" 
              value={doctor.experience} 
              onChange={handleInputChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter experience in years" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={doctor.address} 
              onChange={handleInputChange} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Enter address" 
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoc;
