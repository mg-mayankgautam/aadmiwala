import React from 'react'
import { useParams, Link, useLocation,useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios';


const ComparisonPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [company, setCompany] = useState([])

 
    useEffect(() => {

        window.scrollTo(0, 0)
    
        const getCompanies = async () => {
          try {
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanydata?id=${id}`);
            console.log(data);
             setCompany(data.data);
            // console.log(company)
          }
          catch (err) { console.log(err); }


          try {
            // const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanyfilterdata?id=${id}`);
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanyfilterdata?id=${id}`);
            console.log(data);
             setCompany(data.data);
            // console.log(company)
          }
          catch (err) { console.log(err); 

          }




        }


    
        getCompanies()
    
      }, []);
  
  


  return (
    <div>
        this is comparison page

    </div>
  )
}

export default ComparisonPage
