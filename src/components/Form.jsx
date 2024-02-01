import React from 'react'

const Form = (props) => {
  return (
    <div className='flex flex-col py-6    '>
       <h1 className='py-2 px-1 text-xl '>{props.name}</h1>
       <input type={props.type} placeholder={props.placeholder } className='py-3 px-4  border border-gray rounded-lg' /> 
    </div>
  )
}

export default Form