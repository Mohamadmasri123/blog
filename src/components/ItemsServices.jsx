import React from 'react'







const ItemsServices = (props) => {
  return (
    <div className='flex flex-col shadow-2xl rounded-xl py-4 px-6 '>
        <div className=" text-blue-800  py-2">{props.icon }</div>
       
        <h1 className='py-2 font-bold'>{props.name}</h1>
        <p className='py-2 font-primary'>{props.desc}</p>
    </div>
  )
}

export default ItemsServices