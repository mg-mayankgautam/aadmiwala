import React from 'react'
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



const HomePage = ({searchValue,setSearchValue}) => {
  return (
    <div className='HomePage'>
       
        <HomeMain searchValue={searchValue} setSearchValue={setSearchValue}/>
        <FeaturedCompanies/>
        <Benefits/>
        <Challenges/>
        <FlowChart/>
        <Solutions/>
        <Faq/>
        <Connect/>
        <Footer/>
    </div>
  )
}

export default HomePage