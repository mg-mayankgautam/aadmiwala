import React, {useEffect, useState} from 'react'
import logo from '../../assets/logo.png'
import useAuth from '../../hook/useAuth';
import './Nav.css'
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = ({ userLogged, setUserLogged}) => {

  const {auth, setAuth}= useAuth();
  const [callus, setcallus]= useState(false);
  const [showMobileNav, setShowMobileNav]= useState(false);

  useEffect(() => {
        
      
    const verifyAuth = async ()=>{
        try {
            const URL =  `${process.env.REACT_APP_BACKEND_URL}/isauth`;
            //console.log('url',URL);
            const response = await axios.get(URL);

            // console.log(response.data.auth);
           if(!response.data.auth){
           
                 
           //    console.log('auth')
               
               }


              else if(response.data.auth){
               
                // console.log(response.data.auth);
               const user = response.data.auth;
               setAuth({user});
               setUserLogged(user);
              
              }   
       
     } catch (err) {
             if (err.response) {
               // Not in the 200 response range 
               console.log(err.response.data);
               console.log(err.response.status);
               console.log(err.response.headers);
             } else {
               console.log(`Error: ${err.message}`);
             }
     }
    }  
    
    

  verifyAuth();
}, [])


const handleLogout = async() =>{
  // console.log('logout');
  try{
    const data = await axios.post( `${process.env.REACT_APP_BACKEND_URL}/logout`);
    
    if(!data.data){
      // console.log('data.data',data.data)
    //  console.log('kuch ni aya',auth)
      const boo = data.data;
    setAuth('');
    setUserLogged('');
   // navigate(0)
  }
    //console.log(data);
    //console.log(auth);
           
  }
  catch(e){console.log(e)}
}


  return (
    <div className='Nav'>
        <div>
            <a href="/"><img src={logo} className='navLogo'/></a>
        </div>
        <div className='navItems'>
            <div>Enterprise</div>
            <div> <a href="about">About Us</a></div>
            
            <div>
              <Link to={`sharerequirements`} >Share Requirements</Link>
            </div>

            <div className='navItemBold'>
                
                <Link to={`addCompany`} >+ Add Service Providers</Link>
            
            </div>
        </div>
        <div className='navBtns'>
            <button className={callus? 'navSignupBtn navbtnwidth' : 'navSignupBtn' }
            onClick={()=> setcallus(!callus)}> <CallIcon/>
              {callus? 
                <> 9155018111</>
              : 
              <>
                Call Us
              </>}
            </button>

            {auth.user? 
            <>
            <Link to={`/dashboard/${auth.user}`}>
                <button className='navLoginBtn'>Dashboard</button>
            </Link>
            
            <button className='navLoginBtn' onClick={handleLogout}>Logout</button>
            </>
            
            :
            <Link to={`login`}>
                <button className='navLoginBtn'>Log In</button>
            </Link>
        }

            
        </div>

        <div className='hamburgerIcon' 
          onClick={()=> setShowMobileNav(true)}>
            <MenuIcon/>
        </div>

        {
          showMobileNav? 
            <div className='mobileNavContainer'>

              <div className='mobileNav'>

                  <div className='closeMobileNavBtn' onClick={()=> setShowMobileNav(false)}>X</div>

                  <div className='mobilenavItems'>
                      <div>Enterprise</div>
                      <div> <a href="about">About Us</a></div>
                      
                      <div>
                        <Link to={`sharerequirements`} >Share Requirements</Link>
                      </div>

                      <div className='navItemBold'>
                          
                          <Link to={`addCompany`} >+ Add Service Providers</Link>
                      
                      </div>
                  </div>

                  <div className='mobilenavBtns'>
                      <button className={callus? 'navSignupBtn navbtnwidth' : 'navSignupBtn' }
                      onClick={()=> setcallus(!callus)}> <CallIcon/>
                        {callus? 
                          <> 9155018111</>
                        : 
                        <>
                          Call Us
                        </>}
                      </button>

                      {auth.user? 
                      <>
                      <Link to={`/dashboard/${auth.user}`}>
                          <button className='navLoginBtn'>Dashboard</button>
                      </Link>
                      
                      <button className='navLoginBtn' onClick={handleLogout}>Logout</button>
                      </>
                      
                      :
                      <Link to={`login`}>
                          <button className='navLoginBtn'>Log In</button>
                      </Link>
                  }

                      
                  </div>
              </div>

            </div>

            :
            <></>
        }
    </div>
  )
}

export default Nav