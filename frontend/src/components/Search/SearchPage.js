import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Company from '../Company/Company';
import axios from 'axios';
import flexiimg from '../../assets/flexiPage.png'
import './FlexiPage.css'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const SearchPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const [inputValue, setinputValue] = useState(params.get('input'));
    const [typeValue, settypeValue] = useState(params.get('type'));


    const [searchError, setSearchError] = useState(false);
    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        setSearchError(false);
        console.log(inputValue, typeValue)
    }, [inputValue, typeValue])

    useEffect(() => {

        const getSearchResults = async () => {
            console.log(inputValue, typeValue);

            if (inputValue && typeValue) {

                try {
                    const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search?input=${inputValue}&type=${typeValue}`);
                    console.log(data.data);

                    if (data.data) {
                        setSearchValue(data.data);
                    }
                    else {
                        setSearchError(true);
                    }
                }
                catch (err) { console.log(err); }
            }
        }

        getSearchResults()
    }, [inputValue, typeValue])


    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('service');
    const [service, setService] = useState(true);
    const [city, setCity] = useState(false);



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


    const findSearchedInput = async () => {
        settypeValue(searchType)
        setinputValue(searchInput)
    }


    return (

        <div className='SearchPage'>

            {inputValue === 'Flexi Services' ?
                <div className='FlexiPage_Banner'>

                    <div className='FlexiPage_ImgDiv'>
                        <img src={flexiimg} alt="" />
                    </div>


                    <div className='FlexiPage_Box'>

                        <div className='FlexiPage_Content'>
                            <div className='flexiPage_Heading'>
                                Covendx Flexi Features
                            </div>
                            <div className='text'>Unlock the power of flexibility with Covendx</div>

                            <div className='flexiSearchContainer'>
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

                                    <button className='searchBtnMobile' onClick={(e) => findSearchedInput(e)}><SearchIcon /></button>

                                    <select className='searchdropdown' name="" onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                        <option value="service">Services</option>
                                        <option value="city">City</option>
                                    </select>

                                </div>

                                {/* <div className='freqSearch'>
                            <div className='freqSearchText'>Popular Cities</div>

                            <div className='freqSearchBtns'>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Delhi</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Patna</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Mumbai</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Chennai</button>
                                <button onClick={(e) => setfreqSearch(e.target.innerHTML)}>Bangalore</button>
                                
                            </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                : <></>
            }

            <div className='SearchPage_Header'>
                <div className='SearchPage_subHeader'>
                    <div>
                        <div className='subHead search'>
                            Filtered Companies
                        </div>
                        <div className='text'>Your Search Results</div>
                    </div>
                    {inputValue === 'Flexi Services' ? <></> :
                        <div onClick={() => { setinputValue('Flexi Services'); settypeValue('service') }}
                            className='lookingFlexiBtn'>
                            Looking for Flexi Services?
                        </div>
                    }
                </div>
                <div>
                    <div className='flexiSearchContainer'>
                        <div className='searchPageSearch'>
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

                            <select className='searchdropdown' name="" onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                <option value="service">Services</option>
                                <option value="city">City</option>
                            </select>

                        </div>

                        <div className='searchPageSearchMobile'>
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

                            <button className='searchBtnMobile' onClick={(e) => findSearchedInput(e)}><SearchIcon /></button>

                            <select className='searchdropdown' name="" onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                <option value="service">Services</option>
                                <option value="city">City</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>

            <div className='Companies_container'>

                {searchError ? <p className='searcherror'>Couldnt find anything</p> : <></>}


                {searchValue && searchValue.map(company =>
                    <Link to={`/company/${company._id}`} key={company._id}>
                        <Company company={company} />
                    </Link>
                )}

            </div>


        </div>

    )
}

export default SearchPage


const cities = [
    'Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Lucknow', 'Jaipur', 'Kanpur', 'Mirzapur', 'Nagpur', 'Ghaziabad', 'Supaul', 'Vadodara', 'Rajkot', 'Vishakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Bilaspur', 'Ludhiana', 'agra', 'Madurai', 'Jamshedpur', 'Prayagraj', 'Nasik', 'Faridabad', 'Meerut', 'Jabalpur', 'Kalyan', 'Vasai-Virar', 'Najafgarh', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Aligarh', 'Guwahati', 'Haora', 'Ranchi', 'Gwalior', 'Chandigarh', 'Haldwani', 'Vijayavada', 'Gaya', 'Rajgir'
];

const services = [
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]