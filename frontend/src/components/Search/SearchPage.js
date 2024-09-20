import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Company from '../Company/Company';
import axios from 'axios';
import flexiimg from '../../assets/flexiPage.png'
import './FlexiPage.css'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'


const SearchPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const inputValue = params.get('input');
    const typeValue = params.get('type');
    const [showMainSearch, setShowMainSearch] = useState(false);


    const [searchValue, setSearchValue] = useState([]);
    const [noFilterSearchValue, setNoFilterSearchValue] = useState([]);


    useEffect(() => {

        const getSearchResults = async () => {

            if (inputValue && typeValue) {

                try {
                    const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search?input=${inputValue}&type=${typeValue}`);
                    
                    if (data.data) {
                        setSearchValue(data.data);
                        setNoFilterSearchValue(data.data);
                    }
                    else {
                        setSearchValue([]);
                        setNoFilterSearchValue([]);
                    }
                }
                catch (err) { console.log(err); }
            }
        }

        getSearchResults()
        setShowMainSearch(false)
    }, [inputValue, typeValue])


    // SEARCH BOX MAIN........
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
        navigate(`/search?input=${searchInput}&type=${searchType}`);
    }
    // .......SEARCH BOX MAIN


    const navigateToFlexi = () => {
        const input = 'Flexi Services'
        navigate(`/search?input=${input}&type=service`);
    }


    // FLEXI SEARCH FILTER.........
    const [FlexisearchInput, setFlexiSearchInput] = useState('');
    const [FlexisearchType, setFlexiSearchType] = useState('service');
    const [Flexiservice, setFlexiService] = useState(true);
    const [Flexicity, setFlexiCity] = useState(false);

    useEffect(() => {
        if (FlexisearchType === 'city') {
            setFlexiCity(true);
            setFlexiService(false);
        }
        else {
            setFlexiCity(false);
            setFlexiService(true);
        }
    }, [FlexisearchType])

    const findFlexiSearchedInput = async () => {
        if (FlexisearchType === 'service') {
            const filteredResults = noFilterSearchValue.filter(company =>
                company.serviceType.some(service => service.includes(FlexisearchInput)
                ));
            setSearchValue(filteredResults);
        }
        else {
            const filteredResults = noFilterSearchValue.filter(company =>
                company.city.some(city => city.includes(FlexisearchInput)
                ));
            setSearchValue(filteredResults);
        }
    }
    // .........FLEXI SEARCH FILTER


    return (

        <div className='SearchPage'>

            {inputValue === 'Flexi Services' ?
                <div className='FlexiPage_Banner'>

                    {/* <div className='FlexiPage_ImgDiv'>
                        <img src={flexiimg} alt="" />
                    </div> */}


                    <div className='FlexiPage_Box'>

                        <div className='FlexiPage_Content'>
                            <div className='flexiPage_Heading'>
                                Covendx Flexi Features
                            </div>
                            <div className='text'>Unlock the power of flexibility with Covendx</div>

                            <div className='flexiSearchContainer'>
                                <div className='searchPageSearch'>
                                    <div>
                                        {Flexicity ?
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={cities}
                                                sx={{
                                                    width: 300,
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '30px', // Rounded corners with 25px radius
                                                    },
                                                }}

                                                renderInput={(params) => <TextField {...params} label="Search in Flexi Services" className='searchInputMui' />}
                                                onChange={(event, value) => setFlexiSearchInput(value)}
                                                value={FlexisearchInput} />
                                            :
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={services}
                                                bgColor="white"
                                                sx={{
                                                    width: 300,
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '30px', // Rounded corners with 25px radius
                                                    },
                                                }}

                                                renderInput={(params) => <TextField {...params} label="Search in Flexi Services" className='searchInputMui' />}
                                                onChange={(event, value) => setFlexiSearchInput(value)}
                                                value={FlexisearchInput} />
                                        }

                                    </div>

                                    <button className='searchBtn' onClick={(e) => findFlexiSearchedInput(e)}>Search</button>

                                    <select className='searchdropdown' name="" onChange={(e) => setFlexiSearchType(e.target.value)} value={FlexisearchType}>
                                        <option value="service">Services</option>
                                        <option value="city">City</option>
                                    </select>

                                </div>

                                <div className='searchPageSearchMobile'>
                                    <div>
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
                                                renderInput={(params) => <TextField {...params} label="Search in Flexi Services" className='searchInputMui' />}
                                                onChange={(event, value) => setFlexiSearchInput(value)}
                                                value={FlexisearchInput} />
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
                                                renderInput={(params) => <TextField {...params} label="Search in Flexi Services" className='searchInputMui' />}
                                                onChange={(event, value) => setFlexiSearchInput(value)}
                                                value={FlexisearchInput} />
                                        }

                                    </div>

                                    <button className='searchBtnMobile' onClick={(e) => findFlexiSearchedInput(e)}><SearchIcon /></button>

                                    <select className='searchdropdown' name="" onChange={(e) => setFlexiSearchType(e.target.value)} value={FlexisearchType}>
                                        <option value="service">Services</option>
                                        <option value="city">City</option>
                                    </select>

                                </div>

                                <div className='flexiHeadText'>
                                    PAN India | On Demand Vendors | Quick Setup
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <></>
            }

            {inputValue === 'Flexi Services' ?
                <div className='FlexiBanner' style={{ margin: '32px 0 40px' }}>

                    <div className='FlexiPointersBanner'>

                        <div className='flexiPage_Heading'>
                            Covendx Flexi Features
                        </div>

                        <div className='flexiPointersContainer'>
                            <div className='bannerPointer'>
                                <div className='pointerNum'>01</div>
                                <div className='pointerText'>New Project Request</div>
                                <div className='arrow'>
                                    <img src={arrowUp} />
                                </div>
                            </div>

                            <div className='bannerPointer'>
                                <div className='pointerNum'>02</div>
                                <div className='pointerText'>Evaluate and Prioritize</div>
                                <div className='arrow mobilesmall'>
                                    <img src={arrowDown} />
                                </div>
                            </div>

                            <div className='bannerPointer'>
                                <div className='pointerNum'>03</div>
                                <div className='pointerText'>Delegate to Service Provider</div>
                                <div className='arrow mobile'>
                                    <img src={arrowUp} />
                                </div>
                            </div>

                            <div className='bannerPointer'>
                                <div className='pointerNum'>04</div>
                                <div className='pointerText'>Facilitate Communication</div>
                                <div className='arrow mobilesmall'>
                                    <img src={arrowDown} />
                                </div>
                            </div>

                            <div className='bannerPointer'>
                                <div className='pointerNum'>05</div>
                                <div className='pointerText'>Confirm Task Completion</div>
                                <div className='arrow'>
                                    <img src={arrowUp} />
                                </div>
                            </div>

                            <div className='bannerPointer'>
                                <div className='pointerNum'>06</div>
                                <div className='pointerText'>Process Payment</div>
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
                    {inputValue === 'Flexi Services' ?
                        <div className='showMainSearchBtn'
                            onClick={() => setShowMainSearch(!showMainSearch)}
                        >
                            Search Other Services
                        </div>
                        :
                        <div className='lookingFlexiBtn'
                            onClick={() => navigateToFlexi()}
                        >
                            Looking for Flexi Services?
                        </div>
                    }
                </div>
                {showMainSearch || inputValue !== 'Flexi Services' ?
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
                    : <></>
                }
            </div>

            <div className='Companies_container'>

                {searchValue.length === 0 ? <p className='searcherror'>Couldnt find anything</p> : <></>}


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
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Logistics and Supply Chain', 'Marketing and Branding', 'Construction and Renovation', 'HVAC Services', 'Other'
]