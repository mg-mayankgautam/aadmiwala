import React, {useRef, useEffect} from 'react'
import connect from '../../../assets/connect.png'
// let transporter = nodemailer.createTransport(transport[, defaults])
// import emailjs from '@emailjs/browser';
import './Connect.css'
import axios from 'axios'


const Connect = ({connect_ref}) => {

    // useEffect(() => emailjs.init("v5csxvz6IFDcQ0NZA"), []);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const locationRef = useRef();
    const reqRef = useRef();

  const sendEmail = async(e) => {
    e.preventDefault();
    console.log(nameRef.current.value , emailRef.current.value ,phoneRef.current.value, locationRef.current.value ,reqRef.current.value );
    
    const postdata = {name: nameRef.current.value , email: emailRef.current.value , phone: phoneRef.current.value, location: locationRef.current.value , requirements: reqRef.current.value}
 
    try{
      const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/sharerequirements`,{postdata })
    }
    catch(e) {console.log(e)}
  };


  return (
    <>
   

    <div className='LetsConnect' ref={connect_ref}>
        <div className='LC_content'>
            <div>
                <div className='LC_head'>Let's Connect</div>
                <div className='text'>Please enter the following details</div>
            </div>
            <form onSubmit={sendEmail} className='LC_Inputs'>
                <input type="text" ref={nameRef} placeholder='Full Name*' className='connectinput'/>
                <input type="text" ref={emailRef} placeholder='E Mail ID*' className='connectinput'/>
                <input type="text" ref={phoneRef} placeholder='Phone Number*' className='connectinput'/>
                <input type="text" ref={locationRef} placeholder='Location*' className='connectinput'/>
                {/* <input type="text" placeholder='Services*' className='connectinput'/> */}
                <input type="text" ref={reqRef} placeholder='Requirements*' className='connectinput LC_reqinput'/>
            {/* </div>
            <div> */}
                <button className='LC_btn' type='submit'>Submit</button>
            </form>
        </div>
        <div className='LC_imgDiv'>
            <img src={connect}/>
        </div>
    </div>
    </>
  )
}

export default Connect