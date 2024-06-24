import React from 'react'
import onestop from '../../assets/onestop.png'


const OneStopSoln = ({connect_ref}) => {
  return (
    <div className='OneStopSoln'>
        <div>
            <img src={onestop} className='OSS_img'/>
        </div>
        <div className='OSS_content'>
            <div className='OSS_head'>One-Stop solution</div>
            <div className='text'>
                Say goodbye to the hassle of searching multiple service providers. At Aadmiwala, we offer a one-stop solution for all your staffing/Vendor needs.
                <br /> <br />
                Whether you're in need of housekeeping support or office assistance, we provide opportunities perfectly tailored to meet your organization's needs.
            </div>
            <button className='OSS_btn' onClick={() => {connect_ref.current?.scrollIntoView({behavior:'smooth'})}}>Speak with us →</button>
        </div>
    </div>
  )
}

export default OneStopSoln