import React from 'react'
import { Link } from 'react-scroll'
const Navlink = ({to, title ,offset}) => {
  return (
    <Link 
    smooth={true} offset={offset} duration={500} 
    to={to} 
    className='block py-2  pl-3 pr-4 cursor-pointer text-[#adb7be] sm:text-xl round md:p-0 active:text-white hover:text-white '>
        {title}
    </Link>
  )
}

export default Navlink