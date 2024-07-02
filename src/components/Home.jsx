import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return (
//     <div
//       onClick={() => loginWithRedirect()}
//       className="cursor-pointer text-black font-bold rounded flex items-center"
//     >
//       <span className="ml-2">Log In</span>
//     </div>
//   );
// };

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button>
    
    
//   );
// };

const Home = () => {
  return (
    <div className="relative">
      <video autoPlay muted loop id="bg-video" className="fixed top-0 left-0 min-w-full min-h-full z-0 opacity-50">
        <source src="https://videocdn.cdnpk.net/joy/content/video/free/video0453/large_preview/_927__import.mp4?filename=1102461_1080p_document_pen_1920x1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full z-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="flex flex-row justify-between items-center">
  <div className="flex flex-row gap-6 md:gap-9 items-center">
    <div className="flex flex-row gap-3 items-center">
      <img className="w-10 h-10 sm:w-14 sm:h-14" src="https://www.logolynx.com/images/logolynx/20/2043aa2034232d6b02b3ecd8cad8a287.jpeg" alt="Logo" />
      <h1 className="text-blue-700 font-bold text-xl sm:text-2xl">Logoipsum</h1>
    </div>
    <div className="hidden md:flex flex-row gap-5 font-medium items-center">
      <Link to="/Home" className="cursor-pointer bg-gray-50 py-3 px-4 text-black hover:bg-gray-300">Home</Link>
      <button className="cursor-pointer bg-gray-50 py-3 px-4 text-black hover:bg-gray-300">Explore</button>
      <button className="cursor-pointer bg-gray-50 py-3 px-4 text-black hover:bg-gray-300">Contact Us</button>
    </div>
  </div>
  <div className="flex flex-row gap-5 items-center">
  {/* <LoginButton />
      <LogoutButton /> */}
      <Link to="/Login1" className="cursor-pointer font-medium bg-blue-400 px-4 py-3 text-black hover:bg-blue-500">Admin Login</Link>
    <Link to="/Signup" className="cursor-pointer font-medium bg-blue-400 px-4 py-3 text-black hover:bg-blue-500">Signup</Link>
    <Link to="/Login" className="cursor-pointer font-medium bg-blue-400 px-4 py-3 text-black hover:bg-blue-500">Login</Link>
  </div>
</div>


        <div className="flex flex-col justify-center items-center mt-12 sm:mt-20 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col ml-5 text-center md:text-left">
            <h1 className="text-black font-bold text-lg sm:text-2xl md:text-3xl">Find & Book <span className="text-blue-600">Appointment</span> with</h1>
            <h1 className="text-black font-bold text-lg sm:text-2xl md:text-3xl">your Fav <span className="text-blue-600">Doctors</span></h1>
            <p className="hidden md:block">Thank you very much. Or who is here and who is held,</p>
            <p className="hidden md:block">who are those who are not, let the accusers loose,</p>
            <p className="hidden md:block">less pardon the times? His trouble indeed</p>
            <p className="hidden md:block">which he repels.</p>
          </div>
          <img className="w-72 h-72 md:rounded-3xl" src="https://s-i.huffpost.com/gen/3991424/images/o-DOCTOR-facebook.jpg" />
        </div>

        <button className="cursor-pointer mt-8 md:ml-96 bg-blue-700 py-3 text-white hover:bg-blue-600">Explore Now</button>

        <div className="flex flex-col gap-3 items-center justify-center mt-12 sm:mt-20">
          <h1 className="text-blue-700 text-lg sm:text-3xl font-bold px-4 md:px-64">Search Doctors</h1>
          <p className="px-4 sm:px-40 text-center sm:text-left">Search Your Doctors and Book Appointment in one click</p>
          <form className="searchform cf px-4 sm:px-40 mt-4">
            <input type="text" placeholder="Search..." className="border border-gray-400 w-full sm:w-auto" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-300 px-4 py-2 sm:ml-2">Search</button>
          </form>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-7 items-center justify-center">
           <div className="relative flex flex-col items-center">
    <img className="size-40 mt-14" src="https://media.istockphoto.com/vectors/dental-icon-vector-id869175468?k=6&m=869175468&s=612x612&w=0&h=punHhh4YmZs4hb33Kpd9LUIviyjwOfEP1S0w8rLmToQ="/>
    <button className="absolute bottom-0 cursor-pointer bg-gray-50 bg-opacity-50 py-3 px-5 ml-3 text-black text-xl">
      <Link to="/Dentist">Dentist</Link>
    </button>
  </div>
  
  <div className="relative flex flex-col items-center">
    <img className="size-40 mt-14" src="https://thumbs.dreamstime.com/b/cardiology-icon-simple-illustration-cardiology-icon-any-design-blue-cardiology-icon-blue-123301596.jpg"/>
    <button className="absolute bottom-0 cursor-pointer bg-gray-50 bg-opacity-50 py-3 px-5 ml-3 text-black text-xl">
      <Link to="/Cardiologist">Cardiologist</Link>
    </button>
  </div>
  
  <div className="relative flex flex-col items-center">
    <img className="size-40 mt-14" src="https://thumbs.dreamstime.com/b/joint-bones-vector-logo-design-orthopedic-clinics-diagnostic-centers-joint-bones-vector-logo-design-orthopedic-clinics-266581933.jpg"/>
    <button className="absolute bottom-0 cursor-pointer bg-gray-50 bg-opacity-50 py-3 px-5 ml-3 text-black text-xl">
      <Link to="/Orthopedic">Orthopedic</Link>
    </button>
  </div>
  
  <div className="relative flex flex-col items-center">
    <img className="size-40 mt-14" src="https://charlesstone.com/wp-content/uploads/2013/09/brain.jpg"/>
    <button className="absolute bottom-0 cursor-pointer bg-gray-50 bg-opacity-50 py-3 px-5 ml-3 text-black text-xl">
      <Link to="/Neurologist">Neurologist</Link>
    </button>
  </div>
  
  <div className="relative flex flex-col items-center">
    <img className="size-40 mt-14" src="https://static.vecteezy.com/system/resources/previews/020/138/203/non_2x/otology-icon-design-free-vector.jpg"/>
    <button className="absolute bottom-0 cursor-pointer bg-gray-50 bg-opacity-50 py-3 px-5 ml-3 text-black text-xl">
      <Link to="/Otology">Otology</Link>
    </button>
  </div>
</div>
  <h1 className="text-black font-extrabold mt-4">Popular Doctors</h1>
          <div className="flex flex-row gap-32 mt-3 ">
            <div className="flex flex-col border border-blue-900 ">
              <img className="size-52" src="https://th.bing.com/th/id/OIP.kijEAQdL4-NHFaw8sX09jQHaHa?rs=1&pid=ImgDetMain" />
              <p className="rounded-full text-blue-700 bg-blue-200 ">Dentist</p>
              <h1 className="font-bold text-stone-800">Dr.Riya</h1>
              <h2 className="text-blue-500">12 years</h2>
              <p className="text-gray-700"> 25 anna nagar </p>
              <p className="text-gray-700"> Chennai </p>
              <button className="cursor-pointer  rounded-full border border-blue-800  px-3 mt-2 text-white bg-blue-800 hover:bg-blue-300">Book Now</button>
            </div>
            <div className="flex flex-col border border-blue-900">
 <img className="size-52" src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg"/>
 <p className="rounded-full text-blue-700 bg-blue-200 ">Cardiologist</p>
 <h1 className="font-bold text-stone-800">Dr.John</h1>
 <h2 className="text-blue-500">20 years</h2>
 <p className="text-gray-700">  saibaba colony </p>
  <p className="text-gray-700"> Coimbatore </p>
  <button className=" cursor-pointer  rounded-full border border-blue-800  px-3 mt-2 text-white bg-blue-800 hover:bg-blue-300">Book Now</button>
  </div>
  <div className="flex flex-col border border-blue-900">
 <img className="size-52" src="https://www.humanitas.net/content/uploads/2017/10/doctors.jpg"/>
 <p className="rounded-full text-blue-700 bg-blue-200 ">Orthopedic</p>
 <h1 className="font-bold text-stone-800">Dr.thiya</h1>
 <h2 className="text-blue-500">12 years</h2>
 <p className="text-gray-700"> 5,Nehru Steet </p>
  <p className="text-gray-700"> Chennai </p>
  <button className=" cursor-pointer  rounded-full border border-blue-800 px-3 mt-2 text-white bg-blue-800 hover:bg-blue-300">Book Now</button>
  </div>
  <div className="flex flex-col border border-blue-900">
 <img className="size-52" src="http://getwallpapers.com/wallpaper/full/e/9/6/815845-free-download-doctor-wallpapers-1920x1200.jpg"/>
 <p className="rounded-full text-blue-700 bg-blue-200 ">Neurologist</p>
 <h1 className="font-bold text-stone-800">Dr.Sherin</h1>
 <h2 className="text-blue-500">10 years</h2>
 <p className="text-gray-700"> 22 besan nagar </p>
 <p className="text-gray-700"> Chennai </p>
  <button className=" cursor-pointer  rounded-full border border-blue-800   px-3 mt-2 text-white bg-blue-800 hover:bg-blue-300">Book Now</button>
  </div>
  <div className="flex flex-col border border-blue-900">
 <img className="size-52" src="https://wallpapers.com/images/hd/doctors-pictures-kd3o031sak7jgu3d.jpg"/>
 <p className="rounded-full text-blue-700 bg-blue-200 ">Otology</p>
 <h1 className="font-bold text-stone-800">Dr.Aksai</h1>
 <h2 className="text-blue-500">12 years</h2>
 <p className="text-gray-700"> Avinasi road near bank,Coimbatore </p>
  <button className=" cursor-pointer  rounded-full border border-blue-800  px-3 mt-2 text-white bg-blue-800 hover:bg-blue-300">Book Now</button>
  </div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Home

