import React from 'react'
import { HashLink } from 'react-router-hash-link'
import WorkHeader from '../components/WorkHeader'
import { Arch, Lamp, Nah, St3, Artistic, Urban, Logo, Vinyl, Rs1, Proj4 } from '../components/ProjectTumbnails'
import { Inside, JS, Brew, Traveling } from '../components/Videos'
function MyWork() {
  return (
    <div>
      <header>
        <WorkHeader />
      </header>
      <section id='Graphics-Design'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold'>Graphic Design</h1>
        </div>
        <div className='flex flex-wrap justify-evenly w-3/4 border-4 rounded border-blue-800 border-opacity-50 bg-gray-400 p-5 my-5 mx-auto'> 
          <Urban />
          <Logo />
          <Vinyl />
          <Rs1 />
          <Proj4 />   
        </div>
      </section>
      <section id='Photography'>
        <div className='flex flex-col items-center'>
        <div>
            <HashLink smooth to='#top' className='mx-3 text-gray-800 border-b border-black border-opacity-50 hover:text-gray-300 hover:border-gray-300'>Graphic Design</HashLink>
            <HashLink smooth to='#Videography' className='mx-3 text-gray-800 border-b border-black border-opacity-50 hover:text-gray-300 hover:border-gray-300'>Videography</HashLink>
          </div>
          <h1 className='text-4xl font-bold'>Photography</h1>
        </div>
        <div className='flex flex-wrap justify-evenly w-3/4 border-4 rounded border-blue-800 border-opacity-50 bg-gray-400 p-5 my-5 mx-auto'>
          <Arch/>
          <Lamp/>
          <Nah/>  
          <St3/>
          <Artistic />       
        </div>
      </section>
      <section id='Videography'>
        <div className='flex flex-col items-center'>
          <div>
            <HashLink smooth to='#top' className='mx-3 text-gray-800 border-b border-black border-opacity-50 hover:text-gray-300 hover:border-gray-300'>Graphic Design</HashLink>
            <HashLink smooth to='#Photography' className='mx-3 text-gray-800 border-b border-black border-opacity-50 hover:text-gray-300 hover:border-gray-300'>Photography</HashLink>
          </div>
          <h1 className='text-4xl font-bold'>Videography</h1>
        </div>
        <div className='flex flex-wrap justify-evenly w-3/4 border-4 rounded border-blue-800 border-opacity-50 bg-gray-400 p-5 my-5 mx-auto'>
          <JS />
          <Traveling />
          <Brew />
          <Inside />     
        </div>
      </section>
    </div>
  );
}

export default MyWork;