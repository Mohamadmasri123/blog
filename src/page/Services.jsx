import React from 'react'
import Banner from '../components/Banner'
import ItemsServices from '../components/ItemsServices'
import { MdDesignServices } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";


const Services = () => {
  return (
    <div>
       <Banner title="Services Page"
       describe=" "/>
       <div className=' flex flex-col py-12 justify-center items-center'>
        <h7 className=' text-orange-500 font-bold py-2'>Our Services</h7>
        <h1 className="text-4xl font-bold py-2">What We Offer</h1>
        <p className=' font-primary text-center py-2'>There are mant variations of passages of loren ipusm available<br/> but the majority have sufffered alteration is some form .</p>
        <div className=' grid grid-cols-3 grid-rows-2  gap-4 pt-14 mx-auto max-w-7xl'>
          <ItemsServices icon={<MdDesignServices size={60}/> }  name="Refreshing Design" desc="We dejoy working with descerning clients, people for whom qualuty, service , integrity & aesthetics. "/>
          <ItemsServices icon={<SiTailwindcss size={60}/>}  name="Based on Tailwind CSS" desc="We dejoy working with descerning clients, people for whom qualuty, service , integrity & aesthetics. "/>
          <ItemsServices icon={<SiWebcomponentsdotorg size={60}/>}  name="300 + Components" desc="We dejoy working with descerning clients, people for whom qualuty, service , integrity & aesthetics. "/>
          <ItemsServices icon={<GrOptimize size={60}/>}  name="Speed Optimized" desc="We dejoy working with descerning clients, people for whom qualuty, service , integrity & aesthetics. "/>
          <ItemsServices icon={<MdDashboardCustomize size={60}/>} name="Fully Customizable" desc="We dejoy working with descerning clients, people for whom qualuty, service , integrity & aesthetics. "/>
          <ItemsServices icon={<MdBrowserUpdated size={60}/>}  name="Regular Updates" desc="We dejoy working with descerning clients, people for whom qualuty, service , integrity & aesthetics. "/>


        </div>
       </div>
    </div>
  )
}

export default Services