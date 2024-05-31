import React from 'react'
import logo from '../../assets/logo.png'
import './Nav.css'
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';


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
            <div className='navItemBold'>
                
                <Link to={`addCompany`} >+ Add Recruiting Company</Link>
            
            </div>
        </div>
        <div className='navBtns'>
            <button className='navSignupBtn'> <CallIcon/> Call Us</button>

            <Link to={`login`}>
                <button className='navLoginBtn'>Log In</button>
            </Link>
        </div>
    </div>
  )
}

export default Nav