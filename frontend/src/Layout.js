import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';


const Layout = ({connect_ref, userLogged, setUserLogged, SRmodal, setSRmodal}) => {

  return (
  
    <div className="App">
      
      <Nav connect_ref={connect_ref} userLogged={userLogged} setUserLogged={setUserLogged} SRmodal={SRmodal} setSRmodal={setSRmodal}/>

      <Outlet/>

      {/* <Footer/> */}
    </div>
    
  )
}

export default Layout
