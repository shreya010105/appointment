import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Atopdiv from './Atopdiv';

const AEye = () => {
  const [Eyes, setEyes] = useState([]);
  const [selectedEye, setSelectedEye] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEyes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getalleyes');
        setEyes(response.data);
      } catch (error) {
        console.error('Error fetching eyes:', error);
      }
    };

    fetchEyes();
  }, []);

  const deleteEye = async (name) => {
    try {
      const response = await axios.delete(`http://localhost:4000/deleteeye/${encodeURIComponent(name)}`);
      if (response.status === 200) {
        const updatedEyes = Eyes.filter((eye) => eye.name !== name);
        setEyes(updatedEyes);
        setMessage('Eye specialist deleted successfully');
      } else {
        throw new Error('Failed to delete eye specialist');
      }
    } catch (error) {
      setError('Error deleting eye specialist');
      console.error('Error deleting eye specialist:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selected = Eyes.find(eye => eye.name === e.target.value);
    if (selected) {
      setSelectedEye(selected);
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
    if (!selectedEye || !name || !description || !experience || !address || !image) {
      setError('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:4000/updateeye/${encodeURIComponent(name)}`, {
        name,
        description,
        experience,
        address,
        image
      });
      setMessage('Eye specialist updated successfully');
      setSelectedEye(null);
      setName('');
      setDescription('');
      setExperience('');
      setAddress('');
      setImage('');
      const fetchEyes = async () => {
        try {
          const response = await axios.get('http://localhost:4000/getalleyes');
          setEyes(response.data);
        } catch (error) {
          console.error('Error fetching eyes:', error);
        }
      };
      fetchEyes();
    } catch (error) {
      setMessage('');
      setError('Error updating eye specialist: ' + (error.response?.data || error.message));
      console.error('Error updating eye specialist:', error);
    }
  };

  return (
    <div className="flex flex-row">
      <Atopdiv />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold my-4 underline">Eye Specialist</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectEye">
            Select Eye Specialist to Update
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="selectEye"
            value={selectedEye ? selectedEye.name : ''}
            onChange={handleSelectChange}
          >
            <option value="">-- Select Eye Specialist --</option>
            {Eyes.map(eye => (
              <option key={eye.name} value={eye.name}>{eye.name}</option>
            ))}
          </select>
        </div>
        {selectedEye && (
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
                Update Eye Specialist
              </button>
              {/* <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => deleteEye(selectedEye.name)}
              >
                Delete Eye Specialist
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
          {Eyes.map((eye) => (
            <div key={eye.name} className="mb-8">
              <div className="border border-blue-700 p-4 rounded-lg w-60 hover:scale-110 transition-transform duration-300 shadow-lg">
                <img src={eye.image} alt={eye.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <div style={{ height: 'auto' }}>
                  <p className="text-blue-700 border rounded-xl bg-blue-300 mt-4 px-2 py-1">{eye.description}</p>
                  <h2 className="text-xl font-semibold">{eye.name}</h2>
                  <p className="text-blue-700">{eye.experience}</p>
                  <p className="text-black">{eye.address}</p>
                  <div className='flex flex-row justify-center'>
                    <button
                      className="mt-2 cursor-pointer rounded-full border border-red-800 px-3 py-1 text-red-600 hover:bg-red-400"
                      onClick={() => deleteEye(eye.name)}
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

export default AEye;
