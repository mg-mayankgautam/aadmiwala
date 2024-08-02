import React, {useRef, useEffect} from 'react'
import './ShareReq.css'
// import emailjs from '@emailjs/browser';
import axios from 'axios'


const ShareReq = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

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
    //     await emailjs.send('service_qkemi3i', 'template_x4w111d', {
    //         name: nameRef.current.value,
    //         email: emailRef.current.value,
    //         phone: phoneRef.current.value,
    //         location: locationRef.current.value,
    //         requirements: reqRef.current.value
    //     });
    //     alert("email successfully sent to admin");
    //   } 
    // catch (error) {
    //     console.log(error);
    //   }

  };


  return (
    <>
   

    <div className='ShareReq'>
        <div className='LC_content'>
            <div>
                <div className='LC_head'>Share Requirements</div>
                <div className='text'>Please enter the following details</div>
            </div>
            <form onSubmit={sendEmail} className='SR_Inputs'>
                <input type="text" ref={nameRef} placeholder='Full Name*' className='SR_input'/>
                <input type="text" ref={emailRef} placeholder='E Mail ID*' className='SR_input'/>
                <input type="text" ref={phoneRef} placeholder='Phone Number*' className='SR_input'/>
                <input type="text" ref={locationRef} placeholder='Location*' className='SR_input'/>
                {/* <input type="text" placeholder='Services*' className='SR_input'/> */}
                <input type="text" ref={reqRef} placeholder='Requirements*' className='SR_input LC_reqinput'/>
            {/* </div>
            <div> */}
                <button className='LC_btn' type='submit'>Submit</button>
            </form>
        </div>
        
    </div>
    </>
  )
}

export default ShareReq