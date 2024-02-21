import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'

const BlogPage = () => {
  const[blogs ,setBlogs]=useState([])
  useEffect(()=>{
      async function fetchBlogs(){
      let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=00ae9b828d6e471fa08947b76b038830
      `;

      const response =await fetch(url);
      const data =await response.json();
      setBlogs(data.articles);

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

      {/* pagination section
      <div className=' grid grid-cols-1 '>
        <h1>Lastest Blogs</h1>



      </div> */}



    </div>
  )
}

export default BlogPage