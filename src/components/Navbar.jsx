import React, { useState } from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaBasketballBall } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  // Menu
  const[isMenuOpen,setisMenuOpen]=useState(false);
  const toggleMenu=()=>{
          setisMenuOpen(!isMenuOpen);
  }
  
  
  // li
  const link=[
    {
      path:"/",
      linkname:"Home"
    },
    {
      path:"/Services",
      linkname:"Services"
    },
    {
      path:"/About",
      linkname:"About"
    },

    {
      path:"/Contact",
      linkname:"Contact"
    },
    ]
  return (
    <header className='bg-black text-white fixed top-0 right-0 left-0 ' >
        <nav className='flex justify-between  mx-auto max-w-7xl  items-center py-4 ' >
            <a href="/" className='text-2xl font-bold text-white py-3  px-2'>Design<span className=' text-orange-500'>Dk</span></a>
               <ul className='text-white py-3 md:flex hidden'>
                  {
                   link.map(({path,linkname})=>
                   <li><a href={path}  className='px-6 text-xl'>{linkname}</a></li>
                   )
                   }
                </ul> 
            <div className='lg:flex hidden items-center '>
                <a href="" className='pr-4 '><FaMeta size={20} /></a>
                <a href="" className='pr-4 '><FaBasketballBall size={20} /></a>
                <a href="" className='pr-4 '><TiSocialTwitter size={20} /></a>      
                <button className=' bg-orange-500 px-6 py-2 hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in rounded-sm' >Log in</button>
             </div>
             <div>
              <button onClick={toggleMenu} className=' md:hidden mr-4  '>
                {
                  isMenuOpen ? <IoClose size={20}/> : <IoMdMenu  size={20}/>
                 }
                </button>
            </div>
        </nav>
       {/* mobile li */}
       <div>
       <ul className={`py-3 md:hidden block space-y-4 px-4 bg-white mt-20 ${isMenuOpen ? "fixed top-0 right-0 left-0 transition-all ease-out duration-150" : "hidden"}`}>
                  {
                   link.map(({path,linkname})=>
                   <li><a href={path}  className='px-6 text-xl text-black'>{linkname}</a></li>
                   )
                   }
                </ul>
                </div>
    </header>
  )
}

export default Navbar