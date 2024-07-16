import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';
import Company from '../Company/Company';

const FeaturedCompanies = () => {

    const [companies, setCompanies] =useState([])

    useEffect(()=>{

        const getCompanies= async()=>{
          try{
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallcompanies`);
            // console.log(data);
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
            <div className='FC_subhead'>
                <div className='subHead'>Featured Companies</div>
                <Link to={'/companies'}>
                  <div className='FC_viewAllBtn'>View All <EastIcon/></div>
                </Link>
            </div>
            <div className='text'>Today's talent marketplace</div>
        </div>
        
        <div className='FC_container'>

        {companies.length===0 ?

          <div>Loading</div>

        :
          companies.map(company=>

              <Link to={`/company/${company._id}`} key={company._id}>
                        <Company company={company}/>
              </Link>
            )}
            
           
        </div>

    </div>
  )
}

export default FeaturedCompanies