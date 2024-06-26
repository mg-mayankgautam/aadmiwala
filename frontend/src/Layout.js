import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


const Layout = ({ userLogged, setUserLogged}) => {

  return (
  
    <div className="App">
      
      <Nav userLogged={userLogged} setUserLogged={setUserLogged} />

      <Outlet/>

      <Footer/>
    </div>
    
  )
}

export default Layout
