import React from 'react'
import Banner from '../components/Banner'
import { IoArrowForwardOutline } from "react-icons/io5";

import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <div className=' my-4'>
      <Banner title="Welcome to our Blog"
       describe="Start your blogs today and join a community of writters and readers who are passionate about sharing their stories and ideas.
       we offer everyting you need to get started , from helpful tips and tutorials "
       button="learn more" 
       icon={<IoArrowForwardOutline size={20} className='text-orange-500 mt-1 '  />}
       />
<BlogPage/>

    </div>
  )
}

export default Home