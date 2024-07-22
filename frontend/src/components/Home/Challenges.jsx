import React, { useEffect, useState } from 'react'
import c0 from '../../assets/c-0.png'
import c1 from '../../assets/c-1.png'
import c2 from '../../assets/c-2.png'
import c3 from '../../assets/c-3.png'
import c4 from '../../assets/c-4.png'

const Challenges = () => {


  return (
<>
    <div className='Challenges'>

        <div className='challengesHead'>Why Covendx?</div>

        <div className='text'>Our platform simplifies agency connections, <br />allowing you to focus on core business while we manage staffing intricacies.</div>

        <div className='challengesContainer'>
       
            <div className='CC_box'>
                <div className='flip-box-inner'>
                    <div className='flip-box-front'>
                        <img src={c1} className='CC_icon'/>
                        <div className='subHead'>ANIM 1: Ensuring Quality and <br />Reliability</div>
                    </div>

                    <div className='flip-box-back'>
                        <div className='CC_text'> Covendx meticulously evaluates and validates all staffing agencies in our network to ensure they meet our stringent standards. With our quality assurance processes in place, you can trust that you are working with reliable partners who deliver top-notch staffing solutions.</div>
                    </div>
                </div>
                
            </div>

            <div className='CC1_box'>
                <div className='inner'>
                    <div className='front'>
                    <img src={c2} className='CC_icon' alt="Icon" />
                    <div className='subHead'>ANIM 2: Managing Multiple Service Providers</div>
                    </div>
                    <div className='back'>
                    <div className='CC1_text'>
                        Covendx provides a one-stop solution for all your staffing needs. Say goodbye to the hassle of dealing with multiple service providers. We streamline the process, allowing you to access a diverse range of staffing options through a single platform.
                    </div>
                    </div>
                </div>
            </div>

            <div className='CC_box1'>
                <div className='flip-box-inner1'>
                    <div className='flip-box-front1'>
                        <img src={c1} className='CC_icon'/>
                        <div className='subHead'>ANIM 3: Ensuring Quality and <br />Reliability</div>
                    </div>

                    <div className='flip-box-back1'>
                        <div className='CC_text'> Covendx meticulously evaluates and validates all staffing agencies in our network to ensure they meet our stringent standards. With our quality assurance processes in place, you can trust that you are working with reliable partners who deliver top-notch staffing solutions.</div>
                    </div>
                </div>
                
            </div>

            <div className='CC_box2'>
                <div className='flip-box-inner2'>
                    <div className='flip-box-front2'>
                        <img src={c1} className='CC_icon'/>
                        <div className='subHead'>ANIM 4: Ensuring Quality and <br />Reliability</div>
                    </div>

                    <div className='flip-box-back2'>
                        <div className='CC_text'> Covendx meticulously evaluates and validates all staffing agencies in our network to ensure they meet our stringent standards. With our quality assurance processes in place, you can trust that you are working with reliable partners who deliver top-notch staffing solutions.</div>
                    </div>
                </div>
                
            </div>

            <div className='CC_box'>
                <img src={c2} className='CC_icon'/>
                <div className='subHead'>Managing Multiple Service <br />Providers</div>
                {/* <div className='CC_text'> Covendx provides a one-stop solution for all your staffing needs. Say goodbye to the hassle of dealing with multiple service providers. We streamline the process, allowing you to access a diverse range of staffing options through a single platform.</div> */}
            </div>
            <div className='CC_box'>
                <img src={c3} className='CC_icon'/>
                <div className='subHead'>Navigating Legal and <br />Compliance Issues</div>
                {/* <div className='CC_text'> Covendx helps navigate the complexities of labor laws, regulations, and industry standards. Our team ensures compliance across different regions, providing peace of mind and mitigating legal risks for your business.</div> */}
            </div>
            <div className='CC_box'>
                <img src={c4} className='CC_icon'/>
                <div className='subHead'>Finding the Right Talent</div>
                {/* <div className='CC_text'> Covendx offers tailored staffing solutions, matching businesses with the right talent for their specific requirements. Our extensive network of vetted staffing agencies ensures access to high-quality candidates who meet your company's unique needs.</div> */}
            </div>
        </div>

    </div>

    

</>
  )
}

export default Challenges