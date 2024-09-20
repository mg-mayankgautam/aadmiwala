import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import axios from 'axios'

const AdminLogin = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  //   axios.defaults.withCredentials = true;
    const {setAuth}=useAuth();
  let { state } = useLocation();

  const navigate = useNavigate();
  const [ID, setID] = useState('');
  const [Pwd, setPwd] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [error, seterror] = useState(false)
  const [inputStyle, setinputStyle] = useState('');

  const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/

  // useEffect(() => {
  //   const result = PHONE_REGEX.test(PhoneNum);

  //   setValidPhone(result);

  // }, [PhoneNum])

  // useEffect(() => {
  //   if (PhoneNum) {
  //     if (!validPhone) {
  //       setinputStyle('invalid');
  //     } else {
  //       setinputStyle('valid');
  //     }
  //   }
  // }, [PhoneNum, validPhone]);


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


    if (ID && Pwd) {


      try {
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/adminlogin`, { ID, Pwd })

        const axiosdata = data.data

        if (!axiosdata) {
          seterror(true);
        }
        else {
          const admin = axiosdata.ID;
          // setAuth({admin});
          // setUserLogged(user);
           navigate(`/admin/dashboard/${admin}`);
        }

      }



      catch (err) { console.log(err); }
    }

  }



  return (
    <>

      <div className='LoginPage'>

        <div className="LoginBox"  >
          <div className='loginHead'>Login</div>

          <div className='LoginPhoneDiv'>

            <div>Enter User ID</div>
            <input
              className={`login_input ${inputStyle}`}
              // type='Number'
              // placeholder='Phone Number'
              onChange={(e) => setID(e.target.value)}
            />
            {/* {PhoneNum && !validPhone ? (<p className='loginerror'>
              add valid phone no. without dialing code.
            </p>) : <></>} */}
          </div>

          <div className='LoginPwdDiv'>

            <div>Enter Password</div>
            <input className={`login_input`} type='password'
              placeholder='Password'
              onChange={(e) => setPwd(e.target.value)}
            />

            {!ID || !Pwd ? (<p className='loginerror'>
              please complete all fields.
            </p>) : <></>}
          </div>


          <button type="submit" className='LoginSubmit'
            onClick={(e) => submitUser(e)}
          >
            Login
          </button>

          {error ? <p className='invalidUserError'>Invalid Username or Password.</p> : <></>}

        </div>
      </div>
    </>
  )
}

export default AdminLogin
