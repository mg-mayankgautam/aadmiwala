import React, {useEffect, useState} from 'react'
import './Companies.css'
import axios from 'axios'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';


const Companies = () => {
    
    const [companies, setCompanies] =useState([])

    useEffect(()=>{

        const getCompanies= async()=>{
          try{
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallcompanies`);
            console.log(data);
            const array = data.data
            setCompanies(array);
            // setpublicLists(publiclists);
          }
          catch(err){console.log(err);}
        }
    
        getCompanies()
      
      },[]);


  return (
    <>

    {/* <Nav/> */}
    <div className='Companies'>

            <div>
                <div className='subHead'>
                    Companies
                </div>
                <div className='text'>Today's talent marketplace</div>
            </div>

            <div className='Companies_container'>

                {companies&& companies.map(company=>
                    <Link to={`/company/${company._id}`} key={company._id}>
                        <div className='company_box'>
                            <div className='new'>New</div>
                            <div className='FC_name'>{company.companyName}</div>
                            <div>stars</div>
                            <div>{company.city.map(cityy=><span id=''>{cityy}, </span>)}<br/>
                            {/* {company.state}, */}
                             {company.country}</div>
                            <div className='FC_facilities'>Provides {company.serviceType.map(service=><span id=''>{service}, </span>)}</div>
                            <div className='FC_desc'>
                            Company Description: <li>{company.agencyBriefing}</li> 
                            </div>
                            <div className='FC_date'>Posted 2 Days ago</div>
                        </div>
                    </Link>
                )}
    
            </div>

        
    </div>

    </>
  )
}

export default Companies