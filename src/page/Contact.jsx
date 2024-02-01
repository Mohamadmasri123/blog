import React from 'react'
import Banner from '../components/Banner'
import contact from "../assets/contact.png"
import Form from '../components/Form'




const Contact = () => {
  return (
    <div> 
      <Banner title="Contact Us Page"
    describe=""/>
    <div className='grid grid-cols-2 max-w-[90rem] mx-auto'>
      <img src={contact} alt=""  className=' my-auto'/>
      <form>
          <Form name="Full Name" type="name" placeholder=" Full name" />
          <Form name="Email Address" type="Email" placeholder=" Enter The Email Address" />
          <Form name="Subject" type="name" placeholder="Enter The Subject" />     
          <Form name="Message" type="name" placeholder="Enter the message"  className="h-[200px]" />      
          <div>
            <button className=' bg-violet-500 text-white rounded-md px-6 py-2 mb-10'>Submit</button>
          </div>


      </form>

    </div>






    </div>
  )
}

export default Contact