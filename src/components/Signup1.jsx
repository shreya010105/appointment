import React from 'react';
import { Link } from 'react-router-dom';

const Signup1 = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 bg-cover" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp2655088.jpg')"}}>
      <div className="relative z-10">
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <h1 className="text-sm font-bold text-black">Sign Up</h1>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-20">
                <h1 className="mt-3 font-normal text-blue-600">Email</h1>
                <input
                  type="email"
                  name="email"
                  className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
                {/* Error message for email */}
              </div>
              <div className="flex flex-row gap-20">
                <h1 className="mt-3 font-normal text-blue-600">Password</h1>
                <input
                  type="password"
                  name="password"
                  className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
                {/* Error message for password */}
              </div>
              <div className="flex flex-row gap-20">
                <h1 className="mt-3 font-normal text-blue-600">Confirm Password</h1>
                <input
                  type="password"
                  name="confirmPassword"
                  className="shadow border rounded w-full py-2 px-3 ml-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                />
                {/* Error message for confirm password */}
              </div>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button
                type="submit"
                className='border border-blue-700 bg-blue-500 hover:bg-blue-400 cursor-pointer text-white w-40'
              >
                Sign Up
              </button>
              <Link to="/login">
                <button className="text-blue-500">
                  <span className="underline">Already have an account?  <Link to="/Login1">Login</Link></span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
