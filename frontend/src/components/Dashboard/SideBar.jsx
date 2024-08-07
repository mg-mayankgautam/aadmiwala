import React, {useState, useEffect} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Settings from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';



const SideBar = ({setName, name, setcompanyName, companyName, setcompanyDesc, companyDesc, setPR,PR, id,setuserEmail, userEmail, setNewName, newName, setnewcompanyName, newCompanyName, setnewcompanyDesc, newcompanyDesc, setnewEmail, newEmail, setGSTno, GSTno, setAddress, address, country, setnewGSTno, newGSTno, setnewaddr, newaddr,imageURLs,setimageURLs, newimageURLs, setnewimageURLs}) => {

    const navigate = useNavigate();
    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const [file3, setFile3] = useState();
    const [file4, setFile4] = useState();

    const [modal3, setmodal3] = useState(false);
    const [showManageAcct, setShowManageAcct] = useState(false);
    const [showEditPhone, setShowEditPhone] = useState(false);
    const [showEditPwd, setShowEditPwd] = useState(false);
    const [editPhoneSlide1, seteditPhoneSlide1] = useState(true);
    const [editPhoneSlide2, seteditPhoneSlide2] = useState(false);
    
    const [newLowPR, setnewLowPR] = useState('')
    const [newHighPR, setnewHighPR] = useState('')
    const [newPhone, setNewPhone] = useState(id.split('91')[1])
    const [newPwd, setNewPwd] = useState('')
    const [newOTP, setNewOTP] = useState('')


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
    }, [PR])



    const [imageBoxCount, setImageBoxCount] = useState(4-imageURLs.length);

    useEffect(()=> {
        setImageBoxCount(4 - imageURLs.length)
    },[imageURLs])

    const addimageboxes = ()=>{
        if(imageBoxCount>0){
            setImageBoxCount(imageBoxCount-1);
        }
    }; 


    const deleteimg=async(filename)=>{
        console.log(filename)

        try{
            
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/deleteuserimage`, {id, filename})
  
            
            const axiosdata = data.data

            if(axiosdata){
                setimageURLs(axiosdata.imageURLs);
                // setmodal(false);
                // navigate(`/dashboard/${UserName}`)
            }
  
        }
            
        catch(err){console.log(err);}
    }


    const updateUserProfile = async(e)=>{

        // console.log(newName, newCompanyName, newcompanyDesc, newEmail);
        
        const newPR = newLowPR + ' - ' + newHighPR;

        const formData = new FormData();

        formData.append("image", file1);
        formData.append("image", file2);
        formData.append("image", file3);
        formData.append("image", file4);
        formData.append("fullName", newName);
        formData.append("email", newEmail);
        formData.append("phone", id);
        formData.append("companyName", newCompanyName);
        formData.append("GSTno", newGSTno);
        formData.append("agencyBriefing", newcompanyDesc);
        formData.append("priceRange", newPR);
        formData.append("address", newaddr);


        if(newCompanyName && newPR && newName && newEmail && validEmail){
            try{

                const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateuserinfo`,formData, { headers: {'Content-Type': 'multipart/form-data'}})
                // {id, newCompanyName, newcompanyDesc, newPR, newName, newEmail, newGSTno, newaddr})
      
               
                const axiosdata = data.data;    
    
                if(axiosdata){
                    console.log(axiosdata);
                    setcompanyName(axiosdata.companyName);
                    setcompanyDesc(axiosdata.agencyBriefing);
                    setPR(axiosdata.priceRange);
                    setName(axiosdata.fullName);
                    setuserEmail(axiosdata.email);
                    setGSTno(axiosdata.GSTno);
                    setAddress(axiosdata.address);
                    setimageURLs(axiosdata.imageURLs)
                    setmodal3(false);
                    // navigate(`/dashboard/${UserName}`)
                }
      
            }
                
            catch(err){console.log(err);}
        }

    }

    const verifyNewPhone= async()=>{

        console.log(newPhone)

        try{
            
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verifynewphone`, {newPhone})
  
            
            const axiosdata = data.data

            if(axiosdata){
                seteditPhoneSlide1(false)
                seteditPhoneSlide2(true)
            }
  
        }
            
        catch(err){console.log(err);}
    }

    const updateNewPhone= async()=>{

        console.log(newPhone)

        try{
            
            const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateuserphone`, {id, newOTP, newPhone, newPwd})
  
            
            const axiosdata = data.data

            if(axiosdata){
                navigate('/')
            }
  
        }
            
        catch(err){console.log(err);}
    }

  return (
    <>
    <div className='dashSideBarContainer'>
        
        <button className='ManageAcctBtn'
            onClick={()=> setShowManageAcct(!showManageAcct)}
            >
            <Settings/> Manage Your Account
        </button>
        

        {showManageAcct? 
            <div className='dashManageAccount'>

                <button className='showEditPhoneBtn'
                    onClick={()=> {setShowEditPhone(!showEditPhone); setShowEditPwd(false) }}
                    >
                    Edit Phone Number
                </button>

            
                {showEditPhone ? (
                <>
                    {editPhoneSlide1 ? (
                    <div className='editPhoneDiv'>
                        <div>Edit Phone Number</div>
                        <input
                        type="number"
                        className='editPhoneInput'
                        onChange={(e) => setNewPhone(e.target.value)}
                        value={newPhone}
                        />
                        <div>Enter New Password</div>
                        <input
                        type="text"
                        className='editPhoneInput'
                        onChange={(e) => setNewPwd(e.target.value)}
                        value={newPwd}
                        />
                        <button
                        className='submitPhoneBtn'
                        onClick={() => verifyNewPhone()}
                        >
                        Submit new info
                        </button>
                    </div>
                    ) : null}
                    {editPhoneSlide2 ? (
                    <div className='editPhoneDiv'>
                        <div>Enter OTP</div>
                        <input
                        type="number"
                        className='editPhoneInput'
                        onChange={(e) => setNewOTP(e.target.value)}
                        value={newOTP}
                        />
                        <button
                        className='submitPhoneBtn'
                        onClick={() => updateNewPhone()}
                        >
                        Submit OTP
                        </button>
                    </div>
                    ) : null}
                </>
                ) : null}


                {!showEditPhone ?
                    <button  className='showEditPhoneBtn'
                        onClick={()=> setShowEditPwd(!showEditPwd)}
                        >
                        Change Password
                    </button>
                : <></>
                }

            
                {showEditPwd?
                    <div className='editPhoneDiv'>

                        <div>Enter New Password</div>
                        <input type="text" 
                            className='editPhoneInput'
                            onChange={(e)=> setNewPwd(e.target.value)}
                            value={newPwd}
                            />

                        <button className='submitPhoneBtn'>
                            Submit new pwd
                        </button>

                    </div>

                :<></>}
                                
            </div>
        : <></>}

        <div className='dashSideBar'>
                <div className='dashSidebar_head'>
                    {/* <div>My Profile</div>  */}
                    <div onClick={()=> setmodal3(true)} className='editIcon'><EditIcon/> Edit Information</div>
                </div>
                <div>
                    <span className='sidebarTitle'>Company Name:</span> {companyName}
                </div> 
                <div>
                    <span className='sidebarTitle'>Description:</span> {companyDesc}
                </div> 
                <div>
                    <span className='sidebarTitle'>Price Range:</span> {PR} INR
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
    </div>
    

    {modal3? 
        <div className='dashModal'>
            <div className='modalBox modal3'>

                <div className='editInfoHeader'>
                    <div onClick={()=> setmodal3(false)} className='closeEditInfoModal'> X </div>
                    <div style={{fontSize:'16px'}}>Edit your information</div>
                </div>
                
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
                        <input className='PRInfoInput' type='text' placeholder='Low Range' value={newLowPR}
                            onChange={(e)=> setnewLowPR(e.target.value)} required
                        />
                        <input className='PRInfoInput' type='text' placeholder='High Range' value={newHighPR}
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

                <div>
                    <div>GST Number</div>
                    <input className='editInfoInput' type='text' placeholder='GST Number' value={newGSTno}
                    onChange={(e)=> setnewGSTno(e.target.value)} required
                    />
                </div>

                <div>
                    <div>Main Office Address</div>
                    <input className='editInfoInput' type='text' placeholder='Main Address' value={newaddr}
                    onChange={(e)=> setnewaddr(e.target.value)} required
                    />
                </div>

                <div className='userImgsDiv'>

                    <div>Edit Images</div>

                    {imageURLs&& imageURLs.map((img,i) =>
                        
                        <div key={i} className='userImgEdit'>

                            <img src={img.url} alt="1" />
                                    
                            <div onClick={(e)=>{deleteimg(img.fileName)}}>
                                <DeleteIcon />
                            </div>
                            <div>Delete Image</div>
                        </div>
                    )}

                    {imageBoxCount >3 ?
                        <input 
                        onChange={
                            e => setFile1(e.target.files[0])
                            } 
                        type="file" 
                        accept="image/*"
                        className='editInfoInput inputfile'
                        name='image'
                        />
                    : <></>
                    }

                    {imageBoxCount >2 ?
                        <input 
                        onChange={
                            e => setFile2(e.target.files[0])
                            } 
                        type="file" 
                        accept="image/*"
                        className='editInfoInput inputfile'
                        name='image'
                        />
                    : <></>
                    }

                    {imageBoxCount >1 ?
                        <input 
                        onChange={
                            e => setFile3(e.target.files[0])
                            } 
                        type="file" 
                        accept="image/*"
                        className='editInfoInput inputfile'
                        name='image'
                        />
                    : <></>
                    }

                    {imageBoxCount >0 ?
                        <input 
                        onChange={
                            e => setFile4(e.target.files[0])
                            } 
                        type="file" 
                        accept="image/*"
                        className='editInfoInput inputfile'
                        name='image'
                        />
                    : <></>
                    }

                
                
                    <br/>
                    {/* <button onClick={()=>{addimageboxes()}} className='addImgBtn'>add more images</button> */}


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