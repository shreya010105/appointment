import React, { useState } from 'react';
import AddDoc from './AddDoc';
import DoctorList from './DoctorList';

const App = () => {
  const [category, setCategory] = useState('dentists');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Doctor Management</h1>
        <select onChange={handleCategoryChange} className="mb-4 p-2 border rounded w-full">
          <option value="dentists">Dentists</option>
          <option value="cardiologists">Cardiologists</option>
          <option value="eyes">Eyes</option>
          <option value="generals">Generals</option>
          <option value="neurologists">Neurologists</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="otologists">Otologists</option>
          <option value="surgeons">Surgeons</option>
        </select>
        <AddDoc />
        <DoctorList category={category} />
      </div>
    </div>
  );
};

export default App;
