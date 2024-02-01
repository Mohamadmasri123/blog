import React from 'react'
import ItemsFooter from './ItemsFooter'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-black  text-white mt-16  '>
        <div className='grid grid-cols-5   max-w-7xl  mx-auto'>
        <ItemsFooter title="Category"  subtitle1="News" subtitle2="World" subtitle3="Games" subtitle4="References"/>
            <ItemsFooter title="Apples"  subtitle1="Web" subtitle2="Ecommerce" subtitle3="Business" subtitle4="Entertainment"/>
            <ItemsFooter title="Cherry"  subtitle1="Media" subtitle2="Brochure" subtitle3="Nonprofit" subtitle4="Educational"/>
            <ItemsFooter title="Business"  subtitle1="Infopreneur" subtitle2="Personal" subtitle3="Wiki" subtitle4="Forum"/>
            <div className='flex flex-col py-12 '>
                <h1 className='font-bold py-1 '>Subscribe For Upadte</h1>
                <div className='flex my-4 '>
                <input type="Email" placeholder="Email"  className=' px-2  border border-gray rounded-lg mr-2' /> 
                <button className=' bg-black border  text-white rounded-md px-6 py-2  '>Subscribe</button>

                </div> 
                
                <p className='text-gray-500'>Bacon Ipsum dolor amet short ribs pig Sausage prosciuto chicken spare ribs salami.</p>
                  <div className='flex pt-4'>
                  <FaInstagram size={20} className='mr-6' />
                  <FaFacebookF size={20}  className='mr-6'  />
                  <IoLogoTwitter  size={20}  className='mr-6' />
                  <IoLogoWhatsapp   size={20}  className='mr-6'/>
                  </div>
            </div>
         
        </div>

    </div>
  )
}

export default Footer