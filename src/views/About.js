import React from 'react'
import pic from '../About-pic/about.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='flex justify-center'>
        <div className='w-3/4 flex flex-col my-10 bg-blue-200 bg-opacity-75 border-4 border-black border-opacity-50 justify-center'>
          <div className='w-1/4 self-center p-5'>
            <img src={pic} alt={"Pic"} className="img-responsive border-4 border-teal-500 rounded"/>
          </div>
          <p className='p-5 text-2xl'>
            My name is Meghan Kenney and I am a senior at Elizabethtown College in Elizabethtown, Pennsylvania. 
            I am a Criminal Justice and Communications double major with a minor in Graphic Design and I am from Wilmington, Delaware.
          </p>
          <p className='p-5 text-2xl'>
            When it comes to digital media arts, I have gained most of my knowledge and proficiencies from my college experience. 
            I have at this point completed classes in graphic design, video production, audio production, and photography. 
            I have learned aspects of the Adobe Creative Suite including Photoshop, InDesign, Illustrator, Lightroom, Premiere, and Audition.
          </p>
          <p className='p-5 text-2xl'>
            I have had three internships throughout my college experience, a marketing internship with Hall Communications in Manheim, PA, an events and 
            writing internship with Susquehanna Style Magazine in PA, and a marketing internship with Turkey Hill Dairy in Conestoga, PA. All of my internships 
            have required use and proficiency of both Adobe products and the Microsoft Office Suite.
          </p>
          <Link to='/resume' className='p-3 my-5 border-2 border-black rounded bg-gradient-to-tr from-teal-600 to-blue-700 w-1/3 self-center font-bold text-center
          hover:from-red-600 hover:to-orange-600'>
            RESUME
          </Link>
        </div>
    </div>
  );
}

export default About;