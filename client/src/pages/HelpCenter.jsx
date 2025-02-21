import React from 'react'

const HelpCenter = () => {
    return (
        <div>
            <p className='text-xs text-gray-500'>
                Home / Help Center
            </p>

            <p className='text-center font-medium text-4xl mb-10 mt-3'>
                How can we help?
            </p>

            <div className='flex justify-center items-center pt-2 w-full mb-20'>
    <div className="relative w-[40rem]">
        <input
            type="text"
            placeholder="Search"
            className='border-1 border-gray-300 rounded-full px-4 py-3 pl-10 w-full mySearch focus:ring-0'
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
    </div>
</div>


            <p className='text-center font-medium text-2xl'>
                Need more help?
            </p>

            <p className='text-center mt-2 text-gray-500'>
                If you didn't find what you were looking for, you can submit a support request here.
            </p>

            <div className='flex justify-center'>
                <button className='mt-8 bg-black text-white py-2 px-6'>Contact Support</button>
            </div>

        </div>
    )
}

export default HelpCenter
