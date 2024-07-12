import React from 'react'
import usp1 from '../../assets/usp1.png'
import usp2 from '../../assets/usp2.png'
import usp3 from '../../assets/usp3.png'
import usp4 from '../../assets/usp4.png'
import usp5 from '../../assets/usp5.png'
import usp6 from '../../assets/usp6.png'
import usp7 from '../../assets/usp7.png'
import usp8 from '../../assets/usp8.png'
import uspstars from '../../assets/usp-stars.png'
import uspleaf1 from '../../assets/usp-leaf1.png'
import uspleaf2 from '../../assets/usp-leaf2.png'

const Solutions = () => {
  return (
    <>
    <div className='USPs'>
        <div>
            {/* <div className='USP_head'>Flexible Staffing Solutions for Every Business Need</div> */}
            {/* <div className='USP_text'>Choose the staffing solution that aligns with your business needs - consistent support or flexible assistance, we deliver.</div> */}
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

        <div className='USP_foot'>
            <img src={uspstars} />
            <div className='USP_footContent'>
                <img src={uspleaf1}/>
                <div>Your Trusted Partner For Best Services <br /> Company Sourcing</div>
                <img src={uspleaf2}/>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Solutions