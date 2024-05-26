import React from 'react'
import c2 from '../../assets/c-2.png'
import c3 from '../../assets/c-3.png'
import onestop from '../../assets/onestop.png'

const Challenges = () => {

  return (
<>
    <div className='Challenges'>

        <div className='challengesHead'>Challenges in Best Services Company Sourcing</div>

        <div className='text'>The difficulties of sourcing talent in today's talent marketplace</div>

        <div className='challengesContainer'>
            <div className='CC_box'>
                <img src={c2} className='CC_icon'/>
                <div className='subHead'>High Recruiting Firm Costs</div>
                <div className='CC_text'>Hiring through Recruitment firm is expensive.</div>
            </div>
            <div className='CC_box'>
                <img src={c2} className='CC_icon'/>
                <div className='subHead'>Complex Recruiting Firm Management process</div>
                <div className='CC_text'>Companies lack systems to assess recruiting firm performance and struggle to find firms during hiring.</div>
            </div>
            <div className='CC_box'>
                <img src={c3} className='CC_icon'/>
                <div className='subHead'>Lack of Transparency</div>
                <div className='CC_text'>Limited job visibility causes frustration and <br /> misunderstandings for clients and candidates.</div>
            </div>
            <div className='CC_box'>
                <img src={c2} className='CC_icon'/>
                <div className='subHead'>Unreliable Recruiting Firm <br /> resume quality</div>
                <div className='CC_text'>Inconsistency in resume inflow and quality. Unpredictable <br />Turn Around Time.</div>
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