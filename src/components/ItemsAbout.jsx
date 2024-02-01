import React from 'react'
import { MdOutlineArticle } from "react-icons/md";

const ItemsAbout = (props) => {
  return (
    <div className='flex flex-col bg-gray-200 items-center  '>
        <img src={props.img} alt=""  className=' rounded-full w-36 px-auto items-center py-4 h-36'/>
        <h1 className=' font-bold py-2 font-primary'>{props.name}</h1>
        <p className='py-2 font-primary'>{props.desc}</p>
        <div className='flex py-2 items-center'>
        <MdOutlineArticle />
            <p className='font-primary'>{props.NmbrArticle} Article Published</p>
        </div>
        

    </div>
  )
}

export default ItemsAbout