import React from 'react'
import './AddCompany.css'
import Nav from '../Nav/Nav'

const AddCompany = () => {
  return (
    <>
    <Nav/>

    <div className='AddCompany'>

        <div className='recruiting_input_box'>
            <div>
                <div className='recruiting_input_heading'>Add Recruiting Company</div>
                <div className='recruiting_input_Subheading'>Your information</div>
            </div>
            <div className='recr_TabsDiv'> 
                <div className='orangeTab recr_Tab'></div><div className='recr_Tab'></div><div className='recr_Tab'></div>
            </div>

            <div>
                <div>
                    <div>Full Name</div>
                    <input className='recr_input'></input>
                </div>
                <div>
                    <div >Official Email</div>
                    <input className='recr_input'></input>
                </div>
                <div className='recr_phone_input_div'>
                    <div>
                        <div>Dialing Code</div>
                        <select className='recr_phone_select'/>
                    </div>
                    <div>
                        <div>Phone Number</div>
                        <input className='recr_phone_input'/>
                    </div>
                </div>
            </div>

            <div>
                <button className='recruiting_submit_btn'>Next</button>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default AddCompany
