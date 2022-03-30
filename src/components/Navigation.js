import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import { Link } from 'react-router-dom'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return(
        <nav>
            <span className='text-4xl mr-10 cursor-pointer'>
            <FontAwesomeIcon 
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)} 
            />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div key={key} style={props} className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
                    onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div key={key} style={props} className='fixed bg-gradient-to-bl from-blue-300 to-purple-500 top-0 left-0 w-1/4 h-full p-5 z-50 shadow'>
                        <div className='p-5 text-4xl font-bold border-b-2 border-double border-gray-200'>Menu</div>
                        <ul className='mt-10'>
                            <li className='border-b border-black-t-50 w-1/3'>
                                <Link to="/" className='m-5 py-5 text-2xl text-gray-800 block hover:text-white'
                                onClick={() => setShowMenu(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='border-b border-black-t-50 w-1/3'>
                                <Link to="/about" className='m-5 py-5 text-2xl text-gray-800 block hover:text-white'
                                onClick={() => setShowMenu(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className='border-b border-black-t-50 w-1/3'>
                                <Link to="/mywork" className='m-5 py-5 text-2xl text-gray-800 block hover:text-white'
                                onClick={() => setShowMenu(false)}
                                >
                                    My Work
                                </Link>
                            </li>
                        </ul>
                    </animated.div>
                )
            }       
        </nav>
    )
}

export default Navigation