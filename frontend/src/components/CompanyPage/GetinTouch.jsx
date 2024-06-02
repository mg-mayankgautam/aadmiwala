import React, {useRef, useEffect} from 'react'
import emailjs from '@emailjs/browser';


const GetinTouch = ({company}) => {

    useEffect(() => emailjs.init("v5csxvz6IFDcQ0NZA"), []);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    // const companyname = company.Phone;

    useEffect(()=>{
        // console.log(postedby, companyname, company)
    },[])

  const sendEmail = async(e) => {
    e.preventDefault();

    try {
        await emailjs.send('service_qkemi3i', 'template_ba0demc', {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            postedby : company.fullName,
            companyname : company.companyName,
        });
        alert("email successfully sent check inbox");
      } 
    catch (error) {
        console.log(error);
      }
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