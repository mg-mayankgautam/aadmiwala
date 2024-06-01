import React, {useEffect, useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoginPage = () => {
  const [error, seterror] = useState(false)
  axios.defaults.withCredentials = true;
  // const {setAuth}=useAuth();
    
  const navigate = useNavigate();
  const [PhoneNum, setPhoneNum] = useState('');
  const [Pwd, setPwd] = useState('');
  const [inputStyle, setinputStyle] = useState('');
  // let { state } = useLocation();
    
    //console.log(state.prev);

    useEffect(()=>{

        if(error){
            setinputStyle('invalid');
        }
        else{
            setinputStyle('');
        }
    
    }, [error])


    const submitUser = async (e) => {
        e.preventDefault();
       

        try{
          const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {PhoneNum, Pwd})

          const axiosdata = data.data
          console.log('/a/a/a',axiosdata);

            if(!axiosdata){
              console.log('wrong id');
              seterror(true);
            }
            else{            
              const user = axiosdata.Username;
                // setAuth({user});
                // console.log('after login',user);
                // setUserName(user);
                navigate('/dashboard');
                
                // navigate(`${state.prev.pathname}`)
              }                
             
        }

          
  
      catch(err){console.log(err);}
    }



  return (
    <>

    <div className='LoginPage'>

        <div className="LoginBox"  >
          <div className='loginHead'>Login</div> 
      
          <div>
            <div>Enter Phone Number(include dialing code, eg: +9198XXXXXXXX)</div>
            <input className={`login_input ${inputStyle}`} type='Number'    
              placeholder='Phone Number'
              onChange={(e)=>setPhoneNum(e.target.value)}
          />
          </div>
          
          <div>
            <div>Enter Password</div>
            <input className={`login_input ${inputStyle}`} type='password'
              placeholder='Password' 
              onChange={(e)=>setPwd(e.target.value)}
          />
          </div>
          

          <button type="submit" className='LoginSubmit' 
            onClick={(e)=> submitUser(e)}>
              Login
          </button>

          {error?<p className='error'>Invalid Username or Password.</p>:<></>}
      
        </div>
    </div>
    </>
  )
}

export default LoginPage
