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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const services =[
    'Administrative Support', 'Facility Service', 'Housekeeping Services', 'Customer Service Representatives', 'Blue Collar', 'White Collar', 'Reception Service', 'Security Service', 'IT Support', 'Catering Service', 'AC/Telephone Repair', 'Electrician/Plumber Service', 'Mailroom Service', 'Pest Control', 'Office Boy', 'Other'
]


const Dashboard = () => {



    const [value, setValue] = useState('1');
   
    const { id } = useParams();
    const [UserName, setUserName] = useState('');
    const {auth, setAuth}= useAuth();
    const [userServices, setUserServices] = useState([]);
    const [name, setName] = useState('');
    const [modal, setmodal] = useState(false)
    const [serviceType, setServiceType] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        
        const verifyAuth = async ()=>{
            try {
                const URL =  `${process.env.REACT_APP_BACKEND_URL}/isauth` ;
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
          const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getuserdata?id=${id}`)
          console.log(data.data, 'getuser data')
    
          setUserServices(data.data.serviceType);
          setServiceType(data.data.serviceType);
          setName(data.data.fullName);
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
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateuserservices`, {UserName, serviceType})
  
            console.log('reaching here in dash')
            const axiosdata = data.data
            console.log(axiosdata);
            console.log('reaching here in dash')


            if(axiosdata){
                console.log(axiosdata)
                setUserServices(axiosdata)
                navigate(`/dashboard/${UserName}`)
            }
  
        }
            
        catch(err){console.log(err);}
    }

    // const services=[]



  return (
    <div className='Dashboard'>

        <div className='dash_DataDiv'>
            <div className='dash_Head'>
                welcome to the dashboard, {name} !
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
                
                {/* <div className='dash_Box'>
                    <div className='dash_boxNum'>
                        45
                    </div>
                    <div className='dash_boxText'>
                        <div><img src={dashicon}/></div>
                        <div>Placement Rate</div>
                    </div>
                </div>
                <div className='dash_Box'>
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
        </div>

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