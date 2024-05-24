import React from 'react'
import landing from '../../assets/landing.png'

const HomeMain = () => {
  return (
    <>
    <div className='HomeMain'>

        <div className='landingContent'>
            <div className='landingHeadingDiv'>
                <div className='mainHead'>
                    Connecting Businesses With Top Talent <br /> And Agencies For Mutual Success.
                </div>

                <div className='subHead'>
                Empowering companies and candidates together
                </div>

                <div className='landingsubHead'>
                    B2B talent marketplace in Hub
                </div>
            </div>

            <div className='landingSearch'>
                <input className='searchInput' type='text' placeholder='Search for City / State / Services'/>

                <button className='searchBtn'>Search</button>

                <select className='searchdropdown' name="" id="">
                    <option value="">Services</option>
                    <option value="">City</option>
                    <option value="">State</option>
                </select>
            </div>

            <div className='freqSearch'>
                <div className='freqSearchText'>Frequent Search</div>
                
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

            <div className='FC_box'>
                <div className='new'>New</div>
                <div className='FC_name'>ABC Recruiting Firm</div>
                <div>stars</div>
                <div>XYZ Office, <br/> Delhi, India</div>
                <div className='FC_facilities'>Provide Blue Collars & Facilities Provider</div>
                <div className='FC_desc'>
                Company Description: <li>Brief Description: XYZ Corporation is seeking 15 Facilities Providers to join our team at the XYZ Office. The Facilities Providers will be responsible for maintaining the cleanliness and functionality of our office facilities.</li> 
                </div>
                <div className='FC_date'>Posted 2 Days ago</div>
            </div>
            <div className='FC_box'>
                <div className='new'>New</div>
                <div className='FC_name'>ABC Recruiting Firm</div>
                <div>stars</div>
                <div>XYZ Office, <br/> Delhi, India</div>
                <div className='FC_facilities'>Provide Blue Collars & Facilities Provider</div>
                <div className='FC_desc'>
                Company Description: <li>Brief Description: XYZ Corporation is seeking 15 Facilities Providers to join our team at the XYZ Office. The Facilities Providers will be responsible for maintaining the cleanliness and functionality of our office facilities.</li> 
                </div>
                <div className='FC_date'>Posted 2 Days ago</div>
            </div>
            <div className='FC_box'>
                <div className='new'>New</div>
                <div className='FC_name'>ABC Recruiting Firm</div>
                <div>stars</div>
                <div>XYZ Office, <br/> Delhi, India</div>
                <div className='FC_facilities'>Provide Blue Collars & Facilities Provider</div>
                <div className='FC_desc'>
                Company Description: <li>Brief Description: XYZ Corporation is seeking 15 Facilities Providers to join our team at the XYZ Office. The Facilities Providers will be responsible for maintaining the cleanliness and functionality of our office facilities.</li> 
                </div>
                <div className='FC_date'>Posted 2 Days ago</div>
            </div>
           
        </div>

    </div>
    </>
  )
}

export default HomeMain