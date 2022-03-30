import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <footer className="flex flex-col p-3 border-t-2 border-black border-opacity-50 bottom-0 w-full">
          <div className='flex justify-center'>
            <span className='text-3xl p-3'>
              <a href='https://twitter.com/mkenney824'>
                <FontAwesomeIcon 
                  icon={faTwitterSquare}
                />
              </a>
            </span>
            <span className='text-3xl p-3'>
              <a href='https://www.linkedin.com/in/meghan-kenney-435011152/'>
                <FontAwesomeIcon 
                  icon={faLinkedin}
                />
              </a>
            </span>
          </div>
          <span className='text-center'>
            <p>Email: mkenney824@gmail.com</p>
          </span>
        </footer>
    )
}

export default Footer