import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import axios from 'axios'


const LoginPage = ({ userLogged, setUserLogged }) => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  axios.defaults.withCredentials = true;
  const { setAuth } = useAuth();
  let { state } = useLocation();

  //console.log(state.prev);

  const navigate = useNavigate();
  const [PhoneNum, setPhoneNum] = useState('');//storing number

  const [Pwd, setPwd] = useState('');
  const [validPhone, setValidPhone] = useState(false);//valid number regex
  const [error, seterror] = useState(false)
  const [inputStyle, setinputStyle] = useState('');

  const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/

  useEffect(() => {
    const result = PHONE_REGEX.test(PhoneNum);

    setValidPhone(result);

  }, [PhoneNum])

  useEffect(() => {
    if (PhoneNum) {
      if (!validPhone) {
        setinputStyle('invalid');
      } else {
        setinputStyle('valid');
      }
    }
  }, [PhoneNum, validPhone]);


  useEffect(() => {

    if (error) {
      setinputStyle('invalid');
    }
    else {
      setinputStyle('');
    }

  }, [error])



  const submitUser = async (e) => {
    // e.preventDefault();


    if (PhoneNum && validPhone && Pwd) {
      try {
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { PhoneNum, Pwd })

        const axiosdata = data.data
        // console.log('/a/a/a',axiosdata);

        if (!axiosdata) {
          // console.log('wrong id');
          seterror(true);
        }
        else {
          const user = axiosdata.Username;
          setAuth({ user });
          // console.log('after login',user);
          setUserLogged(user);
          navigate(`/dashboard/${user}`);

          // navigate(`${state.prev.pathname}`)
        }

      }



      catch (err) { console.log(err); }
    }
  }

  const changePassword = async (e) => {
    e.preventDefault();


    if (PhoneNum && validPhone) {
      try {

        console.log(PhoneNum)
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/forgetpwd`, { PhoneNum })


        console.log(data.data)
        const axiosdata = data.data
        if (axiosdata) { setotpinput(e => !e) }
        else (console.log('number doesnt exist'))
        // console.log('/a/a/a',axiosdata);

        // if (!axiosdata) {
        //   // console.log('wrong id');
        //   seterror(true);
        // }
        // else {
        //   const user = axiosdata.Username;
        //   setAuth({ user });
        //   // console.log('after login',user);
        //   setUserLogged(user);
        //   navigate(`/dashboard/${user}`);

        //   // navigate(`${state.prev.pathname}`)
        // }

      }



      catch (err) { console.log(err); }
    }
  }


  const [forgotPWDclicked, setforgotPWDclicked] = useState(false);
  const [otpinput, setotpinput] = useState(false);
  const [OTP, setOTP] = useState();
  const [newpwdinput, setnewpwdinput] = useState(false)


  const submitOTP = async () => {
    console.log(OTP);
    try {
      const phone = '+91' + PhoneNum;
      const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verifypwdotp`, { phone, OTP })
      console.log('otp matched', data.data)
      if (data.data) {

        setnewpwdinput(e => !e);
      }
    }
    catch (e) { console.log(e) }
  }


  const submitnewPassword = async () =>{
    const phone = '+91' + PhoneNum;
    console.log(Pwd,OTP,phone);
    try {
     
      const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/changepassword`, { phone, OTP,Pwd })
      console.log(data.data)
      if (data.data) {
        setnewpwdinput(e=>!e);
        setforgotPWDclicked(e=>!e);
      }
    }
    catch (e) { console.log(e) }
  }

  return (
    <>

      <div className='LoginPage'>


        {!newpwdinput ?
         ( !forgotPWDclicked ?
            <div className="LoginBox"  >
          <div className='loginHead'>Login</div>

          <div className='LoginPhoneDiv'>

            <div>Enter Phone Number</div>
            <input className={`login_input ${inputStyle}`} type='Number'
              placeholder='Phone Number'
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            {PhoneNum && !validPhone ? (<p className='loginerror'>
              add valid phone no. without dialing code.
            </p>) : <></>}
          </div>

          <div className='LoginPwdDiv'>

            <div>Enter Password</div>
            <input className={`login_input`} type='password'
              placeholder='Password'
              onChange={(e) => setPwd(e.target.value)}
            />

            <div>
              <button className='forgetPassBtn'
                onClick={() => { setforgotPWDclicked(e => !e) }}
              >forgot password?</button></div>


            {!PhoneNum || !Pwd ? (<p className='loginerror'>
              please complete all fields.
            </p>) : <></>}
          </div>


          <button type="submit" className='LoginSubmit'
            onClick={() => submitUser()}>
            Login
          </button>

          {error ? <p className='invalidUserError'>Invalid Username or Password.</p> : <></>}

            </div>
            
            :
            <div className="LoginBox"  >
          <div className='loginHead'>Reset Password</div>

          <div className='LoginPhoneDiv'>

            <div>Enter Phone Number</div>
            <input className={`login_input ${inputStyle}`} type='Number'
              placeholder='Phone Number'
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            {PhoneNum && !validPhone ? (<p className='loginerror'>
              add valid phone no. without dialing code.
            </p>) : <></>}
          </div>

          {otpinput ? <div className='LoginPwdDiv'>

            <div>Enter OTP</div>
            <input
              className={`login_input`} type='password'
              placeholder='OTP'
              onChange={(e) => setOTP(e.target.value)}
            />




            {/* {!PhoneNum || !Pwd ? (<p className='loginerror'>
  please complete all fields.
</p>) : <></>} */}
          </div> : <></>}


          {!otpinput ? <button
            type="submit"
            className='LoginSubmit'
            onClick={(e) => changePassword(e)}>
            Send OTP
          </button>

            : <button onClick={() => submitOTP()}>submit OTP</button>
          }


          {error ? <p className='invalidUserError'>Invalid Username or Password.</p> : <></>}

            </div>
            )
             : (<div className="LoginBox"  >
              <div className='loginHead'>enter new password</div>
    
              
    
              <div className='LoginPwdDiv'>
    
                
                <input className={`login_input`} type='password'
                  placeholder='Password'
                  onChange={(e) => setPwd(e.target.value)}
                />
    
               
    
    
              </div>
    
    
              <button type="submit" className='LoginSubmit'
                onClick={() => submitnewPassword()}
                
                >
                Submit New Password
              </button>
    
             
    
                </div>)}





      </div>
    </>
  )
}

export default LoginPage
