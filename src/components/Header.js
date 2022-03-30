import React from 'react'
import Navigation from './Navigation'
import Logo from '../Logo/LOGO.png'
function Header() {
  return (
    <div className='p-10 border-4 flex bg-white'>
      <div className='px-5 w-1/3 flex items-center'>
        <h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-700 cursor-default'>Professional Portfolio</h3>
      </div>
      <div className='w-1/3 flex justify-center'>
        <img src={Logo} alt={'Logo'} className="img-responsive w-1/2 px-5"/> 
      </div>
      <div className='w-1/3 flex items-center justify-end'>
        <Navigation/>
      </div>
    </div>
  );
}

export default Header;