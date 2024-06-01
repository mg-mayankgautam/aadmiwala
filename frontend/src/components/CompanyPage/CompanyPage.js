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

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
    useEffect(()=>{

      // window.

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
    <>
    <div className='CompanyPage'>

      
      <div className='companyDiv'>

          <div className='companyTopFlex'>

            <div className='companyData'>
              <div className='company_date'>Posted 2 Days ago</div>

              <div className='jobTitle'>Job Title</div>

              <div className='company_name'>{company.companyName}</div>

              <div>stars</div>

              <div>
                {/* {company.address}     */}
                {/* <br /> */}
                {company.city&&company.city.map(cityy=><span id=''>{cityy}, </span>)}
                <br/>
                {company.country}
              </div>

            </div>

            <div className='companyImgsDiv'>
              {company.imageURLs&& company.imageURLs.map(img =>
                  <div><img src={img.url} alt="1" /> </div>
              )}
            </div>

          </div>

          
          <div className='company_facilities'>
            Provides {company.serviceType&&company.serviceType.map(service=><span id=''>{service}, </span>)}
          </div>
          
          <div className='company_desc'>
              Company Description: 
              <li>{company.agencyBriefing}</li> 
          </div>
          
          <button className='getinTouchBtn'>Get in Touch</button>
      </div>
     
      

    </div>
       
    <FeaturedCompanies/>
      <Faq/>
    <Footer/>
    </>
  )
}

export default CompanyPage
