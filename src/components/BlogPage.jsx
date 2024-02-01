import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'

const BlogPage = () => {
  const[blogs ,setBlogs]=useState([])
  useEffect(()=>{
      async function fetchBlogs(){
      let url=`http://127.0.0.1:5500/src/api/blogsData`;

      const response =await fetch(url);
      const data =await response.json();
      setBlogs(data)
    }
    fetchBlogs();
  } ,[])
  return (
    <div>
      {/* category */}

      <div>    
       
        
         </div>

      {/* blogcard */}
      <div className='pt-14 mx-auto max-w-5xl'>
          <BlogCards blogs={blogs}/>
      </div>

      {/* pagination section */}
      <div className=' grid grid-cols-1 '>
        <h1>Lastest Blogs</h1>
        <Pagination       />


      </div>



    </div>
  )
}

export default BlogPage