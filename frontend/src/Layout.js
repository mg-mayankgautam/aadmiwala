import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomeNav from './components/HomeNav/HomeNav';
import Footer from './components/Footer/Footer';

const Layout = ({ userLogged, setUserLogged }) => {
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/'){
      setIsHome(true);
    }
    else{
      setIsHome(false)
    }
  }, [location]);

  return (
    <div className="App">
      {isHome ? (
        <HomeNav userLogged={userLogged} setUserLogged={setUserLogged} />
      ) : (
        <Nav userLogged={userLogged} setUserLogged={setUserLogged} />
      )}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
