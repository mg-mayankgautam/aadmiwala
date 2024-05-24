import React from 'react'
import logo from '../../assets/logowhite.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footerContent'>
            <div>
                <div className='footerHeading'><img src={logo} /></div>
                <div className='footerList'>
                    <div className='footerBold '>INDIA</div>
                    <div>A/3 PC Colony Kankarbagh, Patna, Bihar</div>
                </div>
            </div>

            <div>
                <div className='footerHeading footerBold'>QUICK LINKS</div>
                <div className='footerList'>
                    <div >FaceBook</div>
                    <div>Instagram</div>
                    <div>Blogs</div>
                    <div>About Us</div>
                </div>
            </div>



            <div>
                <div className='footerHeading footerBold'>
                    FAQ's
                </div>
                <div className='footerList'>
                    <div>
                        Recruitment Agency
                    </div>
                    <div>
                        CLient Recruiters
                    </div>
                    <div>
                        
                     </div>
                     <div>
                        
                     </div>
                </div>
            </div>

            <div>
                <div className='footerHeading footerBold'>
                    LET'S TALK
                </div>
                <div className='footerList'>
                     <div>
                         aadmiwala@gmail.com
                     </div>
                     <div>
                         Contact Us
                     </div>
                     <div>
                        
                     </div>
                     <div>
                        
                     </div>
                </div>
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