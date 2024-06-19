import React, {useState, useEffect} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';


const SideBar = ({setName, name, setcompanyName, companyName, setcompanyDesc, companyDesc, setPR,PR, id,setuserEmail, userEmail, setNewName, newName, setnewcompanyName, newCompanyName, setnewcompanyDesc, newcompanyDesc, setnewEmail, newEmail, GSTno, address, country}) => {

    const [modal3, setmodal3] = useState(false);
    // const [PRange, setPRange] = useState(PR.split(' - '));
    const [newLowPR, setnewLowPR] = useState('')
    const [newHighPR, setnewHighPR] = useState('')


    const [validEmail, setValidEmail] = useState(false);
    const EMAIL_REGEX = /^[\w]+(\.[\w]+)*@([\w-]){3,7}(.com|.in|.co|.co.in|.edu|.gov)$/

    useEffect(() => {
        const result = EMAIL_REGEX.test(newEmail);

        // console.log(result);
        setValidEmail(result);
   
    }, [newEmail])

    useEffect(() => {
        const pr = PR.split(' - ');
        setnewLowPR(pr[0])
        setnewHighPR(pr[1])
   
    }, [])


    const updateUserProfile = async(e)=>{

        console.log(newName, newCompanyName, newcompanyDesc, newEmail);

        const newPR = newLowPR + ' - ' + newHighPR;

        if(newCompanyName && newPR && newName && newEmail && validEmail){
            try{

                const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateuserinfo`, {id, newCompanyName, newcompanyDesc, newPR, newName, newEmail})
      
               
                const axiosdata = data.data;    
    
                if(axiosdata){
                    console.log(axiosdata);
                    setcompanyName(axiosdata.companyName);
                    setcompanyDesc(axiosdata.agencyBriefing);
                    setPR(axiosdata.priceRange);
                    setName(axiosdata.fullName);
                    setuserEmail(axiosdata.email);
                    setmodal3(false);
                    // navigate(`/dashboard/${UserName}`)
                }
      
            }
                
            catch(err){console.log(err);}
        }

    }


  return (
    <>
    
    <div className='dashSideBar'>
            <div className='dashSidebar_head'>
                {/* <div>My Profile</div>  */}
                <div onClick={()=> setmodal3(true)} className='editIcon'><EditIcon/></div>
            </div>
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
                <span className='sidebarTitle'>Your Name:</span> {name}
            </div> 
            <div>
                <span className='sidebarTitle'>Phone:</span> {id}
            </div> 
            <div>
                <span className='sidebarTitle'>Email:</span> {userEmail}
            </div> 
            <div>
                <span className='sidebarTitle'>GST Number:</span> {GSTno}
            </div> 
            <div>
                <span className='sidebarTitle'>Address:</span> {address}
            </div> 
            <div>
                <span className='sidebarTitle'>Country:</span> {country}
            </div>  
    </div>

    {modal3? 
        <div className='dashModal'>
            <div className='modalBox modal3'>
                <div onClick={()=> setmodal3(false)} className='closeDashModal'> X </div>
                <div style={{fontSize:'16px'}}>Edit your information</div>
                
                <div>
                    <div>Company Name</div>
                    <input className='editInfoInput' type='text' placeholder='Company Name' value={newCompanyName}
                    onChange={(e)=> setnewcompanyName(e.target.value)} required
                />
                </div>
                <div>
                    <div>Company Description</div>
                    <input className='editInfoInput' type='text' placeholder='Company Description' value={newcompanyDesc}
                    onChange={(e)=> setnewcompanyDesc(e.target.value)} required
                />
                </div>
                <div>
                    <div>Average Price Range</div>

                    <div className='PRInputDiv'>
                        <input className='PRInfoInput' type='text' placeholder='Price Range' value={newLowPR}
                            onChange={(e)=> setnewLowPR(e.target.value)} required
                        />
                        <input className='PRInfoInput' type='text' placeholder='Price Range' value={newHighPR}
                            onChange={(e)=> setnewHighPR(e.target.value)} required
                        />
                    </div>
                    
                </div>
                <div>
                    <div>Full Name</div>
                    <input className='editInfoInput' type='text' placeholder='Your Name' value={newName}
                    onChange={(e)=> setNewName(e.target.value)} required
                />
                </div>
                
                <div style={{position:'relative'}}>
                    <div>Email</div>
                    <input className='editInfoInput' type='email' placeholder='Email' value={newEmail}
                    onChange={(e)=> setnewEmail(e.target.value)} required
                />
                    { newEmail && !validEmail? (<p className='validerrordash'>
                        add valid email.        
                        </p>): <></>}
                </div>

                <button onClick={(e)=> updateUserProfile(e)} className='submitNewServices'>Submit</button>

                {!newCompanyName || !newLowPR || !newHighPR || !newName || !newEmail ? (<p className='errordash'>
                        fields can't be empty.  
                        </p>) : <></>}

            </div>
        </div>
    :<></>}
</>
  )
}

export default SideBar