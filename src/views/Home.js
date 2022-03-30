import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='flex justify-center py-20 z-50'>
        <Link to="/about" className='border-4 rounded border-teal-600 border-opacity-50 w-1/4 mx-5 py-5 px-10 bg-white hover:bg-gray-200'>
          <h1 className='border-b border-gray-400 text-3xl'>
            About Me
          </h1>
          <p>Click here to read about me and my experiences. In this section, you will also be able to view my resume.</p>
        </Link>

        <Link to="/mywork" className='border-4 rounded border-teal-600 border-opacity-50 w-1/4 mx-5 py-5 px-10 bg-white hover:bg-gray-200'>
          <h1 className='border-b border-gray-400 text-3xl'>My Work</h1>
          <p>Click here to view a collection of my photography, graphic design, and video projects.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;