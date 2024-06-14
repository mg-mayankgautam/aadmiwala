import React from 'react'
import './About.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Connect from '../Home/Connect'
import AboutWelcome from './AboutWelcome'
import AboutDesc from './AboutDesc'
import Solutions from '../Home/Solutions'
import  { useEffect, useRef } from 'react';
import AboutTimeline from './AboutTimeline'


const AboutPage = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  const about_ref = useRef(null);

  
  return (
    
    <div className='AboutPage'>
       
        <AboutWelcome  about_ref={about_ref}/>
        <AboutDesc  about_ref={about_ref}/>
        <AboutTimeline/>
        {/* <Solutions/> */}
        <Connect/>
        {/* <Footer/> */}
    </div>
  )
}

export default AboutPage