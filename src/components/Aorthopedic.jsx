import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Atopdiv from './Atopdiv';

const Aorthopedic = () => {
  const [orthopedics, setOrthopedics] = useState([]);
  const [selectedOrthopedic, setSelectedOrthopedic] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrthopedics = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallorthopedics');
        setOrthopedics(response.data);
      } catch (error) {
        console.error('Error fetching orthopedics:', error);
      }
    };

    fetchOrthopedics();
  }, []);

  const deleteOrthopedic = async (name) => {
    try {
      const response = await axios.delete(`http://localhost:4000/deleteorthopedic/${encodeURIComponent(name)}`);
      if (response.status === 200) {
        const updatedOrthopedics = orthopedics.filter((orthopedic) => orthopedic.name !== name);
        setOrthopedics(updatedOrthopedics);
        setMessage('Orthopedic deleted successfully');
      } else {
        throw new Error('Failed to delete orthopedic');
      }
    } catch (error) {
      setError('Error deleting orthopedic');
      console.error('Error deleting orthopedic:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selected = orthopedics.find(orthopedic => orthopedic.name === e.target.value);
    if (selected) {
      setSelectedOrthopedic(selected);
      setName(selected.name);
      setDescription(selected.description);
      setExperience(selected.experience);
      setAddress(selected.address);
      setImage(selected.image);
    }
    setError('');
    setMessage('');
  };

  const handleUpdate = async () => {
    if (!selectedOrthopedic || !name || !description || !experience || !address || !image) {
      setError('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:4000/updateorthopedic/${encodeURIComponent(name)}`, {
        name,
        description,
        experience,
        address,
        image
      });
      setMessage('Orthopedic updated successfully');
      setSelectedOrthopedic(null);
      setName('');
      setDescription('');
      setExperience('');
      setAddress('');
      setImage('');
      const fetchOrthopedics = async () => {
        try {
          const response = await axios.get('http://localhost:4000/getallorthopedics');
          setOrthopedics(response.data);
        } catch (error) {
          console.error('Error fetching orthopedics:', error);
        }
      };
      fetchOrthopedics();
    } catch (error) {
      setMessage('');
      setError('Error updating orthopedic: ' + (error.response?.data || error.message));
      console.error('Error updating orthopedic:', error);
    }
  };

  return (
    <div className="flex flex-row">
      <Atopdiv />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold my-4 underline">Orthopedic</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectOrthopedic">
            Select Orthopedic to Update
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="selectOrthopedic"
            value={selectedOrthopedic ? selectedOrthopedic.name : ''}
            onChange={handleSelectChange}
          >
            <option value="">-- Select Orthopedic --</option>
            {orthopedics.map(orthopedic => (
              <option key={orthopedic.name} value={orthopedic.name}>{orthopedic.name}</option>
            ))}
          </select>
        </div>
        {selectedOrthopedic && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
              Experience
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="experience"
              type="text"
              placeholder="Enter experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className="mb-4 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="button"
                onClick={handleUpdate}
              >
                Update Orthopedic
              </button>
              {/* <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => deleteOrthopedic(selectedOrthopedic.name)}
              >
                Delete Orthopedic
              </button> */}
            </div>
            {message && (
              <div className={`text-white p-2 ${message.includes('Error') ? 'bg-red-500' : 'bg-green-500'} rounded mb-4 text-center`}>
                {message}
              </div>
            )}
          </div>
        )}
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {orthopedics.map((orthopedic) => (
            <div key={orthopedic.name} className="mb-8">
              <div className="border border-blue-700 p-4 rounded-lg w-60 hover:scale-110 transition-transform duration-300 shadow-lg">
                <img src={orthopedic.image} alt={orthopedic.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <div style={{ height: 'auto' }}>
                  <p className="text-blue-700 border rounded-xl bg-blue-300 mt-4 px-2 py-1">{orthopedic.description}</p>
                  <h2 className="text-xl font-semibold">{orthopedic.name}</h2>
                  <p className="text-blue-700">{orthopedic.experience}</p>
                  <p className="text-black">{orthopedic.address}</p>
                  <div className='flex flex-row justify-center'>
                    <button
                      className="mt-2 cursor-pointer rounded-full border border-red-800 px-3 py-1 text-red-600 hover:bg-red-400"
                      onClick={() => deleteOrthopedic(orthopedic.name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aorthopedic;
