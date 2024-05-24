import React from 'react'
import aboutcard from '../../assets/aboutcard.png'

const AboutMain = () => {
  return (
    <>
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
            <button className='aboutBtn'>Know us </button>
        </div>
        
    </div>

    <div className='AboutBoxDiv'>
        <div>
            
            <div className='AboutBoxHeading'>About Aadmiwala</div>
            <br/>
            <br/>
          
            <div className='text AboutBoxText'>At Aadmiwala, we understand that your workforce is the backbone of your 
            <br/>business. 
            <br/>
            <br/>


                That's why we're dedicated to providing tailored staffing solutions that empower organizations with the skilled talent they need to thrive.
                <br/>
            <br/>

                Founded on the principles of quality, reliability, and personalized service, Aadmiwala has become a trusted partner for companies across industries. Our mission is simple: to match you with the right people for the job, every time.</div>
                <br/>
            <br/>
        </div>
        <div>
            <img src={aboutcard} className='aboutCardImg'/>
        </div>
    </div>
    </>
  )
}

export default AboutMain