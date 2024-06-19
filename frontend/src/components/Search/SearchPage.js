import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Company from '../Company/Company';

const SearchPage = ({searchValue,setSearchValue}) => {

    // useEffect(()=>{
    //     console.log(searchValue);
    // },[searchValue])

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
                        <Company company={company}/>
                    </Link>
                )}
    
            </div>

        
    </div>

  )
}

export default SearchPage