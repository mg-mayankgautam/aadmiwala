import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios';
import { useParams, Link, useLocation } from "react-router-dom";
import './CompanyPage.css'
import FeaturedCompanies from '../Home/FC/FeaturedCompanies';
import Faq from '../Home/Faq/Faq';
import Footer from '../Footer/Footer';
import GetinTouch from './GetinTouch';

const CompanyPage = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const {id} = useParams();
    console.log(id);

    const [company, setCompany] = useState([])
    const [modal, setModal] = useState(false)
    

    // useEffect(() => {
    //   window.scrollTo(0, 0)
    // }, [])
    
    useEffect(()=>{

      window.scrollTo(0, 0)

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
      
      },[id]);

  return (
    <>
    <div className='CompanyPage'>

      
      <div className='companyDiv'>

          <div className='companyTopFlex'>

            <div className='companyData'>
              <div className='company_date'>Posted {company.date}</div>

             

              <div className='company_name'>{company.companyName}</div>


              <div>
                {/* {company.address}     */}
                {/* <br /> */}
                {company.city&&company.city.map(cityy=><span id=''>{cityy}, </span>)}
                <br/>
                {company.country}
              </div>

              <div className='company_desc'>
                {company.agencyBriefing}
              </div>

              <div className='company_facilities'>
                Provides {company.serviceType&&company.serviceType.map(service=><span id=''>{service}, </span>)}
              </div>

              <div className='company_PR'>Average Price Range: {company.priceRange} INR</div>

              <button onClick={()=> setModal(true)} className='getinTouchBtn'>Get in Touch</button>

            </div>

            <div className='companyImgsDiv'>
              {company.imageURLs&& company.imageURLs.map((img,i) =>
                  <div key={i}><img src={img.url} alt="1" /> </div>
              )}
            </div>

          </div>

          
          {/* <div className='company_facilities'>
            Provides {company.serviceType&&company.serviceType.map(service=><span id=''>{service}, </span>)}
          </div> */}
          
          {/* <div className='company_desc'>
              Company Description: 
              <li>{company.agencyBriefing}</li> 
          </div> */}
          
          {/* <button onClick={()=> setModal(true)} className='getinTouchBtn'>Get in Touch</button> */}

          {modal? <GetinTouch company={company}/> : <></>}

      </div>
     
      

    </div>
       
    <FeaturedCompanies/>
      <Faq/>
    {/* <Footer/> */}
    </>
  )
}

export default CompanyPage
