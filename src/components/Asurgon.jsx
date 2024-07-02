import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Atopdiv from './Atopdiv';

const Asurgon = () => {
  const [surgons, setSurgons] = useState([]);
  const [selectedSurgon, setSelectedSurgon] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSurgons = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallsurgons');
        setSurgons(response.data);
      } catch (error) {
        console.error('Error fetching surgons:', error);
      }
    };

    fetchSurgons();
  }, []);

  const deleteSurgon = async (name) => {
    try {
      const response = await axios.delete(`http://localhost:4000/deletesurgon/${encodeURIComponent(name)}`);
      if (response.status === 200) {
        const updatedSurgons = surgons.filter((surgon) => surgon.name !== name);
        setSurgons(updatedSurgons);
        setMessage('Surgon deleted successfully');
      } else {
        throw new Error('Failed to delete surgon');
      }
    } catch (error) {
      setError('Error deleting surgon');
      console.error('Error deleting surgon:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selected = surgons.find(surgon => surgon.name === e.target.value);
    if (selected) {
      setSelectedSurgon(selected);
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
    if (!selectedSurgon || !name || !description || !experience || !address || !image) {
      setError('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:4000/updatesurgon/${encodeURIComponent(name)}`, {
        name,
        description,
        experience,
        address,
        image
      });
      setMessage('Surgon updated successfully');
      setSelectedSurgon(null);
      setName('');
      setDescription('');
      setExperience('');
      setAddress('');
      setImage('');
      const fetchSurgons = async () => {
        try {
          const response = await axios.get('http://localhost:4000/getallsurgons');
          setSurgons(response.data);
        } catch (error) {
          console.error('Error fetching surgons:', error);
        }
      };
      fetchSurgons();
    } catch (error) {
      setMessage('');
      setError('Error updating surgon: ' + (error.response?.data || error.message));
      console.error('Error updating surgon:', error);
    }
  };

  return (
    <div className="flex flex-row">
      <Atopdiv />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold my-4 underline">Surgon</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectSurgon">
            Select Surgon to Update
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="selectSurgon"
            value={selectedSurgon ? selectedSurgon.name : ''}
            onChange={handleSelectChange}
          >
            <option value="">-- Select Surgon --</option>
            {surgons.map(surgon => (
              <option key={surgon.name} value={surgon.name}>{surgon.name}</option>
            ))}
          </select>
        </div>
        {selectedSurgon && (
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
                Update Surgon
              </button>
              {/* <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => deleteSurgon(selectedSurgon.name)}
              >
                Delete Surgon
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
          {surgons.map((surgon) => (
            <div key={surgon.name} className="mb-8">
              <div className="border border-blue-700 p-4 rounded-lg w-60 hover:scale-110 transition-transform duration-300 shadow-lg">
                <img src={surgon.image} alt={surgon.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <div style={{ height: 'auto' }}>
                  <p className="text-blue-700 border rounded-xl bg-blue-300 mt-4 px-2 py-1">{surgon.description}</p>
                  <h2 className="text-xl font-semibold">{surgon.name}</h2>
                  <p className="text-blue-700">{surgon.experience}</p>
                  <p className="text-black">{surgon.address}</p>
                  <div className='flex flex-row justify-center'>
                    <button
                      className="mt-2 cursor-pointer rounded-full border border-red-800 px-3 py-1 text-red-600 hover:bg-red-400"
                      onClick={() => deleteSurgon(surgon.name)}
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

export default Asurgon;
