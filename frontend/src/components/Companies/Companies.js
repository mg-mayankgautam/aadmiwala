import React, {useEffect, useState} from 'react'
import './Companies.css'
import axios from 'axios'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import Company from '../Company/Company';


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
                        <Company company={company}/>
                    </Link>
                )}
    
            </div>

        
    </div>

    </>
  )
}

export default Companies