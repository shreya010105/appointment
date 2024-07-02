import { Link } from 'react-router-dom';
import Atopdiv from './Atopdiv';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PatientHis() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getallpatients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const deletePatient = async (patientName) => {
    try {
      console.log(`Deleting patient with name: ${patientName}`);
      const response = await fetch(`http://localhost:4000/deletepatient/${encodeURIComponent(patientName)}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const updatedPatients = patients.filter((patient) => patient.patientName !== patientName);
        setPatients(updatedPatients);
      } else {
        console.error('Failed to delete patient');
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div className="flex flex-row">
      <Atopdiv />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold my-4 underline">Patient History</h1>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {patients.map((patient) => (
            <div key={patient.id} className="mb-8">
              <div className="border border-blue-700 p-4 rounded-lg w-60 hover:scale-110 transition-transform duration-300 p-4 shadow-lg"> 
                <div style={{ height: 'auto' }}>
                  <h2 className="text-xl font-semibold">{patient.patientName}</h2>
                  <p className="text-blue-700">{patient.patientNumber}</p>
                  <p className="text-black">{patient.date}</p>
                  <p className="text-black">{patient.time}</p>
                  <p className="text-black">{patient.note}</p>
                  
                  <button
                    className="mt-2 cursor-pointer rounded-full border justify-center border-red-800 px-3 py-1 text-red-600 hover:bg-red-300"
                    onClick={() => deletePatient(patient.patientName)}
                  >
                    Delete
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
