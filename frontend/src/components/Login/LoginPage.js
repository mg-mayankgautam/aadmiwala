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
    e.preventDefault();


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

        //const axiosdata = data.data
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

  return (
    <>

      <div className='LoginPage'>

        {!forgotPWDclicked?
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
                <button
                onClick={()=>{setforgotPWDclicked(e=>!e)}}
                >forgot password?</button></div>


              {!PhoneNum || !Pwd ? (<p className='loginerror'>
                please complete all fields.
              </p>) : <></>}
            </div>


            <button type="submit" className='LoginSubmit'
              onClick={(e) => submitUser(e)}>
              Login
            </button>

            {error ? <p className='invalidUserError'>Invalid Username or Password.</p> : <></>}

          </div>:
          


          
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

            {/* <div className='LoginPwdDiv'>

              <div>Enter Password</div>
              <input className={`login_input`} type='password'
                placeholder='Password'
                onChange={(e) => setPwd(e.target.value)}
              />

              <div><button>forgot password?</button></div>


              {!PhoneNum || !Pwd ? (<p className='loginerror'>
                please complete all fields.
              </p>) : <></>}
            </div> */}


            <button type="submit" className='LoginSubmit'
              onClick={(e) => changePassword(e)}>
              Send OTP
            </button>

            {error ? <p className='invalidUserError'>Invalid Username or Password.</p> : <></>}

          </div>
        }




      </div>
    </>
  )
}

export default LoginPage
