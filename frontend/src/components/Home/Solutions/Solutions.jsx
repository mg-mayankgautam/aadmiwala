import React from 'react'
import './Solutions.css'
import usp1 from '../../../assets/usp1.png'
import usp2 from '../../../assets/usp2.png'
import usp3 from '../../../assets/usp3.png'
import usp4 from '../../../assets/usp4.png'
import usp5 from '../../../assets/usp5.png'
import usp6 from '../../../assets/usp6.png'
import usp7 from '../../../assets/usp7.png'
import usp8 from '../../../assets/usp8.png'
import uspstars from '../../../assets/usp-stars.png'
import uspleaf1 from '../../../assets/usp-leaf1.png'
import uspleaf2 from '../../../assets/usp-leaf2.png'

const Solutions = ({connect_ref}) => {
  return (
    <>
    <div className='USPs'>

        <div className='OSS_content USP'>

            {/* <div className='OSS_content_Head'> */}
                <div className='OSS_head'>One-Stop solution</div>
            
            {/* </div> */}

            <div className='OSStext'>
                Say goodbye to the hassle of searching multiple service providers. At Covendx, we offer a one-stop solution for all your staffing/Vendor needs.
                <br /> <br />
                Whether you're in need of housekeeping support or office assistance, we provide opportunities perfectly tailored to meet your organization's needs.
            </div>

            <button className='OSS_btn USP' onClick={() => {connect_ref.current?.scrollIntoView({behavior:'smooth'})}}>Speak with us →</button>
        </div>

        <div className='USP_container'>
            <div className='USP_box'>
                <img src={usp1}/>
                <div>Top Firms for <br />Workforce Excellence</div>
            </div>
            <div className='USP_box'>
                <img src={usp2}/>
                <div>Single Vendor <br /> Single Payment</div>
            </div>
            <div className='USP_box'>
                <img src={usp3}/>
                <div>Single Contract</div>
            </div>
            <div className='USP_box'>
                <img src={usp4}/>
                <div>Hybrid Solutions</div>
            </div>
            <div className='USP_box'>
                <img src={usp5}/>
                <div>Multicity One Vendor</div>
            </div>
            <div className='USP_box'>
                <img src={usp6}/>
                <div>Simplified <br />Communication</div>
            </div>
            <div className='USP_box'>
                <img src={usp8}/>
                <div>Zero Brokerage</div>
            </div>
            <div className='USP_box'>
                <img src={usp7}/>
                <div>Enterprise Solutions</div>
            </div>
        </div>

        {/* <div className='USP_foot'>
            <img src={uspstars} />
            <div className='USP_footContent'>
                <img src={uspleaf1}/>
                <div>Your Trusted Partner For Best Services <br /> Company Sourcing</div>
                <img src={uspleaf2}/>
            </div>
        </div> */}
        
    </div>
    </>
  )
}

export default Solutions