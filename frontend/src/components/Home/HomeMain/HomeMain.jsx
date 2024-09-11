import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import './HomeMain.css'
import landing from '../../../assets/homeillusfull.png'
import landing1 from '../../../assets/homeillus1.png'
import landing2 from '../../../assets/homeillus2.png'
import landing3 from '../../../assets/homeillus3.png'
// import SVG from './SVG.js';



const cities = [
    'Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Lucknow', 'Jaipur', 'Kanpur', 'Mirzapur', 'Nagpur', 'Ghaziabad', 'Supaul', 'Vadodara', 'Rajkot', 'Vishakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Bilaspur', 'Ludhiana', 'agra', 'Madurai', 'Jamshedpur', 'Prayagraj', 'Nasik', 'Faridabad', 'Meerut', 'Jabalpur', 'Kalyan', 'Vasai-Virar', 'Najafgarh', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Aligarh', 'Guwahati', 'Haora', 'Ranchi', 'Gwalior', 'Chandigarh', 'Haldwani', 'Vijayavada', 'Gaya', 'Rajgir'
];

const services = [
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]

const texts = [
    "Looking to Upgrade Your Vendor Needs.",
    "Connecting Businesses to Vendor Excellence.",
    "One Vendor, One Contract, One Payment Solution"
];

const HomeMain = () => {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [freqSearch, setfreqSearch] = useState('');
    const [searchType, setSearchType] = useState('service');
    const [service, setService] = useState(true);
    const [city, setCity] = useState(false);
    // const [searchError, setSearchError] = useState(false);



    useEffect(() => {
        if (searchType === 'city') {
            setCity(true);
            setService(false);
        }
        else {
            setCity(false);
            setService(true);
        }
    }, [searchType])


    useEffect(() => {
        // console.log(freqSearch);
        if (freqSearch) {
            findfreqSearched()
        }
    }, [freqSearch])


    const findSearchedInput = async (e) => {
        e.preventDefault();
        console.log(searchInput);

        if (searchInput) {

            try {
                navigate(`/search?input=${searchInput}&type=${searchType}`);
            }
            catch (err) { console.log(err); }

        }
    }

    const findfreqSearched = async () => {
        // e.preventDefault();
        console.log(freqSearch);

        if (freqSearch) {

            // console.log()
            try {
                navigate(`/search?input=${freqSearch}&type=city`);
            }
            catch (err) { console.log(err); }

        }

    }

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        const cron = async () => {
            try {
                const crondata = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcrondata`);
                console.log('cronlog', crondata);
            } catch (e) { console.log(e) }
        }

        cron();

    }, [])



    return (
        <>
            <div className='HomeMain'>

                <div className='landingContent'>
                    <div className='landingHeadingDiv'>

                        <div className='mainHead'>
                            <div className="animText" key={currentIndex}>
                                {texts[currentIndex]}
                            </div>
                        </div>

                        <div className='landingsubHead'>
                            Empowering companies and service providers together
                        </div>

                    </div>

                    <div className='landingSearchContainer'>
                        <div className='landingSearch'>
                            <div>
                                {/* <input className='searchInput' type='text' placeholder='Search for City / State / Services'/> */}
                                {/* <SearchIcon className='searchIcon'/> */}

                                {city ?
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={cities}
                                        sx={{
                                            width: 300,
                                            // '& .MuiAutocomplete-inputRoot': { color: 'white', // Text color inside the autocomplete
                                            // },
                                            // '& .MuiOutlinedInput-notchedOutline': {
                                            //     borderColor: 'white !important', // Border color of the input field
                                            // },
                                            // '& .MuiInputLabel-root': {
                                            //     color: 'white !important', // Default label color
                                            //     '&.Mui-focused': {
                                            //         color: 'white !important', // Label color when focused
                                            //     },
                                            // },
                                            // '& .MuiFormHelperText-root': {
                                            //     color: 'white !important', // Helper text color
                                            // },
                                            // '& .MuiSvgIcon-root': {
                                            //     color: 'white !important', // Icon color
                                            // },
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '30px', // Rounded corners with 25px radius
                                            },
                                            // '& .MuiAutocomplete-input': {
                                            //     color: 'white !important', // Text color for typed input
                                            // }
                                        }}

                                        renderInput={(params) => <TextField {...params} label="Search for City / Services" className='searchInputMui' />}
                                        onChange={(event, value) => setSearchInput(value)}
                                        value={searchInput} />
                                    :
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={services}
                                        bgColor="white"
                                        sx={{
                                            width: 300,
                                            // '& .MuiAutocomplete-inputRoot': { color: 'white', // Text color inside the autocomplete
                                            // },
                                            // '& .MuiOutlinedInput-notchedOutline': {
                                            //     borderColor: 'white !important', // Border color of the input field
                                            // },
                                            // '& .MuiInputLabel-root': {
                                            //     color: 'white !important', // Default label color
                                            //     '&.Mui-focused': {
                                            //         color: 'white !important', // Label color when focused
                                            //     },
                                            // },
                                            // '& .MuiFormHelperText-root': {
                                            //     color: 'white !important', // Helper text color
                                            // },
                                            // '& .MuiSvgIcon-root': {
                                            //     color: 'white !important', // Icon color
                                            // },
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '30px', // Rounded corners with 25px radius
                                            },
                                            // '& .MuiAutocomplete-input': {
                                            //     color: 'white !important', // Text color for typed input
                                            // }
                                        }}

                                        renderInput={(params) => <TextField {...params} label="Search for City / Services" className='searchInputMui' />}
                                        onChange={(event, value) => setSearchInput(value)}
                                        value={searchInput} />
                                }

                            </div>

                            <button className='searchBtn' onClick={(e) => findSearchedInput(e)}>Search</button>
                            <button className='searchBtnMobile' onClick={(e) => findSearchedInput(e)}><SearchIcon /></button>

                            <select className='searchdropdown' name="" onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                <option value="service">Services</option>
                                <option value="city">City</option>
                            </select>

                        </div>

                        <div className='landingSearchMobile'>
                            <div>
                                {/* <input className='searchInput' type='text' placeholder='Search for City / State / Services'/> */}
                                {/* <SearchIcon className='searchIcon'/> */}

                                {city ?
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={cities}
                                        sx={{
                                            width: 200,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '30px', // Rounded corners with 30px radius
                                            },
                                            '& .MuiInputBase-input': {
                                                fontSize: '12px',  // Change the font size of the input text
                                            },
                                            '& .MuiAutocomplete-option': {
                                                fontSize: '12px',  // Change the font size of dropdown options
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontSize: '12px',  // Change the font size of the label (placeholder when focused)
                                            },
                                            '& .MuiInputBase-input::placeholder': {
                                                fontSize: '12px',  // Change the font size of the placeholder text
                                            },
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Search for City / Services" className='searchInputMui' />}
                                        onChange={(event, value) => setSearchInput(value)}
                                        value={searchInput} />
                                    :
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={services}
                                        bgColor="white"
                                        sx={{
                                            width: 200,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '30px', // Rounded corners with 30px radius
                                            },
                                            '& .MuiInputBase-input': {
                                                fontSize: '12px',  // Change the font size of the input text
                                            },
                                            '& .MuiAutocomplete-option': {
                                                fontSize: '12px',  // Change the font size of dropdown options
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontSize: '12px',  // Change the font size of the label (placeholder when focused)
                                            },
                                            '& .MuiInputBase-input::placeholder': {
                                                fontSize: '12px',  // Change the font size of the placeholder text
                                            },
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Search for City / Services" className='searchInputMui' />}
                                        onChange={(event, value) => setSearchInput(value)}
                                        value={searchInput} />
                                }

                            </div>

                            <button className='searchBtn' onClick={(e) => findSearchedInput(e)}>Search</button>
                            <button className='searchBtnMobile' onClick={(e) => findSearchedInput(e)}><SearchIcon /></button>

                            <select className='searchdropdown' name="" onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                <option value="service">Services</option>
                                <option value="city">City</option>
                            </select>

                        </div>

                        <div className='freqSearch'>
                            <div className='freqSearchText'>Popular Cities</div>

                            <div className='freqSearchBtns'>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Delhi</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Patna</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Mumbai</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Chennai</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Bangalore</button>
                                {/* <button className='viewAllBtn'>View All</button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='landingImgDiv'>
                    {/* <SVG/> */}
                    {currentIndex === 0 ?
                        <img src={landing1} className='landingImg' /> : null}

                    {currentIndex === 1 ?
                        <img src={landing2} className='landingImg' /> : null}

                    {currentIndex === 2 ?
                        <img src={landing3} className='landingImg' /> : null}

                </div>
            </div>

        </>
    )
}

export default HomeMain