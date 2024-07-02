import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(err => { throw err });
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess('');
        } else {
          setSuccess("Login successful!");
          setError('');
          // Save user information to local storage
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/home');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred during login.');
        setSuccess('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          id="bg-video"
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videocdn.cdnpk.net/joy/content/video/free/video0453/large_preview/_927__import.mp4?file=1102461_1080p_document_pen_1920x1080.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="flex items-center justify-center mb-2 h-full mx-auto w-[500px] relative z-10">
          <div className="container bg-white rounded-lg border-4 border-black p-6">
            <h1 className="uppercase text-black text-center font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <div className="mb-4">
              <p className="text-xl">Email</p>
              <input
                type="text"
                className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="text-xl">Password</p>
              <input
                type="password"
                className="w-full rounded-md pl-5 py-2 mt-2 bg-gray-300"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-400 text-black p-4 px-20 py-2" type="submit">
              <Link to="/Home">Login</Link>
              </button>
            </div>
            <p className="text-blue-500 hover:text-blue-700 ml-28 underline font-medium">
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;