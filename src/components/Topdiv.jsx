import React from 'react'
import { Link } from 'react-router-dom';


const Topdiv = () => {
  return (
    <div>
             <div className="flex flex-row gap-9 ">
<div className="flex flex-row gap-3 mt-2">
<img className="size-10" src="https://www.logolynx.com/images/logolynx/20/2043aa2034232d6b02b3ecd8cad8a287.jpeg"/>
<h1 className="text-blue-700 font-bold text-xl">Logoipsum</h1></div>
<div className="flex flex-row gap-5 font-medium"> 
<button className=" cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300"><Link to="/Home">Home</Link></button>
<button className=" cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Explore</button>
<button className=" cursor-pointer bg-gray-50 py-3 text-black hover:bg-gray-300">Contact Us</button>
</div>
 </div>
 <div className="flex flex-row gap-3">
 <div className="flex flex-col  gap-3">
 <div className="flex flex-col ">
 <form className="searchform cf">
 <input type="text"  placeholder=" Type a command" className="border border-gray-400 my-3"/>
  <button type="submit" className="bg-blue-500 hover:bg-blue-300 ">Enter</button></form>
  </div>
  <div className="flex flex-row">
  <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://media.istockphoto.com/vectors/dental-icon-vector-id869175468?k=6&m=869175468&s=612x612&w=0&h=punHhh4YmZs4hb33Kpd9LUIviyjwOfEP1S0w8rLmToQ=" className="size-16 mt-3"/></button>
<label> <button className=" cursor-pointer  mt-8  bg-gray-50 text-black hover:bg-blue-300  "> <Link to="/Dentist">Dentist</Link></button></label></div>
<div className="flex flex-row">
   <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://thumbs.dreamstime.com/b/cardiology-icon-simple-illustration-cardiology-icon-any-design-blue-cardiology-icon-blue-123301596.jpghttps://thumbs.dreamstime.com/b/cardiology-icon-simple-illustration-cardiology-icon-any-design-blue-cardiology-icon-blue-123301596.jpg" className="size-10  ml-3"/></button>
 <label> <button className=" cursor-pointer   bg-gray-50 text-black hover:bg-blue-300 mt-2 ml-3 "> <Link to="/Cardiologist">Cardiologist</Link></button></label></div>
 <div className="flex flex-row">
 <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://thumbs.dreamstime.com/b/joint-bones-vector-logo-design-orthopedic-clinics-diagnostic-centers-joint-bones-vector-logo-design-orthopedic-clinics-266581933.jpg" className="size-11 ml-3"/></button>
 <label> <button className=" cursor-pointer   bg-gray-50 text-black hover:bg-blue-300 mt-3 ml-2"> <Link to="/Orthopedic">Orthopedic</Link></button></label></div>
 <div className="flex flex-row">
 <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://charlesstone.com/wp-content/uploads/2013/09/brain.jpg" className="size-11 ml-3"/></button>
 <label> <button className=" cursor-pointer   bg-gray-50 text-black hover:bg-blue-300 ml-2 mt-2"><Link to="/Neurologist">Neurologist</Link></button></label></div>
 <div className="flex flex-row">
      <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://static.vecteezy.com/system/resources/previews/020/138/203/non_2x/otology-icon-design-free-vector.jpg" className="size-10  ml-4"/></button>
 <label> <button className=" cursor-pointer ml-2 mt-2 bg-gray-50 text-black hover:bg-blue-300 "> <Link to="/Otology">Otology</Link></button></label></div>
 <div className="flex flex-row">
      <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://www.logolynx.com/images/logolynx/12/12927808bfc3b4b389421901da0bf69f.jpeg" className="size-12  ml-4"/></button>
 <label> <button className=" cursor-pointer  mt-2.5 bg-gray-50 text-black hover:bg-blue-300 "> <Link to="/Eye">Eye Specialist</Link></button></label></div>
 <div className="flex flex-row">
      <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://static.vecteezy.com/system/resources/previews/004/376/311/original/icon-hair-scissor-blue-eyes-style-free-vector.jpg" className="size-12  ml-4"/></button>
 <label> <button className=" cursor-pointer  mt-2.5 bg-gray-50 text-black hover:bg-blue-300 "> <Link to="/Surgon"> Surgon</Link></button></label></div> 
 <div className="flex flex-row">
 <button className=" cursor-pointer bg-gray-50 text-black "><img src="https://static.vecteezy.com/system/resources/previews/005/015/246/non_2x/doctor-icon-in-trendy-long-shadow-style-isolated-on-soft-blue-background-free-vector.jpg" className="size-12  ml-4"/></button>
<label> <button className=" cursor-pointer  mt-2.5 bg-gray-50 text-black hover:bg-blue-300 "> <Link to="/General"> General Doctor</Link></button></label></div>
</div>
    </div>
    </div>
  )
}

export default Topdiv
