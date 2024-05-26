import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
  
    <div className="App">
      {/* <Nav/> */}
   
      <Outlet/>

      {/* <Footer/> */}
    </div>
    
  )
}

export default Layout
