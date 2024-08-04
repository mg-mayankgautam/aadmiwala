import React, {useState, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddCompany.css'
import Nav from '../Nav/Nav'
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const navigate = useNavigate();

    const [slide1, setslide1] = useState(true);
    const [slide2, setslide2] = useState(false);
    const [slide3, setslide3] = useState(false);
    const [slide4, setslide4] = useState(false);
    const [passwordComp, setPasswordComp] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phonee, setPhonee] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyService, setCompanyService] = useState('');
    const [servicetype, setServicetype] = useState([]);
    const [agencyBriefing, setAgencyBriefing] = useState('');
    const [GSTno, setGSTno] = useState('');
    const [lowPR, setlowPR] = useState('');
    const [highPR, sethighPR] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [City, setCity] = useState([]);


    const [OTP, setOTP] = useState('');

    const [validPhone, setValidPhone] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/
    const EMAIL_REGEX = /^[\w]+(\.[\w]+)*@([\w-]){3,7}(.com|.in|.co|.co.in|.edu|.gov)$/
    const PASS_REGEX = /^[a-zA-Z0-9_`~(){}#!%@$^&*\s\]\[\\\/+:;"'<>,.?=|-]{6,10}$/;


    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const [file3, setFile3] = useState();
    const [file4, setFile4] = useState();

   

    const [phonefromDB, setphonefromDB] = useState(true);
    const [validPhnError, setValidPhnError] = useState(false);
    const [validOTPError, setValidOTPError] = useState(false);


    useEffect(() => {
        const result = PHONE_REGEX.test(phonee);

        // console.log(result);
        setValidPhone(result);
   
    }, [phonee])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);

        // console.log(result);
        setValidEmail(result);
   
    }, [email])

    useEffect(() => {
        const result = PASS_REGEX.test(pwd);
      
        // console.log(result);
        setValidPwd(result);
   
    }, [pwd])
    

    const [inputStyle, setinputStyle] = useState('');
    const [inputStyle1, setinputStyle1] = useState('');

    useEffect(() => {
        if (pwd) {
          if (!validPwd) {
            setinputStyle('invalid');
          } else {
            setinputStyle('valid');
          }
        }
    }, [pwd, validPwd]);


    useEffect(() => {
        setValidPhnError(false)
    }, [phonee]);

    useEffect(() => {
        setValidOTPError(false)
    }, [OTP]);



    const nextBtn1 =async(e)=>{
      
        e.preventDefault();
       
        if(phonee && validPhone){
            
            const phonenum =phonee;
            try{
                const valid = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/checkphonenumber`,{phonenum})
                
                

                if(valid.data){
                    setphonefromDB(true)
                    setValidPhnError(true)
                }
                else{
                    setphonefromDB(false)
                    setValidPhnError(false)
                    
                    if(fullName && email && validEmail){
            
                        setslide2(true);
                        setslide1(false);
                    }
                }
            }
            catch(err){console.log(err); }
        
            
        }
    
    } 


    const nextBtn2 = (e)=>{
        e.preventDefault();

        if(companyName && servicetype && lowPR && highPR){
            setslide3(true); 
            setslide2(false);
        }
    }

    // const nextBtn3 = (e)=>{
    //     e.preventDefault();

    //     if(country && address && city){
    //         setslide4(true); 
    //         setslide3(false);
    //     }
    // }


    //const [showOtpPage, setShowOtpPage] = useState(false)

    const verifyPhone = async (e) =>{
        e.preventDefault();
        setslide3(false);

        const phone = '+91'+ phonee;

        if(fullName && email && validEmail && phone && validPhone && !phonefromDB && companyName && servicetype && lowPR && highPR && country && City){
        

            try{
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verifyphone`, {phone})

            
            console.log(data.data);
            
              if(data.data){
                 setslide4(true); 
              //  setPasswordComp(true);// remove this when adding otp feature
                setslide3(false);
              }

            }
            catch(err){console.log(err);}
        }

    }


    const verifyOtp = async (e) =>{

        e.preventDefault();


        const phone = '+91'+ phonee
        // console.log(fullName,email, phone, companyName, serviceType, agencyBriefing, noOfPositions, country, address, city);
        


        if(phone && validPhone && OTP && !phonefromDB){
        

            try{
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verifyotp`, {phone, OTP})

            console.log('submit succeess')
            console.log(data.data);
              if(data.data){
                setPasswordComp(true);
                setslide4(false);
              }
              else{
                setValidOTPError(true);
              }

            }
            catch(err){console.log(err);}
        }
      


    }



    const submitNewCompany = async (e) => {
        e.preventDefault();


        const phone = '+91'+ phonee
        const priceRange = lowPR + ' - ' + highPR;
        //   console.log(servicetype);
        
        const formData = new FormData();
      
        formData.append("image", file1);
        formData.append("image", file2);
        formData.append("image", file3);
        formData.append("image", file4);
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("companyName", companyName);
        formData.append("GSTno", GSTno);
        formData.append("agencyBriefing", agencyBriefing);
        formData.append("servicetype", servicetype);
        formData.append("priceRange", priceRange);
        formData.append("country", country);
        formData.append("address", address);
        formData.append("City", City);
        formData.append("pwd", pwd);
        // formData.append("city", city);
        console.log(formData)

        if(fullName && email && validEmail && phone && validPhone && !phonefromDB && companyName && servicetype && priceRange && country && City && pwd){
        

            try{
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addrecruitingcompany`, formData, { headers: {'Content-Type': 'multipart/form-data'}})

            console.log('submit succeess')
            console.log(data.data);
              if(data.data){
                navigate(`/login`)
              }

            }
            catch(err){console.log(err);}
        }
      
    };

    const [imageBoxCount, setImageBoxCount] = useState(1);

    const addimageboxes = ()=>{
        if(imageBoxCount<4){
        setImageBoxCount(imageBoxCount+1);
        }

    }; 
    // console.log(imageBoxCount)

  return (
    <>
   

    <div className='AddCompany'>

        <div className='recruiting_input_box'>
            <div>
                <div className='recruiting_input_heading'>Add Service Providers</div>
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
                        { phonee && validPhone && phonefromDB && validPhnError ? (<p className='validerror'>
                        phone number is already registered.        
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
                    <div>GST Number</div>
                    <input className='recr_input' type='text' onChange={(e)=>setGSTno(e.target.value)} required  value={GSTno}/>
                </div>

                <div>
                    <div>Agency Description</div>
                    <input className='recr_input' type='text' onChange={(e)=>setAgencyBriefing(e.target.value)} required  value={agencyBriefing}/>
                </div>

                <div>
                    <div className='selectservicetext'>Select the Type of service you provide</div>
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
                        onChange={(event, value) => setServicetype(value)}
                        value={servicetype}
                    />
                </div>


                <div className='recr_range_input_div'>
                    <div>
                        <div>Lowest Price Range</div>
                        <input className='recr_range_input' type='number' onChange={(e)=>setlowPR(e.target.value)} required  value={lowPR}/> 
                    </div>
                    <div>
                        <div>Highest Price Range</div>
                        <input className='recr_range_input' type='number' onChange={(e)=>sethighPR(e.target.value)} required  value={highPR}/> 
                    </div>
                </div>


                <div className='fileInputDiv' style={{minHeight:'50px'}}>

                    <div>Add Images</div>
                
                  <label for='inputFile' className='inputFileLabel'>
                    Choose a file
                  </label>
                  <input 
                  onChange={
                    e => setFile1(e.target.files[0])
                    } 
                  type="file" 
                  accept="image/*"
                  className='inputFile recr_input'
                  name='image'
                  />

                {  imageBoxCount > 1 ? <div>
                    
                            
                    <label for='inputFile1' className='inputFileLabel1'>
                    Choose a file
                    </label>
                    <input 
                    onChange={
                        e => setFile2(e.target.files[0])
                        } 
                    type="file" 
                    accept="image/*"
                    className='inputFile recr_input'
                    name='image'
                    />
                    
                </div>:<></>}

                {  imageBoxCount > 2 ? <div>
                
                        
                    <label for='inputFile2' className='inputFileLabel2'>
                    Choose a file
                    </label>
                    <input 
                    onChange={
                        e => setFile3(e.target.files[0])
                        } 
                    type="file" 
                    accept="image/*"
                    className='inputFile recr_input'
                    name='image'
                    />
                
                </div>:<></>}

                {  imageBoxCount > 3 ? <div>
                
                        
                    <label for='inputFile' className='inputFileLabel3'>
                    Choose a file
                    </label>
                    <input 
                    onChange={
                        e => setFile4(e.target.files[0])
                        } 
                    type="file" 
                    accept="image/*"
                    className='inputFile recr_input'
                    name='image'
                    />
                
                    </div>:<></>}
                    
                <br/>
                <button onClick={()=>{addimageboxes()}} className='addImgBtn'>add more images</button>

                </div>


                {!companyName || !servicetype || !lowPR || !highPR? (<p className='error'>
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
                    <div>Main Office Address</div>                   
                    <input className='recr_input' type='text' onChange={(e)=>setAddress(e.target.value)} required value={address}/>
                </div>

                <div className='city_input_div'>
                    <div className='city_input_text'>Cities Operational in:</div>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={cities}
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
                        onChange={(event, value) => setCity(value)}
                        value={City}
                    />
                </div>
                {!country || !City ? (<p className='error'>
                    please complete all fields.        
                    </p>): <></>}
            </div>:<></>}


            {slide4 ?
            <div>
                
                <div>
                    <div>Sent OTP to Registered Number</div>                   
                    <input className='recr_input' 
                    type='number' 
                    onChange={(e)=>setOTP(e.target.value)} 
                    required 
                    value={OTP}
                    />
                </div>
                
                {!OTP ? (<p className='error'>
                    please enter OTP.        
                    </p>): <></>}

                {OTP && validOTPError ? (<p className='validerror'>
                    Incorrect OTP.        
                    </p>): <></>}

            </div>:
            
            <>{!slide1 && !slide2 && !slide3 && !slide4 && !passwordComp? <Box sx={{ display: 'flex', justifyContent:'center' }}>
            <CircularProgress />
          </Box>:<></>}</>
          
          }

          {passwordComp? 
            <div className='PasswordDiv'>
                <div>Enter Password to Confirm</div>
                <input 
                    className={`recr_input ${inputStyle}`}
                    type='password'
                    placeholder='Enter Password' 
                    onChange={(e)=>setPwd(e.target.value)}
                    autoComplete='off' required
                />
                {pwd  && !validPwd? (<p className='error'>
                    pwd must be between 6-10 letters        
                    </p>): <></>}
            </div> 
          : <></>}

           
           
           
            <div className='recr_btns_div'>
                {slide1?<>
                <button className='recruiting_next_btn' onClick={(e)=> nextBtn1(e)}>Next</button>
                </>:<></>}

                {slide2?<><button className='recruiting_back_btn' onClick={(e)=> {setslide2(false); setslide1(true)}} >Back</button>
                <button className='recruiting_next_btn' onClick={(e)=> nextBtn2(e)}>Next</button></>:<></>}

                {slide3?<><button className='recruiting_back_btn' onClick={(e)=> {setslide2(true); setslide3(false)}}>Back</button>
                <button className='recruiting_next_btn' onClick={(e)=> verifyPhone(e)}>
                    {/* Verify  No. */}
                    Next
                </button></>:<></>}

                {slide4?<><button className='recruiting_back_btn'>Resend OTP</button>
                <button className='recruiting_next_btn' onClick={(e)=> verifyOtp(e)}>Verify OTP</button> 
                </>:<></>}

                {passwordComp? 
                    <button className='recruiting_next_btn' onClick={(e)=> submitNewCompany(e)}>
                        Submit
                    </button>
                :<></>}

            </div>
        </div>

    </div>
    </>
  )
}

export default AddCompany
