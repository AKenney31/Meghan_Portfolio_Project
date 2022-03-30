import React from 'react'
import { HashLink } from 'react-router-hash-link'

function WorkHeader() {
  return (
    <div className='flex justify-evenly items-center my-5'>
      <HashLink
        smooth to='#Graphics-Design'
      >
        <button className='border rounded p-5 bg-blue-300 hover:bg-blue-500'>
          Graphic Design
        </button>
      </HashLink>
      
      <HashLink
        smooth to='#Photography'
      >
        <button className='border rounded p-5 bg-blue-300 hover:bg-blue-500'>
          Photography
        </button>
      </HashLink>
      
      <HashLink
        smooth to='#Videography'
      >
        <button className='border rounded p-5 bg-blue-300 hover:bg-blue-500'>
          Videography
        </button>
      </HashLink>
      
    </div>
  );
}

export default WorkHeader;