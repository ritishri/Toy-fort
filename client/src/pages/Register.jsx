import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-red-600 text-2xl mb-12 text-center'>
        We are asking you to Register as it will help to track the status of the shipping of your order.
      </p>

      <h1 className='text-center text-2xl text-black font-medium mb-4'>
        Register
      </h1>

      <form>
        <input className="mb-3 w-full p-3 border border-gray-300" type="text" placeholder='First Name' required />
        <br />
        <input className="mb-3 w-full p-3 border border-gray-300" type="text" placeholder='Last Name' required />
        <br />
        <input  className="mb-3 w-full p-3 border border-gray-300" type="email" placeholder='Email Address' required />
        <br />
        <input className="mb-3 w-full p-3 border border-gray-300" type="tel" placeholder='Phone Number' required/>
        <br />
        <input className="mb-3 w-full p-3 border border-gray-300" type="password" placeholder='Password' required />
        <br />
        <input className="mb-3 w-full p-3 border border-gray-300" type="password" placeholder='Confirm Password' required />
        <br />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className='ml-2'>I have read and agree to the <u><a href="/terms-conditions" target="_blank">Terms & Conditions</a></u></label>
        <br />
        <button
          type="submit"
          className="w-full text-white py-2 rounded mt-4"
          style={{ backgroundColor: "black" }}
        >
          Register
        </button>
        <br />
        <div className="text-center mt-4">
          <p className="text-gray-500 inline-block mr-1">
            Have an account?
          </p>
          <a href="/register" className="text-black font-medium">
            Login
          </a>
        </div>
      </form>

    </div>
  )
}

export default Register
