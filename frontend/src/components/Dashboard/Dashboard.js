import React from 'react'
import './Dashboard.css'
import dashicon from '../../assets/dash-icon.png'
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect} from 'react';
import axios from 'axios';
import useAuth from '../../hook/useAuth';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Settings from '@mui/icons-material/Settings';
import SideBar from './SideBar';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const services =[
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service Representatives', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]
const cities = [
    'Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Surat', 'Lucknow', 'Jaipur', 'Kanpur', 'Mirzapur', 'Nagpur', 'Ghaziabad', 'Supaul', 'Vadodara', 'Rajkot', 'Vishakhapatnam', 'Indore', 'Thane', 'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Bilaspur', 'Ludhiana', 'agra', 'Madurai', 'Jamshedpur', 'Prayagraj', 'Nasik', 'Faridabad', 'Meerut', 'Jabalpur', 'Kalyan', 'Vasai-Virar', 'Najafgarh', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Aligarh', 'Guwahati', 'Haora', 'Ranchi', 'Gwalior', 'Chandigarh', 'Haldwani', 'Vijayavada', 'Gaya', 'Rajgir'
];



const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      

    const [value, setValue] = useState('1');
   
    const { id } = useParams();
    const [UserName, setUserName] = useState('');
    const {auth, setAuth}= useAuth();
    const [modal, setmodal] = useState(false)
    const [modal2, setmodal2] = useState(false)

    const [userServices, setUserServices] = useState([]);
    const [userCities, setUserCities] = useState([]);
    const [name, setName] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [companyDesc, setcompanyDesc] = useState('');
    const [PR, setPR] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [GSTno, setGSTno] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');

    const [newServiceType, setNewServiceType] = useState([])
    const [newCity, setNewCity] = useState([])
    const [newName, setNewName] = useState('');
    const [newCompanyName, setnewcompanyName] = useState('');
    const [newcompanyDesc, setnewcompanyDesc] = useState('');
    const [newEmail, setnewEmail] = useState('');
    const [sideBar, setSideBar] = useState(false)



    useEffect(() => {
        
        const verifyAuth = async ()=>{
            try {
                const URL =  `${process.env.REACT_APP_BACKEND_URL}/isauth` ;
                // const URL =  `http://localhost:4700/isauth` ;
                //console.log('url',URL);
                const response = await axios.get(URL);
    
                // console.log(response.data.auth);
               if(!response.data.auth){
               
                     
                //    console.log('auth')
                   
                   }
    
    
                  else if(response.data.auth){
                   
                //    console.log(response.data.auth);
                    const user = response.data.auth;
                    setAuth({user});
                    setUserName(user);
                  
                  }   
           
         } catch (err) {
                if (err.response) {
                   // Not in the 200 response range 
                   console.log(err.response.data);
                   console.log(err.response.status);
                   console.log(err.response.headers);
                } else {
                   console.log(`Error: ${err.message}`);
                }
         }
        }  
        
        const getUserData = async()=>{
          try{
          const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getuserdata?id=${id}`)
          console.log(data.data, 'getuser data')
    
          setUserServices(data.data.serviceType);
          setNewServiceType(data.data.serviceType);
          setUserCities(data.data.city);
          setNewCity(data.data.city);
          setName(data.data.fullName);
          setNewName(data.data.fullName);
          setuserEmail(data.data.email);
          setnewEmail(data.data.email);
          setcompanyName(data.data.companyName);
          setnewcompanyName(data.data.companyName);
          setcompanyDesc(data.data.agencyBriefing);
          setnewcompanyDesc(data.data.agencyBriefing);
          setPR(data.data.priceRange);
          setGSTno(data.data.GSTno);
          setAddress(data.data.address);
          setCountry(data.data.country);
        //   setnewPR(data.data.priceRange);
            } catch(e){console.log(e)}
        }
    
    
        verifyAuth();
        getUserData();


    //   console.log(id)
    }, [])


    const updateUserServices = async(e)=>{
        e.preventDefault();

        // console.log(newServiceType);

        try{
            
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateuserservices`, {id, newServiceType})
  
            
            const axiosdata = data.data

            if(axiosdata){
                setUserServices(axiosdata);
                setmodal(false);
                // navigate(`/dashboard/${UserName}`)
            }
  
        }
            
        catch(err){console.log(err);}
    }
    

    const updateUserCities = async(e)=>{
        e.preventDefault();

        

        try{
            
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateusercities`, {id, newCity})
  
            const axiosdata = data.data


            if(axiosdata){
                
                setUserCities(axiosdata);
                setmodal2(false);
                // navigate(`/dashboard/${UserName}`)
            }
  
        }
            
        catch(err){console.log(err);}
    }



  return (
    <div className='Dashboard'>

        <div className='mainDash'>

            <div className='dash_DataDiv'>
                <div className='dash_Head'>
                    <div>Welcome to the dashboard, {name} !</div>
                    <div className='profileSettings'
                        onClick={()=> setSideBar(!sideBar)}>
                        <Settings/>
                    </div> 
                </div>

                <div className='dash_BoxFlex'>
                    <div className='dash_Box'>
                        <div className='dash_boxNum'>
                            {userServices&& userServices.length}
                        </div>
                        <div className='dash_boxText'>
                            <div><img src={dashicon}/></div>
                            <div>No. of Services</div>
                        </div>
                    </div>
                    
                    <div className='dash_Box'>
                        <div className='dash_boxNum'>
                            {userCities&& userCities.length}
                        </div>
                        <div className='dash_boxText'>
                            <div><img src={dashicon}/></div>
                            <div>No. of Cities</div>
                        </div>
                    </div>
                    {/* <div className='dash_Box'>
                        <div className='dash_boxNum'>
                            45
                        </div>
                        <div className='dash_boxText'>
                            <div><img src={dashicon}/></div>
                            <div>Avg. Placement Time</div>
                        </div>
                    </div> */}

                </div>

                {/* <div className='dash_chart'>
                    chart
                </div> */}
            </div>

            <div className='dash_ServicesDiv'>
                <div className='dash_servicesHead'>
                    Your Services
                </div>
                <div className='dash_servicesContainer'>
                    
                    {userServices&& userServices.map((service, i)=>
                    <div className='dash_service' key={i}>
                        <div className='service_name'>{service}</div>
                    </div>
                )}
                    
                </div>
                <div className='addNewService'>
                    <button onClick={(e)=>setmodal(true)}>Add New Services</button>
                </div>

                <div className='dash_servicesHead'>
                    Your Cities
                </div>
                <div className='dash_servicesContainer'>
                    
                    {userCities&& userCities.map((city, i)=>
                    <div className='dash_service' key={i}>
                        <div className='service_name'>{city}</div>
                    </div>
                )}
                    
                </div>
                <div className='addNewService'>
                    <button onClick={(e)=>setmodal2(true)}>Add New Cities</button>
                </div>
            </div>

        </div>



        {sideBar? 
            <SideBar setName={setName} name={name} setcompanyName={setcompanyName} companyName={companyName} setcompanyDesc={setcompanyDesc} companyDesc={companyDesc} setPR={setPR} PR={PR} id={id} setuserEmail={setuserEmail} userEmail={userEmail} setNewName={setNewName} newName={newName} setnewcompanyName={setnewcompanyName} newCompanyName={newCompanyName} setnewcompanyDesc={setnewcompanyDesc} newcompanyDesc={newcompanyDesc} setnewEmail={setnewEmail} newEmail={newEmail} GSTno={GSTno} address={address} country={country}/>
            :
            <></>
        }

        

        {modal? 
            <div className='dashModal'>
                <div className='modalBox'>
                    <div onClick={()=> setmodal(false)} className='closeDashModal'> X </div>
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
                            value={newServiceType}
                            onChange={(event, newValue) => setNewServiceType(newValue)}
                            renderInput={(params) => (
                                <TextField {...params} label="" placeholder="" />
                            )}
                            
                    />

                    <button onClick={(e)=> updateUserServices(e)} className='submitNewServices'>Submit New Services</button>

                </div>
            </div>
        :<></>}


        {modal2? 
            <div className='dashModal'>
                <div className='modalBox'>
                    <div onClick={()=> setmodal2(false)} className='closeDashModal'> X </div>
                    <div>Edit Operational Cities:</div>
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
                            value={newCity}
                            onChange={(event, newValue) => setNewCity(newValue)}
                            renderInput={(params) => (
                                <TextField {...params} label="" placeholder="" />
                            )}
                            
                    />

                    <button onClick={(e)=> updateUserCities(e)} className='submitNewServices'>Submit New Cities</button>

                </div>
            </div>
        :<></>} 

    </div>
  )
}

export default Dashboard