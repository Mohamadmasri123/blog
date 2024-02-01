import React from 'react'
import Banner from '../components/Banner'
import aboutimg from "./../assets/about.jpg"
import ItemsAbout from '../components/ItemsAbout'
import NbilaAwad from "./../assets/NabilaAwad.jpg"
import HichamHaddad from "./../assets/HichamHaddad.jpeg"
import ElyJlede from "./../assets/Ely Jlede.jpg"
import HalimaTabiaa from "./../assets/Halima Tabiaa.jpg"


const About = () => {
  return (
    <div>
       <Banner title="About Page"
       describe=" "/>
       <div className=' grid grid-cols-2 py-8 gap-10 justify-center items-center  max-w-7xl mx-auto'>
        <img src={aboutimg} alt="" className='rounded-lg' />
        <div className=' py-3'>
          <h7 className="  text-orange-500 py-3 text-2xl">Who we Are</h7>
          <h1 className=" font-bold text-5xl py-3">We provide high quality Articles && blogs</h1>
          <p className="py-3 font-primary text-gray-700">Sed ullamcorper du at risus viverra, nec cursus leo ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra,per inceptos himenaeos congue dui nec dui loborits maximums.</p>
          <p className="py-3 font-primary">Curabitur pretium , libero vitae pharetra rhoncus , tellus urna auctor orci , eu dictum diam diam nec neque . Pellentesque .</p>
        </div>
       </div> 
         <div className='flex flex-col  justify-center '>
          <h1 className=' font-bold text-5xl py-12 ml-36'>Top Authors</h1>
          <div className='grid grid-cols-4 gap-4 mx-auto max-w-7xl w-full hfull  '>
            <ItemsAbout img={NbilaAwad} name="Nabila Awad" desc="Political Journalist" NmbrArticle="9"/>
            <ItemsAbout img={HichamHaddad} name="Hicham Haddad" desc="Comedy Journalist" NmbrArticle="8"/>
            <ItemsAbout img={ElyJlede} name="Ely Jlede" desc="Comedy Journalist" NmbrArticle="12"/>
            <ItemsAbout img={HalimaTabiaa} name="Halima Tabiaa" desc="Investigative Journalist" NmbrArticle="5"/>
          </div>
        </div>
    </div>
  )
}

export default About