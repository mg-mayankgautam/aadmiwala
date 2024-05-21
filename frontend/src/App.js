import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/Home/HomePage';

function App() {


  return (


    <Routes>
        
      <Route  path="/" element={<Layout />}>
            
            <Route index element={<HomePage />} /> 

            {/* <Route path="/blog/:id" element={<Blog/>}/> */}

            {/* <Route path="admin" element={<AdminPage />}/>    */}
                  
      </Route>

      {/* <Route element={<RequireloginAuth />}> */}
              
            {/* <Route path='dashboard' element={<AdminDashboard/>}/> */}
      {/* </Route> */}
   
    
    </Routes> 
  );
}

export default App;
