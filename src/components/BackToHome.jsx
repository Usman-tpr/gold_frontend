import React from 'react'
import { Link} from 'react-router-dom';
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

const BackToHome = () => {
  return (
    <Link to='/' className='px-20 py-2 flex items-center space-x-3 bg-[#C5B358] text-black'>
    <HiMiniArrowUturnLeft />
    <h1 className="text-lg md:text-xl font-semibold ml-2">Back to Home</h1>
</Link>
  )
}

export default BackToHome