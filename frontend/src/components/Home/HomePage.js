import React, { useRef } from 'react'
import Nav from '../Nav/Nav'
import './Home.css'
import HomeMain from './HomeMain'
import Benefits from './Benefits'
import Challenges from './Challenges'
import Solutions from './Solutions'
import Connect from './Connect'
import Footer from '../Footer/Footer'
import Faq from './HomeComponents/Faq'
import FlowChart from './FlowChart'
import FeaturedCompanies from './FeaturedCompanies'
import OneStopSoln from './OneStopSoln'



const HomePage = ({searchValue,setSearchValue}) => {

  const connect_ref = useRef();


  return (
    <div className='HomePage'>
       
        <HomeMain searchValue={searchValue} setSearchValue={setSearchValue}/>
        <FeaturedCompanies/>
        <Benefits/>
        <Challenges/>
        <OneStopSoln connect_ref={connect_ref}/>
        <Solutions/>
        <Faq/>
        <Connect connect_ref={connect_ref}/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePage