import React from 'react'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <div classname='flex flex-col'>
        <Link to='/about' className='border-2 bg-gray-400 p-4 mx-auto w-1/5 flex justify-center my-5 hover:bg-gray-700'>
            <p className='font-bold'>Return</p>
        </Link>
        <div className='w-4/5 mx-auto border-4 border-black border-opacity-75 rounded flex justify-center min-h-screen'>
        <iframe src="https://drive.google.com/file/d/15SPji5nVDQwZhzgITgE846QhUUVE-5hc/preview" 
        className='w-full' title="Resume" allow="autoplay"></iframe>
        </div>
    </div>
  );
}

export default Resume;