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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const services =[
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service Representatives', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]


const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      

    const [value, setValue] = useState('1');
    const navigate = useNavigate()
   
    const { id } = useParams();
    const [UserName, setUserName] = useState('');
    const {auth, setAuth}= useAuth();
    const [modal, setmodal] = useState(false)

    const [userServices, setUserServices] = useState([]);
    const [userCities, setUserCities] = useState([]);
    const [name, setName] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [companyDesc, setcompanyDesc] = useState('');
    const [PR, setPR] = useState('');
    const [userEmail, setuserEmail] = useState('');

    const [serviceType, setServiceType] = useState([])
    const [sideBar, setSideBar] = useState(false)



    useEffect(() => {
        
        const verifyAuth = async ()=>{
            try {
                // const URL =  `${process.env.REACT_APP_BACKEND_URL}/isauth` ;
                const URL =  `http://localhost:4700/isauth` ;
                //console.log('url',URL);
                const response = await axios.get(URL);
    
                // console.log(response.data.auth);
               if(!response.data.auth){
               
                     
                   console.log('auth')
                   
                   }
    
    
                  else if(response.data.auth){
                   
                   console.log(response.data.auth);
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
          const data = await axios.get(`http://localhost:4700/getuserdata?id=${id}`)
          console.log(data.data, 'getuser data')
    
          setUserServices(data.data.serviceType);
          setServiceType(data.data.serviceType);
          setUserCities(data.data.city);
          setName(data.data.fullName);
          setuserEmail(data.data.email);
          setcompanyName(data.data.companyName);
          setcompanyDesc(data.data.agencyBriefing);
          setPR(data.data.priceRange);
            } catch(e){console.log(e)}
        }
    
    
        verifyAuth();
        getUserData();


      console.log(id)
    }, [])


    const updateUserServices = async(e)=>{
        e.preventDefault();

        console.log(serviceType);

        try{
            console.log('here?')
            const data = await axios.post(`http://localhost:4700/updateuserservices`, {id, serviceType})
  
            console.log('reaching here in dash')
            const axiosdata = data.data
            console.log(axiosdata);
            console.log('reaching here in dash')


            if(axiosdata){
                console.log(axiosdata)
                setUserServices(axiosdata)
                // navigate(`/dashboard/${UserName}`)
            }
  
        }
            
        catch(err){console.log(err);}
    }

    // const services=[]



  return (
    <div className='Dashboard'>

        <div className='mainDash'>

            <div className='dash_DataDiv'>
                <div className='dash_Head'>
                    <div>welcome to the dashboard, {name} !</div>
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
                    <button>Add New Cities</button>
                </div>
            </div>

        </div>



        {sideBar? 
            <div className='dashSideBar'>
                <div>
                    <span className='sidebarTitle'>Company Name:</span> {companyName}
                </div> 
                <div>
                    <span className='sidebarTitle'>Description:</span> {companyDesc}
                </div> 
                <div>
                    <span className='sidebarTitle'>Price Range:</span> {PR}
                </div> 
                <div>
                    <span className='sidebarTitle'>Phone:</span> {id}
                </div> 
                <div>
                    <span className='sidebarTitle'>Email:</span> {userEmail}
                </div>  
            </div>
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
                            value={serviceType}
                            onChange={(event, newValue) => setServiceType(newValue)}
                            renderInput={(params) => (
                                <TextField {...params} label="" placeholder="" />
                            )}
                            
                    />

                    <button onClick={(e)=> updateUserServices(e)} className='submitNewServices'>Submit New Services</button>

                </div>
            </div>
        :<></>}

    </div>
  )
}

export default Dashboard