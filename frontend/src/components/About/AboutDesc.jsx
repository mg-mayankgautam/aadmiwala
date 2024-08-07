import React from 'react'
import aboutcard from '../../assets/aboutcard.png'

const AboutDesc = ({about_ref}) => {

  return (
    
    <div className='AboutBoxDiv' ref={about_ref}>
        <div className='AboutBox'>
            <div>
                
                <div className='AboutBoxHeading'>About Covendx</div>
                <br/>
                <br/>
            
                <div className='text AboutBoxText'>
                Covendx is your trusted partner in the world of Vendor solutions, bridging the gap between companies and vendors with precision and expertise.
                <br/>
                <br/>
                <br />
                We understand the critical importance of having the right personnel to drive your business forward, and we are dedicated to connect you with the perfect one stop solution tailored to your unique needs. 
             

               
                    </div>
            </div>
            <div className='aboutCardImgDiv'>
                <img src={aboutcard} className='aboutCardImg'/>
            </div>
        </div>
    </div>
    
  )
}

export default AboutDesc