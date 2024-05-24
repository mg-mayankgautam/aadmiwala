import React from 'react'
import aboutcard from '../../assets/aboutcard.png'

const AboutDesc = ({about_ref}) => {

  return (
    
    <div className='AboutBoxDiv' ref={about_ref}>
        <div className='AboutBox'>
        <div>
            
            <div className='AboutBoxHeading'>About Aadmiwala</div>
            <br/>
            <br/>
          
            <div className='text AboutBoxText'>At Aadmiwala, we understand that your workforce is the backbone of your business. 
            <br/>
            <br/>
            <br />

                That's why we're dedicated to providing tailored staffing solutions that empower organizations with the skilled talent they need to thrive.
                <br/>
            <br/> <br />

                Founded on the principles of quality, reliability, and personalized service, Aadmiwala has become a trusted partner for companies across industries. Our mission is simple: to match you with the right people for the job, every time.</div>
                <br/>
            <br/>
        </div>
        <div>
            <img src={aboutcard} className='aboutCardImg'/>
        </div>
    </div>
    </div>
    
  )
}

export default AboutDesc