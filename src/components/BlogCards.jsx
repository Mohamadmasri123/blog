import React from 'react'
import { Link } from 'react-router-dom';

import { CiUser } from "react-icons/ci";

const BlogCards = ({blogs}) => {
        const filterBlogs =blogs ;
        console.log(filterBlogs)
        
 
       


  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1   '>
           {
        filterBlogs.map((blog)=> (<Link key={blog.title}>
          <div className=' max-w-[250px] p-auto shadow-md w-auto  '>
            <img src={blog.urlToImage}alt="" className='w-auto p-3' />
            <h3 className=' p-3 w-auto font-bold'>{blog.title}</h3>
            <div className='flex justify-center items-center  p-3 w-auto'> 
            <CiUser size={20} className='text-white bg-black mr-2 ' />{blog.author}
            </div>
            <p  className='p-3'> Published :{blog.publishedAt}</p>
        </div>
            
        </Link>))}
    
    </div>
  )
}

export default BlogCards