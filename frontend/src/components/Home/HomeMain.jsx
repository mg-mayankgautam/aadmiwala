import React, {useState, useEffect} from 'react'
import axios from 'axios';
import bg from '../../assets/OBJECTS.png'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const HomeMain = () => {


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
    <div className='HomeMain'>

        <div className='landingContent'>
            <div className='landingHeadingDiv'>
                <div className='mainHead'>
                Connect. Simplify. Succeed.
                </div>

                <div className='subHead'>
                Empowering companies and candidates together
                </div>

                <div className='landingsubHead'>
                    B2B talent marketplace in Hub
                </div>
            </div>

            <div className='landingSearch'>
                <div>
                    <input className='searchInput' type='text' placeholder='Search for City / State / Services'/>
                    {/* <SearchIcon className='searchIcon'/> */}
                </div>

                <button className='searchBtn'>Search</button>

                <select className='searchdropdown' name="" id="">
                    <option value="">Services</option>
                    <option value="">City</option>
                    <option value="">State</option>
                </select>
            </div>

            <div className='freqSearch'>
                {/* <div className='freqSearchText'>Frequent Search</div> */}
                
                <div className='freqSearchBtns'>
                    <button>Facility Provider</button>
                    <button>Security Guard</button>
                    <button>Blue Collars</button>
                    <button>Office Boy</button>
                    <button>Housekeeping</button>
                    <button className='viewAllBtn'>View All</button>
                </div>
            </div>
        </div>

        {/* <div>
            <img src={landing} className='landingImg'/>
        </div> */}
    </div>

    <div className='FeaturedCompanies'>

        <div className='FC_headingDiv'>
            <div className='subHead'>
                Featured Companies
            </div>
            <div className='text'>Today's talent marketplace</div>
        </div>
        
        <div className='FC_container'>

            {companies&& companies.map(company=>

<Link to={`/company/${company._id}`}>
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
                        </Link>
                )}
            
           
        </div>

    </div>
    </>
  )
}

export default HomeMain