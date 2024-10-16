import React, { useState } from 'react'
import Navbar from './Navbar'
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import BackToHome from '../components/BackToHome';
const SellPage = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedSubCategory, setSelectedSubCategory] = useState()
    const [showCategories, setShowCategories] = useState(true)
    const [showSubCategories, setShowSubCategories] = useState(false)
    const navigate = useNavigate()
    const handleCategory = async (category) => {
        setSelectedCategory(category)
        setShowCategories(false)
        setShowSubCategories(true)
    }
    const handleSubCategory = async (category) => {
        setSelectedSubCategory(category)
        setShowSubCategories(false)
        navigate("/sell/form" , { state : { category:selectedCategory , subCategory: selectedSubCategory}})
    }
    return (
        <>
         <BackToHome />

            <h1 className='text-center text-lg md:text-2xl font-semibold my-10'>Post Your Ad</h1>

            <div className='mx-20'>
                {
                    showCategories &&
                    <>
                        <h1 className='text-lg md:text-xl font-semibold flex items-center gap-3'>Choose Category <PiArrowBendRightDownBold className='mt-2' size={20} /></h1>

                        <div className='flex flex-wrap gap-4 my-10 justify-center'>

                            <div className='flex justify-between w-full md:w-[40%] items-center border-2 border-primary ' onClick={(() => handleCategory("ring"))}>
                                <img src="assets/images/logo/logo.png" className=' w-10 md:w-16' alt="jwellery category" />
                                <h1 className='text-lg font-medium '>Necklaces</h1>
                                <MdOutlineArrowCircleRight size={30} />
                            </div>

                        </div>
                    </>
                }
            </div>

            <div className='mx-20'>

                {
                    showSubCategories &&
                    <>
                        <h1 className='text-lg md:text-xl font-semibold flex items-center gap-3'>Choose SubCategory <PiArrowBendRightDownBold className='mt-2' size={20} /></h1>

                        <div className='flex flex-wrap gap-4 my-10 justify-center'>

                            <div className='flex justify-between w-full md:w-[40%]  items-center border-2 border-primary ' onClick={(() => handleSubCategory("earring"))}>
                                <img src="assets/images/logo/logo.png" className='w-10 md:w-16' alt="jwellery category" />
                                <h1 className='text-lg font-medium '>Earrings</h1>
                                <MdOutlineArrowCircleRight size={30} />
                            </div>

                        </div>
                    </>
                }
            </div>


        </>
    )
}

export default SellPage