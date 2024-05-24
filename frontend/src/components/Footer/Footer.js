import React from 'react'
import logo from '../../assets/logowhite.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footerContent'>
            <div>
                <img src={logo} />
                <div>
                    <div className='footerBold'>INDIA</div>
                    <div>A/3 PC Colony Kankarbagh, Patna, Bihar</div>
                </div>
            </div>
            <div>

            </div>
        </div>

        <div className='footerTerms'>
            <div>Terms of Service</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
        </div>
    </div>
  )
}

export default Footer