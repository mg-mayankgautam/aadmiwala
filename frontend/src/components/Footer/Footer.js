import React, { useState } from 'react'
import logo from '../../assets/logowhite.png'
import './Footer.css'
import fb from '../../assets/fblogo.png'
import ig from '../../assets/iglogo.png'
import EastIcon from '@mui/icons-material/East';

const Footer = () => {

    const [callus, setcallus] = useState(false)

  return (
    <div className='Footer'>
        <div className='footerContent'>
            <div>
                <div className='footerHeading'>
                    <img src={logo} className='footerLogo'/>
                </div>
                <div className='footerAddress'>
                    <div className='footerBold '>INDIA</div>
                    <div>A/3 PC Colony Kankarbagh, <br/> Patna, Bihar</div>
                </div>
            </div>

            <div>
                <div className='footerHeading footerBold'>QUICK LINKS</div>
                <div className='footerList'>
                    <a href="https://www.facebook.com/aadmiwala" target='_blank'>
                        <div className='footerSocialMedia'> <img src={fb}/> Facebook
                        </div>
                    </a>

                    <a href="https://www.instagram.com/aadmiwala">
                        <div className='footerSocialMedia'><img src={ig}/> Instagram</div>
                    </a>
                    
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
                        Client Recruiters
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
                     
                     <div className={callus? 'footerOrange footerbtnwidth' : 'footerOrange' }
                        onClick={()=> setcallus(!callus)}>
                        {callus? 
                            <>8210072553 <EastIcon/></>
                        : 
                        <>
                            Contact Us <EastIcon/>
                        </>}
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