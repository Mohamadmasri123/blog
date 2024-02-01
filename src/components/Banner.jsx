import React from 'react'




const Banner = (props) => {
  return (
    <div className='bg-black w-full text-white flex flex-col items-center  mt-20  h-[400px] mx-auto'>
        <div>
            <h1 className='text-6xl lg:text-7xl flex justify-center font-bold py-16'>{props.title}</h1>
            <p className='text-2xl w-full lg:w-3/5  mx-auto text-center font-primary'>{props.describe}</p>
            <div  className=' flex justify-center items-center text-white  py-6 hover:text-orange-500 '>
              <a href="" className='flex pr-2 items-center font-bold '> {props.button}  </a>
             
             {props.icon}
               
              </div>

        </div>
        
    </div>
  )
}

export default Banner