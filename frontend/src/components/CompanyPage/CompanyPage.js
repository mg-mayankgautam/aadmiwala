import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios';
import { useParams, Link, useLocation } from "react-router-dom";
import './CompanyPage.css'
import FeaturedCompanies from '../Home/FeaturedCompanies';
import Faq from '../Home/HomeComponents/Faq';
import Footer from '../Footer/Footer';

const CompanyPage = () => {

    const {id} = useParams();
    console.log(id);

    const [company, setCompany] = useState([])
    
    useEffect(()=>{

        const getCompanies= async()=>{
          try{
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanydata?id=${id}`);
            console.log(data);
            setCompany(data.data);
            console.log(company)
          }
          catch(err){console.log(err);}
        }
    
        getCompanies()
      
      },[]);

  return (
    <div className='CompanyPage'>

      
      <div className='companyDiv'>

          <div className='companyTopFlex'>

            <div className='companyData'>
              <div className='company_date'>Posted 2 Days ago</div>

              <div>Job Title</div>

              <div className='company_name'>{company.companyName}</div>

              <div>stars</div>

              <div>
                {company.address}    
                <br />
                {company.city&&company.city.map(cityy=><span id=''>{cityy}, </span>)}
                <br/>
                {company.country}
              </div>
            </div>

            <div className='companyImgsDiv'>
              <div><img src='https://drive.google.com/file/d/1iEIyL32uTJLwAxjQRwDgqBv4hvIrtDfr/view?usp=drive_link' alt="1" /> </div>
              <div><img src='https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="2" /> </div>
              <div><img src={company.image3} alt="3" /> </div>
              <div><img src={company.image4} alt="4" /> </div>
            </div>

          </div>

          
          <div className='company_facilities'>
            Provides {company.serviceType&&company.serviceType.map(service=><span id=''>{service}, </span>)}
          </div>
          
          <div className='company_desc'>
              Company Description: 
              <li>{company.agencyBriefing}</li> 
          </div>
          
      </div>
        
      <FeaturedCompanies/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default CompanyPage
