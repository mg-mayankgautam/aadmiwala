import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import AddCompany from './components/AddRecruitmentCompany/AddCompany'
import Companies from './components/Companies/Companies';

function App() {

  // axios.defaults.withCredentials = true;
  // axios.defaults.Credentials= true;

  return (


    <Routes>
        
      <Route  path="/" element={<Layout />}>
            
            <Route index element={<HomePage />} /> 

            {/* <Route path="/blog/:id" element={<Blog/>}/> */}

            <Route path="about" element={<AboutPage />}/>   
            <Route path="addCompany" element={ <AddCompany/>}/>  
            <Route path="companies" element={ <Companies/>}/>  
           
      </Route>

      {/* <Route element={<RequireloginAuth />}> */}
              
            {/* <Route path='dashboard' element={<AdminDashboard/>}/> */}
      {/* </Route> */}
   
    
    </Routes> 
  );
}

export default App;
