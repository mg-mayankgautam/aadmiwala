import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import AddCompany from './components/AddRecruitmentCompany/AddCompany'
import Companies from './components/Companies/Companies';
import CompanyPage from './components/CompanyPage/CompanyPage';
import LoginPage from './components/Login/LoginPage';
import SearchPage from './components/Search/SearchPage';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, useRef } from 'react';
import axios from 'axios'
import RequireAuth from './RequireAuth';
import RequireloginAuth from './RequireloginAuth';
import ShareReq from './components/ShareReq/ShareReq';



function App() {

  axios.defaults.withCredentials = true;
  // axios.defaults.Credentials= true;

  const [searchValue, setSearchValue] = useState([]);
  const [userLogged, setUserLogged] = useState('');
  


  // const connect_ref = useRef(null);


  return (


    <Routes>
        
      <Route  path="/" element={<Layout userLogged={userLogged} setUserLogged={setUserLogged} />}>
            
              <Route 
              index element={<HomePage searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              />} /> 

              {/* <Route path="/blog/:id" element={<Blog/>}/> */}

              <Route path="about" element={<AboutPage/>}/>   
              <Route path="addCompany" element={ <AddCompany/>}/>  
              <Route path="companies" element={ <Companies/>}/>  
              <Route path="company/:id" element={<CompanyPage/>}/>
              <Route path="sharerequirements" element={<ShareReq/>}/>

              <Route element={<RequireloginAuth/>}>
                <Route path="login"  element={<LoginPage userLogged={userLogged} setUserLogged={setUserLogged}/>}/>
              </Route>


              <Route path="search/:value" element={<SearchPage searchValue={searchValue} setSearchValue={setSearchValue} />}/>

              <Route element={<RequireAuth />}>

                  <Route path="dashboard/:id" element={<Dashboard/>}/>
              </Route>
      
           
      </Route>

      
   
    
    </Routes> 
  );
}

export default App;
