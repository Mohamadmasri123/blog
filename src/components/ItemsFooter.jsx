import React from 'react'

const ItemsFooter = (props) => {
  return (
    <div className=' flex flex-col   py-12'>
        <h1 className=' font-bold py-1'>{props.title}</h1>
        <p className=' text-gray-500 font-primary py-2 ' >{props.subtitle1}</p>
        <p className=' text-gray-500 font-primary py-2'>{props.subtitle2}</p>
        <p className=' text-gray-500 font-primary py-2'>{props.subtitle3}</p>
        <p className=' text-gray-500 font-primary py-2'>{props.subtitle4}</p>
        
        
    </div>
  )
}

export default ItemsFooter