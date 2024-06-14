import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';



const cities = [
    'Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Lucknow', 'Jaipur', 'Kanpur', 'Mirzapur', 'Nagpur', 'Ghaziabad', 'Supaul', 'Vadodara', 'Rajkot', 'Vishakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Bilaspur', 'Ludhiana', 'agra', 'Madurai', 'Jamshedpur', 'Prayagraj', 'Nasik', 'Faridabad', 'Meerut', 'Jabalpur', 'Kalyan', 'Vasai-Virar', 'Najafgarh', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Aligarh', 'Guwahati', 'Haora', 'Ranchi', 'Gwalior', 'Chandigarh', 'Haldwani', 'Vijayavada', 'Gaya', 'Rajgir'
];

const services =[
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service Representatives', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]

const HomeMain = ({searchValue,setSearchValue}) => {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [freqSearch, setfreqSearch] = useState('');
    const [searchType, setSearchType] = useState('service');
    const [service, setService] =useState(true);
    const [city, setCity] =useState(false);
    const [searchError, setSearchError] =useState(false);


    useEffect(()=>{
        if(searchType==='city'){
            setCity(true);
            setService(false);
        }
        else{ 
            setCity(false);
            setService(true);
        }
    },[searchType])

    useEffect(()=>{
        setSearchError(false);
    },[searchType, searchInput])

    useEffect(()=>{
        console.log(freqSearch);
        if(freqSearch){
            findfreqSearched()
        }
    },[freqSearch])


    const findSearchedInput =async(e)=>{
        e.preventDefault();
        console.log(searchInput); 
        
        if(searchInput){

            try{
                const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search?input=${searchInput}&type=${searchType}`);
                console.log(data.data);

                if(data.data){
                    setSearchValue(data.data);
                    navigate(`/search/${searchInput}`)
                }
                else{
                    setSearchError(true);
                }
                
              }
              catch(err){console.log(err);}

        }
        
    }

    const findfreqSearched =async()=>{
        // e.preventDefault();
        console.log(freqSearch); 
        
        if(freqSearch){

            // console.log()
            try{
                const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search?input=${freqSearch}&type=service`);
                console.log(data.data);

                if(data.data){
                    setSearchValue(data.data);
                    navigate(`/search/${freqSearch}`)
                }
                else{
                    setSearchError(true);
                }
                
              }
              catch(err){console.log(err);}

        }
        
    }

  return (
    <>
    <div className='HomeMain'>

        <div className='landingContent'>
            <div className='landingHeadingDiv'>
                <div className='mainHead'>
                One Solution, Every Need.
                </div>

                <div className='subHead'>
                Empowering companies and service providers together                   
                </div>

                <div className='landingsubHead'>
                    B2B talent marketplace
                </div>
            </div>

            <div className='landingSearch'>
                <div>
                    {/* <input className='searchInput' type='text' placeholder='Search for City / State / Services'/> */}
                    {/* <SearchIcon className='searchIcon'/> */}

                    {city? 
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search for City / Services" className='searchInputMui'/>}
                        onChange={(event, value) => setSearchInput(value)}
                        value={searchInput}/>
                    :
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={services}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search for City / Services" className='searchInputMui'/>}
                        onChange={(event, value) => setSearchInput(value)}
                        value={searchInput}/>
                    }
                    
                </div>

                <button className='searchBtn' onClick={(e)=> findSearchedInput(e)}>Search</button>

                <select className='searchdropdown' name="" onChange={(e)=> setSearchType(e.target.value)} value={searchType}>
                    <option value="service">Services</option>
                    <option value="city">City</option>
                </select>

                {searchError? <p className='searcherror'>Couldnt find anything</p> : <></>}
            </div>

            <div className='freqSearch'>
                {/* <div className='freqSearchText'>Frequent Search</div> */}
                
                <div className='freqSearchBtns'>
                    <button onClick={(e)=> setfreqSearch(e.target.innerHTML)}>Facility Service</button>
                    <button>Security Service</button>
                    <button>Blue Collar</button>
                    <button>Office Boy</button>
                    <button onClick={(e)=> setfreqSearch(e.target.innerHTML)}>IT Support</button>
                    {/* <button className='viewAllBtn'>View All</button> */}
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