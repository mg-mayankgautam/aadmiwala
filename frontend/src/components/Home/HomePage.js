import React from 'react'
import Nav from '../Nav/Nav'
import './Home.css'
import HomeMain from './HomeMain'
import Benefits from './Benefits'
import Challenges from './Challenges'
import Solutions from './Solutions'
import Connect from './Connect'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div className='HomePage'>
        <Nav/>
        <HomeMain/>
        <Benefits/>
        <Challenges/>
        <Solutions/>
        <Connect/>
        <Footer/>
    </div>
  )
}

export default HomePage