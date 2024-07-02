import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dentist from './components/Dentist';
import Cardiologist from './components/Cardiologist';
import Neurologist from './components/Neurologist';
import Orthopedic from './components/Orthopedic';
import Otologist from './components/Otologist';
import Eye from './components/Eye';
import Surgon from './components/Surgon';
import General from './components/General';
// import Bookden from './components/Bookden';
// import Bookcar from './components/Bookcar';
// import Bookortho from './components/Bookortho';
// import Bookneur from './components/Bookneur';
// import Bookoto from './components/Bookoto';
// import Bookeye from './components/Bookeye';
// import Booksur from './components/Booksur';
// import Bookgene from './components/Bookgene';
import Patreg from './components/Patreg';
import Login from './components/Login';
import Signup from './components/Signup';
import Sechome from './components/Sechome';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Booking from './components/Booking';
import DentistDetails from './components/DentistDetails';
import Login1 from './components/Login1';
import Signup1 from './components/Signup1';
import Adentist from './components/Adentist';
import Acardiologist from './components/Acardiologist';
import Aeye from './components/Aeye';
import Atopdiv from './components/Atopdiv';
import Ageneral from './components/Ageneral';
import Aneurologist from './components/Aneurologist';
import Aorthopedic from './components/Aorthopedic';
import Aotologist from './components/Aotologist';
import Asurgon from './components/Asurgon';
import Patienthis from './components/Patienthis';
import CardiologistDetails from './components/CardiologistDetails';
import OrthopedicDetails from './components/OrthopedicDetails';
import NeurologistDetails from './components/NeurologistDetails';
import OtologistDetails from './components/OtologistDetails';
import EyeDetails from './components/EyeDetails';
import SurgonDetails from './components/SurgonDetails';
import GeneralDetails from './components/GeneralDetails';
import ProtectedRoute from './components/ProtectedRoute'; // Corrected path
import AddDoc from './components/AddDoc';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dentist" element={<Dentist />} />
        <Route path="/Cardiologist" element={<Cardiologist />} />
        <Route path="/Neurologist" element={<Neurologist />} />
        <Route path="/Orthopedic" element={<Orthopedic />} />
        <Route path="/Otology" element={<Otologist />} />
        <Route path="/Eye" element={<Eye />} />
        <Route path="/Surgon" element={<Surgon />} />
        <Route path="/General" element={<General />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
     
     <Route path="/cardiologist/:name" element={<CardiologistDetails/>}> </Route>
     <Route path="/orthopedic/:name" element={<OrthopedicDetails/>}> </Route>
     <Route path="/neurologist/:name" element={<NeurologistDetails/>}> </Route>
     <Route path="/otologist/:name" element={<OtologistDetails/>}> </Route>
     <Route path="/eye/:name" element={<EyeDetails/>}> </Route>
     <Route path="/surgon/:name" element={<SurgonDetails/>}> </Route>
     <Route path="/general/:name" element={<GeneralDetails/>}> </Route>
     <Route path="/Patreg/:name" element={<Patreg/>} />
     <Route path="/Home" element={<Home/>}> </Route>
     <Route path="/Login" element={<Login/>}> </Route>
     <Route path="/Signup" element={<Signup/>}> </Route>
     <Route path="/Sechome" element={<Sechome/>}> </Route>
     <Route path="/Booking" element={<Booking/>}> </Route>
     <Route path="/dentist/:name" element={<DentistDetails/>}> </Route>
     <Route path="/Login1" element={<Login1/>}> </Route>
     <Route path="/Signup1" element={<Signup1/>}> </Route>
     <Route path="/Adentist" element={<Adentist/>}> </Route>
     <Route path="/Acardiologist" element={<Acardiologist/>}> </Route>
     <Route path="/Aeye" element={<Aeye/>}> </Route>
     <Route path="/Atopdiv" element={<Atopdiv/>}> </Route>
     <Route path="/Ageneral" element={<Ageneral/>}> </Route>
     <Route path="/Aneurologist" element={<Aneurologist/>}> </Route>
     <Route path="/Aorthopedic" element={<Aorthopedic/>}> </Route>
     <Route path="/Aotologist" element={<Aotologist/>}> </Route>
     <Route path="/Asurgon" element={<Asurgon/>}> </Route>
     <Route path="/Patienthis" element={<Patienthis/>}> </Route>
     <Route path="/AddDoc" element={<AddDoc/>}> </Route>

     
  
  
     </Routes>
    </Router>
    
    )
    
    };

export default App;