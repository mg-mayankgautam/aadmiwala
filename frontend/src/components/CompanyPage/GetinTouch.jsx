import React, {useRef, useEffect} from 'react'
// import emailjs from '@emailjs/browser';
import axios from 'axios';


const GetinTouch = ({company}) => {

    // useEffect(() => emailjs.init("v5csxvz6IFDcQ0NZA"), []);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    

  const sendEmail = async(e) => {
    e.preventDefault();
    console.log(nameRef.current.value , emailRef.current.value ,phoneRef.current.value,);
    
    const postdata = {name: nameRef.current.value , email: emailRef.current.value , phone: phoneRef.current.value, postedby : company.fullName,
      companyname : company.companyName}
 
    try{
      const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getintouch`,{postdata })
    }
    catch(e) {console.log(e)}
  };

  return (
    <div className='GetinTouchDiv'>

        <div className='text'>
            Please enter the following details
        </div>

        <form onSubmit={sendEmail} className='LC_Inputs'>
            <input type="text" ref={nameRef} placeholder='Full Name*' className='GIT_input'/>
            <input type="text" ref={emailRef} placeholder='E Mail ID*' className='GIT_input'/>
            <input type="text" ref={phoneRef} placeholder='Phone Number*' className='GIT_input'/>
            
            <button className='getinTouchBtn' type='submit'>Send</button>
        </form>

    </div>
  )
}

export default GetinTouch