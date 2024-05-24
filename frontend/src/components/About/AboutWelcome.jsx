import React, { useRef } from 'react'


const AboutWelcome = ({about_ref}) => {

  return (
    
    <div className='AboutMain'>
        <div>
            <div className='aboutSubHead'>Welcome to</div>
            <div className='aboutHead'>Aadmiwala</div>
            <div className='subHead'>your trusted partner for tailored staffing solutions. </div>
        </div>
        <div className='text'>
            We understand that every business is unique, with its own specific needs and challenges. That's why we've made it our mission to provide bespoke manpower solutions that fit your company like a glove.
        </div>
        <div>
            <button className='aboutBtn' 
            onClick={() => {about_ref.current?.scrollIntoView({behavior:'smooth'})}}
            >Know us </button>
        </div>
        
    </div>
  )
}

export default AboutWelcome