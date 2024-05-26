import React, {useState} from 'react'
import './AddCompany.css'
import Nav from '../Nav/Nav'
import axios from 'axios'

const AddCompany = () => {

    const [slide1, setslide1] = useState(true);
    const [slide2, setslide2] = useState(false);
    const [slide3, setslide3] = useState(false);

    const submitNewUser = async (e) => {
        // e.preventDefault();


        //console.log(NewUsername,NewPassword);
        const Username='hi user';
        // const Password=pwd;

    //   if(user && pwd && !userfromDB && validPwd ){ 
        console.log('submit succeess')
        try{
          const data = await axios.post('http://localhost:4700/signUp',{Username})
      
        //   console.log(data.data);
        //   if(data.data){
        //     navigate(`/login`)

        //   }
      }
      catch(err){console.log(err);}
    //  }
      
};

  return (
    <>
    <Nav/>

    <div className='AddCompany'>

        <div className='recruiting_input_box'>
            <div>
                <div className='recruiting_input_heading'>Add Recruiting Company</div>
                <div className='recruiting_input_Subheading'>
                    {slide1?'Your information':''}
                    {slide2?'Information of your Company':''}
                    {slide3?'Add Locations':''}
                </div>
            </div>
            <div className='recr_TabsDiv'> 
                <div className={slide1?'orangeTab recr_Tab' : 'recr_Tab'}></div><div className={slide2?'orangeTab recr_Tab' : 'recr_Tab'}></div><div className={slide3?'orangeTab recr_Tab' : 'recr_Tab'}></div>
            </div>

            {slide1?<div>
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
            </div>:<></>}

            {slide2?<div>
                <div>
                    <div>Company Name / Firm Name</div>
                    <input className='recr_input'></input>
                </div>
                <div>
                    <div >Company Service</div>
                    <input className='recr_input'></input>
                </div>
                <div>
                    <div>Select the Type of service you provide</div>
                    <input className='recr_input'></input>
                </div><div>
                    <div >Agency Briefing </div>
                    <input className='recr_input'></input>
                </div><div>
                    <div >No. of Positions</div>
                    <input className='recr_input'></input>
                </div>
            </div>:<></>}

            {slide3?<div>
                <div>
                    <div>Country</div>
                    <input className='recr_input'></input>
                </div>
                <div>
                    <div >State</div>
                    <input className='recr_input'></input>
                </div>
                <div>
                    <div >City</div>
                    <input className='recr_input'></input>
                </div>
            </div>:<></>}

            <div className='recr_btns_div'>
                {slide1?<button className='recruiting_next_btn' onClick={()=> {setslide2(true); setslide1(false)}}>Next</button>:<></>}

                {slide2?<><button className='recruiting_back_btn' onClick={()=> {setslide2(false); setslide1(true)}} >Back</button>
                <button className='recruiting_next_btn' onClick={()=> {setslide3(true); setslide2(false)}}>Next</button></>:<></>}

                {slide3?<><button className='recruiting_back_btn' onClick={()=> {setslide2(true); setslide3(false)}}>Back</button>
                <button className='recruiting_next_btn' onClick={()=> submitNewUser()}>Sign Up</button></>:<></>}

            </div>
        </div>

    </div>
    </>
  )
}

export default AddCompany
