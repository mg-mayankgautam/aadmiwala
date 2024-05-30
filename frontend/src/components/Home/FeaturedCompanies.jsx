import React, {useState, useEffect} from 'react'
import axios from 'axios';

const FeaturedCompanies = () => {

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
    <div className='FeaturedCompanies'>

        <div className='FC_headingDiv'>
            <div className='subHead'>
                Featured Companies
            </div>
            <div className='text'>Today's talent marketplace</div>
        </div>
        
        <div className='FC_container'>

            {companies&& companies.map(company=>

                        <div className='FC_box'>
                            <div className='new'>New</div>
                            <div className='FC_name'>{company.companyName}</div>
                            <div>stars</div>
                            <div>{company.city}<br/>{company.state}, {company.country}</div>
                            <div className='FC_facilities'>Provides {company.serviceType.map(service=><span>{service}, </span>)}</div>
                            <div className='FC_desc'>
                            Company Description: <li>{company.agencyBriefing}</li> 
                            </div>
                            <div className='FC_date'>Posted 2 Days ago</div>
                        </div>

                )}
            
           
        </div>

    </div>
  )
}

export default FeaturedCompanies