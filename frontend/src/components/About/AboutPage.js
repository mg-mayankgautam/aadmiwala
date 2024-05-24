import React from 'react'
import './About.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Connect from '../Home/Connect'
import AboutMain from './AboutMain'
import Solutions from '../Home/Solutions'


const AboutPage = () => {
  return (
    <div className='AboutPage'>
        <Nav/>
        <AboutMain/>
        <Solutions/>
        <Connect/>
        <Footer/>
        
    </div>
  )
}

export default AboutPage