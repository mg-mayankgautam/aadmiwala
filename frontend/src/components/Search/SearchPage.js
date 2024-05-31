import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const SearchPage = ({searchValue,setSearchValue}) => {

    useEffect(()=>{
        console.log(searchValue);
    },[searchValue])

  return (

    <div className='Companies'>

            <div>
                <div className='subHead'>
                    Companies
                </div>
                <div className='text'>Your Search Results</div>
            </div>

            <div className='Companies_container'>

                {searchValue&& searchValue.map(company=>
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

  )
}

export default SearchPage