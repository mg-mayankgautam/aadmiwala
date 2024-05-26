import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'
import CallIcon from '@mui/icons-material/Call';


const Nav = () => {
  return (
    <div className='Nav'>
        <div>
            <a href="/"><img src={logo} className='navLogo'/></a>
        </div>
        <div className='navItems'>
            <div>Enterprise</div>
            <div> <a href="about">About Us</a></div>
            <div>Share Requirements</div>
            <div className='navItemBold'
            
            ><a href="addCompany">+ Add Recruiting Company</a></div>
        </div>
        <div className='navBtns'>
            <button className='navSignupBtn'> <CallIcon/> Call Us</button>
            <button className='navLoginBtn'>Log In</button>
        </div>
    </div>
  )
}

export default Nav