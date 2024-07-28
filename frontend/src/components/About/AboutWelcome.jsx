import React, { useRef } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AboutWelcome = ({about_ref}) => {

  return (
    
    <div className='AboutMain'>
        <div>
            <div className='aboutSubHead'>Welcome to</div>
            <div className='aboutHead'>Covendx</div>
            <div className='subHead'>your trusted partner for tailored vendors <br /> solutions that meets seamless integration. </div>
        </div>
        {/* <div className='text'>Our platform simplifies the process of connecting with the right agencies, allowing clients to focus on their core business while we handle the intricacies of vendors.
        </div> */}
        <div>
            <button className='aboutBtn' 
            onClick={() => {about_ref.current?.scrollIntoView({behavior:'smooth'})}}
            >Know us <ArrowForwardIosIcon/></button>
        </div>
        
    </div>
  )
}

export default AboutWelcome