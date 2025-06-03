import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // Important for sending/receiving cookies
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // ✅ Token is stored in HTTP-only cookie, so no need to save in localStorage
      // Optionally: store user info in state or context if needed

      navigate('/admin'); // redirect to admin dashboard

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center' style={{ backgroundColor: '#d2d6de' }}>
      <h1 className='text-4xl font-bold text-center mb-6' style={{ color: '#444444' }}>
        Toyfort <span className='font-normal'>Panel</span>
      </h1>

      <div className='w-full max-w-sm p-6 bg-white shadow-md'>
        <div>
          <h2 className='text-lg font-semibold text-center mb-4' style={{ color: '#444444' }}>
            Login
          </h2>

          {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

          <div className='relative mb-4'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
            <FaEnvelope className='absolute top-2.5 right-3 text-gray-400' />
          </div>

          <div className='relative mb-6'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500'
            />
            <FaLock className='absolute top-2.5 right-3 text-gray-400' />
          </div>

          <div className='flex justify-end'>
            <button
              className='text-white hover:bg-blue-700 transition'
              style={{ backgroundColor: '#188ae2', padding: '5px 30px' }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <p className='mt-6 text-center hover:text-blue-700 transition' style={{ color: '#188ae2' }}>
        Go to the Homepage
      </p>
    </div>
  );
};

export default Login;
