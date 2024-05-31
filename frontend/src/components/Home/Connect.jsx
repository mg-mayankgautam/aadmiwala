import React from 'react'
import connect from '../../assets/connect.png'
// let transporter = nodemailer.createTransport(transport[, defaults])


const Connect = () => {
  return (
    <>
   

    <div className='LetsConnect'>
        <div className='LC_content'>
            <div>
                <div className='LC_head'>Let's Connect</div>
                <div className='text'>Please enter the following details</div>
            </div>
            <div className='LC_Inputs'>
                <input type="text" placeholder='Full Name*' className='connectinput'/>
                <input type="text" placeholder='E Mail ID*' className='connectinput'/>
                <input type="text" placeholder='Phone Number*' className='connectinput'/>
                <input type="text" placeholder='Location*' className='connectinput'/>
                <input type="text" placeholder='Services*' className='connectinput'/>
                <input type="text" placeholder='Requirements*' className='connectinput LC_reqinput'/>
            </div>
            <div>
                <button className='LC_btn'>Submit</button>
            </div>
        </div>
        <div className='LC_imgDiv'>
            <img src={connect}/>
        </div>
    </div>
    </>
  )
}

export default Connect