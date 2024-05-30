import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const HomeMain = () => {


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

    </>
  )
}

export default HomeMain