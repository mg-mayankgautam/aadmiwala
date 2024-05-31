import React, { useEffect } from 'react'
import Nav from './Nav/Nav'
import axios from 'axios';
import { useParams, Link, useLocation } from "react-router-dom";

const CompanyPage = () => {

    const {id} = useParams();
    console.log(id);
    
    useEffect(()=>{

        const getCompanies= async()=>{
          try{
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanydata?id=${id}`);
            console.log(data);
            const array = data.data
            //setCompanies(array);
            // setpublicLists(publiclists);
          }
          catch(err){console.log(err);}
        }
    
        getCompanies()
      
      },[]);

  return (
    <div>
     
        this is company page
    </div>
  )
}

export default CompanyPage
