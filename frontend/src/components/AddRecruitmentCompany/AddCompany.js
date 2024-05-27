import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddCompany.css'
import Nav from '../Nav/Nav'
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const states = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Goa',
    'Gujurat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerela',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'NCT of Delhi',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal'
];

const cities = [
    'Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Lucknow', 'Jaipur', 'Kanpur', 'Mirzapur', 'Nagpur', 'Ghaziabad', 'Supaul', 'Vadodara', 'Rajkot', 'Vishakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Bilaspur', 'Ludhiana', 'agra', 'Madurai', 'Jamshedpur', 'Prayagraj', 'Nasik', 'Faridabad', 'Meerut', 'Jabalpur', 'Kalyan', 'Vasai-Virar', 'Najafgarh', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Alīgarh', 'Guwahati', 'Haora', 'Ranchi', 'Gwalior', 'Chandigarh', 'Haldwani', 'Vijayavada', 'Gaya', 'Rajgir'
];

const services =[
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service Representatives', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]



const AddCompany = () => {

    const navigate = useNavigate();

    const [slide1, setslide1] = useState(true);
    const [slide2, setslide2] = useState(false);
    const [slide3, setslide3] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phonee, setPhonee] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyService, setCompanyService] = useState('');
    const [serviceType, setServiceType] = useState([]);
    const [agencyBriefing, setAgencyBriefing] = useState('');
    const [noOfPositions, setNoOfPositions] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const [validPhone, setValidPhone] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/
    const EMAIL_REGEX = /^[\w]+(\.[\w]+)*@([\w-]){3,7}(.com|.in|.co|.co.in|.edu|.gov)$/



    useEffect(() => {
        const result = PHONE_REGEX.test(phonee);

        console.log(result);
        setValidPhone(result);
   
    }, [phonee])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);

        console.log(result);
        setValidEmail(result);
   
    }, [email])

    

    const [inputStyle, setinputStyle] = useState('');
    const [inputStyle1, setinputStyle1] = useState('');

    // useEffect(() => {
    //     if (pwd) {
    //       if (!validPwd) {
    //         setinputStyle('invalid');
    //       } else {
    //         setinputStyle('valid');
    //       }
    //     }
    // }, [pwd, validPwd]);


    const nextBtn1 = (e)=>{
        e.preventDefault();

        if(fullName && email && validEmail && phonee && validPhone){
            setslide2(true); 
            setslide1(false);
        }
    }

    const nextBtn2 = (e)=>{
        e.preventDefault();

        if(companyName && companyService && serviceType && agencyBriefing && noOfPositions){
            setslide3(true); 
            setslide2(false);
        }
    }



    const submitNewCompany = async (e) => {
        e.preventDefault();


        const phone = '+91'+ phonee
        console.log(fullName,email, phone, companyName, companyService, serviceType, agencyBriefing, noOfPositions, country, state, city);
        


        if(fullName && email && validEmail && phone && validPhone && companyName && companyService && serviceType && agencyBriefing && noOfPositions && country && state && city){
        

            try{
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addrecruitingcompany`, {fullName,email, phone, companyName, companyService, serviceType, agencyBriefing, noOfPositions, country, state, city})

            console.log('submit succeess')
            console.log(data.data);
              if(data.data){
                navigate(`/companies`)
              }

            }
            catch(err){console.log(err);}
        }
      
    };




  return (
    <>
    <Nav/>

    <div className='AddCompany'>

        <div className='recruiting_input_box'>
            <div>
                <div className='recruiting_input_heading'>Add Recruiting Company</div>
                <div className='recruiting_input_Subheading'>
                    {slide1?'Your information':''}
                    {slide2?'Information of your Company':''}
                    {slide3?'Add Locations':''}
                </div>
            </div>
            <div className='recr_TabsDiv'> 
                <div className={slide1?'orangeTab recr_Tab' : 'recr_Tab'}></div><div className={slide2?'orangeTab recr_Tab' : 'recr_Tab'}></div><div className={slide3?'orangeTab recr_Tab' : 'recr_Tab'}></div>
            </div>

            {slide1?<div>
                <div>
                    <div>Full Name</div>
                    <input className='recr_input' type='text' onChange={(e)=>setFullName(e.target.value)} required value={fullName}/>
                </div>
                <div>
                    <div >Official Email</div>
                    <input className='recr_input' type='email' onChange={(e)=>setEmail(e.target.value)} required value={email}/>
                    { email && !validEmail? (<p className='validerror'>
                        add valid email.        
                        </p>): <></>}
                </div>
                <div className='recr_phone_input_div'>
                    <div>
                        <div>Dialing Code</div>
                        <select className='recr_phone_select'>
                            <option value="">+91</option>
                        </select>
                    </div>
                    <div>
                        <div>Phone Number</div>
                        <input className='recr_phone_input' type='number' onChange={(e)=>setPhonee(e.target.value)} required  value={phonee}/>
                        { phonee && !validPhone? (<p className='validerror'>
                        add valid phone number.        
                        </p>): <></>}
                    </div>
                </div>

                    {!fullName || !email || !phonee ? (<p className='error'>
                    please complete all fields.        
                    </p>): <></>}
            </div>:<></>}

            {slide2?<div>
                <div>
                    <div>Company Name / Firm Name</div>
                    <input className='recr_input' type='text' onChange={(e)=>setCompanyName(e.target.value)} required value={companyName}/>
                </div>
                <div>
                    <div>Company Service</div>
                    <input className='recr_input' type='text' onChange={(e)=>setCompanyService(e.target.value)} required value={companyService}/>
                </div>
                <div>
                    <div>Select the Type of service you provide</div>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={services}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option}
                            </li>
                        )}
                        style={{ width: 392 }}
                        renderInput={(params) => (
                            <TextField {...params} label="" placeholder="" />
                        )}
                        onChange={(event, value) => setServiceType(value)}
                        value={serviceType}
                    />
                </div>
                <div>
                    <div >Agency Briefing </div>
                    <input className='recr_input' type='text' onChange={(e)=>setAgencyBriefing(e.target.value)} required  value={agencyBriefing}/>
                </div><div>
                    <div >No. of Positions</div>
                    <input className='recr_input' type='number' onChange={(e)=>setNoOfPositions(e.target.value)} required value={noOfPositions}/>
                </div>
                {!companyName || !companyService || !serviceType || !agencyBriefing || !noOfPositions ? (<p className='error'>
                    please complete all fields.        
                    </p>): <></>}
            </div>:<></>}

            {slide3?<div>
                <div>
                    <div>Country</div>
                    <select className='recr_select' onChange={(e)=>setCountry(e.target.value)} required value={country}>
                        <option value=""></option>
                        <option value="India">India</option>
                        <option value="Outside India">Outside India</option>
                    </select>
                </div>
                <div>
                    <div>State</div>
                    <select className='recr_select' onChange={(e)=>setState(e.target.value)} required value={state}>
                        <option value=""></option>
                        {states.map(state => 
                            <option value={state}>{state}</option>
                        )}
                    </select>
                </div>
                <div>
                    <div >City</div>
                    <select className='recr_select' onChange={(e)=>setCity(e.target.value)} required value={city}>
                        <option value=""></option>
                        {cities.map(city => 
                            <option value={city}>{city}</option>
                        )}
                    </select>
                </div>
                {!country || !state || !city ? (<p className='error'>
                    please complete all fields.        
                    </p>): <></>}
            </div>:<></>}

            <div className='recr_btns_div'>
                {slide1?<button className='recruiting_next_btn' onClick={(e)=> nextBtn1(e)}>Next</button>:<></>}

                {slide2?<><button className='recruiting_back_btn' onClick={(e)=> {setslide2(false); setslide1(true)}} >Back</button>
                <button className='recruiting_next_btn' onClick={(e)=> nextBtn2(e)}>Next</button></>:<></>}

                {slide3?<><button className='recruiting_back_btn' onClick={(e)=> {setslide2(true); setslide3(false)}}>Back</button>
                <button className='recruiting_next_btn' onClick={(e)=> submitNewCompany(e)}>Sign Up</button></>:<></>}

            </div>
        </div>

    </div>
    </>
  )
}

export default AddCompany
