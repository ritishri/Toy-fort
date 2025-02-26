import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-medium text-2xl text-center mt-6'>
        Reset Password
      </h1>
      <p className='text-gray-500 text-center mt-6 mb-4'>
        Enter your email address
      </p>
      <input className='p-3 border border-gray-300 w-1/4' placeholder='Email Address' type="text" required />
      <br />
      <button
          type="submit"
          className="w-1/4 text-white py-2 rounded mt-6"
          style={{ backgroundColor: "black" }}
        >
          Submit
        </button>
    </div>
  )
}

export default ForgotPassword
