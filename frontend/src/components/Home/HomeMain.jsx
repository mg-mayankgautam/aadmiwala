import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// const combinedSearch = [
//     { label: 'AC/Telephone Repair', id: 'services' },
//     { label: 'Administrative Support', id: 'services' },
//     { label: 'Agra', id: 'cities' },
//     { label: 'Ahmedabad', id: 'cities' },
//     { label: 'Aligarh', id: 'cities' },
//     { label: 'Amritsar', id: 'cities' },
//     { label: 'Aurangabad', id: 'cities' },
//     { label: 'Bangalore', id: 'cities' },
//     { label: 'Bhopal', id: 'cities' },
//     { label: 'Bilaspur', id: 'cities' },
//     { label: 'Blue Collar', id: 'services' },
//     { label: 'Catering Service', id: 'services' },
//     { label: 'Chandigarh', id: 'cities' },
//     { label: 'Chennai', id: 'cities' },
//     { label: 'Customer Service Representatives', id: 'services' },
//     { label: 'Delhi', id: 'cities' },
//     { label: 'Dhanbad', id: 'cities' },
//     { label: 'Electrician/Plumber Service', id: 'services' },
//     { label: 'Facility Service', id: 'services' },
//     { label: 'Faridabad', id: 'cities' },
//     { label: 'Gaya', id: 'cities' },
//     { label: 'Ghaziabad', id: 'cities' },
//     { label: 'Guwahati', id: 'cities' },
//     { label: 'Gwalior', id: 'cities' },
//     { label: 'Haora', id: 'cities' },
//     { label: 'Haldwani', id: 'cities' },
//     { label: 'Housekeeping Services', id: 'services' },
//     { label: 'Hyderabad', id: 'cities' },
//     { label: 'IT Support', id: 'services' },
//     { label: 'Indore', id: 'cities' },
//     { label: 'Jabalpur', id: 'cities' },
//     { label: 'Jaipur', id: 'cities' },
//     { label: 'Jamshedpur', id: 'cities' },
//     { label: 'Kanpur', id: 'cities' },
//     { label: 'Kalyan', id: 'cities' },
//     { label: 'Kolkata', id: 'cities' },
//     { label: 'Lucknow', id: 'cities' },
//     { label: 'Ludhiana', id: 'cities' },
//     { label: 'Madurai', id: 'cities' },
//     { label: 'Mailroom Service', id: 'services' },
//     { label: 'Meerut', id: 'cities' },
//     { label: 'Mirzapur', id: 'cities' },
//     { label: 'Mumbai', id: 'cities' },
//     { label: 'Nagpur', id: 'cities' },
//     { label: 'Najafgarh', id: 'cities' },
//     { label: 'Nasik', id: 'cities' },
//     { label: 'Office Boy', id: 'services' },
//     { label: 'Other', id: 'services' },
//     { label: 'Patna', id: 'cities' },
//     { label: 'Pest Control', id: 'services' },
//     { label: 'Pimpri-Chinchwad', id: 'cities' },
//     { label: 'Prayagraj', id: 'cities' },
//     { label: 'Pune', id: 'cities' },
//     { label: 'Rajgir', id: 'cities' },
//     { label: 'Rajkot', id: 'cities' },
//     { label: 'Ranchi', id: 'cities' },
//     { label: 'Reception Service', id: 'services' },
//     { label: 'Security Service', id: 'services' },
//     { label: 'Srinagar', id: 'cities' },
//     { label: 'Supaul', id: 'cities' },
//     { label: 'Surat', id: 'cities' },
//     { label: 'Thane', id: 'cities' },
//     { label: 'Vadodara', id: 'cities' },
//     { label: 'Varanasi', id: 'cities' },
//     { label: 'Vasai-Virar', id: 'cities' },
//     { label: 'Vijayavada', id: 'cities' },
// ]

const cities = [
    'Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Lucknow', 'Jaipur', 'Kanpur', 'Mirzapur', 'Nagpur', 'Ghaziabad', 'Supaul', 'Vadodara', 'Rajkot', 'Vishakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Bilaspur', 'Ludhiana', 'agra', 'Madurai', 'Jamshedpur', 'Prayagraj', 'Nasik', 'Faridabad', 'Meerut', 'Jabalpur', 'Kalyan', 'Vasai-Virar', 'Najafgarh', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Alīgarh', 'Guwahati', 'Haora', 'Ranchi', 'Gwalior', 'Chandigarh', 'Haldwani', 'Vijayavada', 'Gaya', 'Rajgir'
];

const services =[
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service Representatives', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]

const HomeMain = () => {

    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('')

    const findSearchedInput =()=>{
        console.log(searchInput);
    }

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
                    {/* <input className='searchInput' type='text' placeholder='Search for City / State / Services'/> */}
                    {/* <SearchIcon className='searchIcon'/> */}
                    <Autocomplete className=''
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search for City / State / Services" className='searchInputMui'/>}
                        onChange={(event, value) => setSearchInput(value)}
                        value={searchInput}/>
                </div>

                <button className='searchBtn' onClick={(e)=> findSearchedInput()}>Search</button>

                <select className='searchdropdown' name="" id="" onChange={(e)=> setSearchType(e.target.value)}>
                    <option value="services">Services</option>
                    <option value="city">City</option>
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