import React from 'react'
import c0 from '../../assets/c-0.png'
import c1 from '../../assets/c-1.png'
import c2 from '../../assets/c-2.png'
import c3 from '../../assets/c-3.png'
import c4 from '../../assets/c-4.png'
import onestop from '../../assets/onestop.png'

const Challenges = () => {

  return (
<>
    <div className='Challenges'>

        <div className='challengesHead'>Challenges in Best Services Company Sourcing</div>

        <div className='text'>The difficulties of sourcing talent in today's talent marketplace</div>

        <div className='challengesContainer'>
        <div className='CC_box'>
                <img src={c0} className='CC_icon'/>
                <div className='subHead'>Adapting to Changing <br />Business Needs</div>
                {/* <div className='CC_text'>Aadmiwala offers flexible and customizable staffing solutions that adapt to your evolving business needs. Whether you need temporary, permanent, or contract staffing, we have the agility to tailor our services to meet your changing requirements.</div> */}
            </div>
            <div className='CC_box'>
                <img src={c1} className='CC_icon'/>
                <div className='subHead'>Ensuring Quality and <br />Reliability</div>
                {/* <div className='CC_text'> Aadmiwala meticulously evaluates and validates all staffing agencies in our network to ensure they meet our stringent standards. With our quality assurance processes in place, you can trust that you are working with reliable partners who deliver top-notch staffing solutions.</div> */}
            </div>
            <div className='CC_box'>
                <img src={c2} className='CC_icon'/>
                <div className='subHead'>Managing Multiple Service <br />Providers</div>
                {/* <div className='CC_text'> Aadmiwala provides a one-stop solution for all your staffing needs. Say goodbye to the hassle of dealing with multiple service providers. We streamline the process, allowing you to access a diverse range of staffing options through a single platform.</div> */}
            </div>
            <div className='CC_box'>
                <img src={c3} className='CC_icon'/>
                <div className='subHead'>Navigating Legal and <br />Compliance Issues</div>
                {/* <div className='CC_text'> Aadmiwala helps navigate the complexities of labor laws, regulations, and industry standards. Our team ensures compliance across different regions, providing peace of mind and mitigating legal risks for your business.</div> */}
            </div>
            <div className='CC_box'>
                <img src={c4} className='CC_icon'/>
                <div className='subHead'>Finding the Right Talent</div>
                {/* <div className='CC_text'> Aadmiwala offers tailored staffing solutions, matching businesses with the right talent for their specific requirements. Our extensive network of vetted staffing agencies ensures access to high-quality candidates who meet your company's unique needs.</div> */}
            </div>
        </div>

    </div>

    <div className='OneStopSoln'>
        <div>
            <img src={onestop} className='OSS_img'/>
        </div>
        <div className='OSS_content'>
            <div className='OSS_head'>One-Stop solution</div>
            <div className='text'>
                Say goodbye to the hassle of searching multiple service providers. At Aadmiwala, we offer a one-stop solution for all your staffing needs.
                <br /> <br />
                Whether you're in need of housekeeping support or office assistance, we provide opportunities perfectly tailored to meet your organization's needs.
            </div>
            <button className='OSS_btn'>Speak with us →</button>
        </div>
    </div>

</>
  )
}

export default Challenges