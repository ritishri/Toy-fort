import React from 'react'

const Comments = () => {
  return (
    <div className='ml-6'>
        <h2 className='border-b-2 w-2/3 border-gray-400 p-4 text-gray-600'>COMMENTS</h2>

        <br/>
        <div className='flex gap-2'>
            <input className='w-1/3 font-sm' type="text" placeholder='Name' />
            <input className='w-1/3' type="text" placeholder='Email Address' />
        </div>
        <textarea className='w-[67%] p-3 mt-4' type="text" placeholder='Comment'/>

        <button className='text-white bg-black text-center p-4' type='submit'>Submit</button>
    </div>
  )
}

export default Comments