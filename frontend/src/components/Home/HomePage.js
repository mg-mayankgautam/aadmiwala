import React, { useRef } from 'react'
import Nav from '../Nav/Nav'
import './Home.css'
import HomeMain from './HomeMain/HomeMain'
import Benefits from './Benefits/Benefits'
import Challenges from './Challenges/Challenges'
import Solutions from './Solutions/Solutions'
import Connect from './Connect/Connect'
import Footer from '../Footer/Footer'
import Faq from './Faq/Faq'
import FlowChart from './FlowChart'
import FeaturedCompanies from './FC/FeaturedCompanies'
import OneStopSoln from './OSS/OneStopSoln'



const HomePage = ({searchValue,setSearchValue}) => {

  const connect_ref = useRef();


  return (
    <div className='HomePage'>
       
        <HomeMain searchValue={searchValue} setSearchValue={setSearchValue}/>
        <FeaturedCompanies/>
        <Benefits/>
        <Challenges/>
        {/* <OneStopSoln connect_ref={connect_ref}/> */}
        <Solutions connect_ref={connect_ref}/>
        <Faq/>
        <Connect connect_ref={connect_ref}/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage