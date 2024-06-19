import React, {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';


const SideBar = ({setName, name, setcompanyName, companyName, setcompanyDesc, companyDesc, setPR,PR, id,setuserEmail, userEmail, setNewName, newName, setnewcompanyName, newCompanyName, setnewcompanyDesc, newcompanyDesc, setnewPR, newPR, setnewEmail, newEmail}) => {

    const [modal3, setmodal3] = useState(false);

    const updateUserProfile = async(e)=>{

    }


  return (
    <>
    
    <div className='dashSideBar'>
            <div className='dashSidebar_head'>
                {/* <div>My Profile</div>  */}
                <div onClick={()=> setmodal3(true)}><EditIcon/></div>
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
    </div>

    {/* {modal3? 
        <div className='dashModal'>
            <div className='modalBox'>
                <div onClick={()=> setmodal3(false)} className='closeDashModal'> X </div>
                <div>Edit your information</div>
                
                <input type='text' placeholder='Company Name' value={newCompanyName}
                    onChange={(e)=> setnewcompanyName(e.target.value)}
                />
                <input type='text' placeholder='Company Description' value={newcompanyDesc}
                    onChange={(e)=> setnewcompanyDesc(e.target.value)}
                />
                <input type='text' placeholder='Price Range' value={newPR}
                    onChange={(e)=> setnewPR(e.target.value)}
                />
                <input type='text' placeholder='Your Name' value={newName}
                    onChange={(e)=> setNewName(e.target.value)}
                />
                
                <input type='text' placeholder='Email' value={newEmail}
                    onChange={(e)=> setnewEmail(e.target.value)}
                />

                <button onClick={(e)=> updateUserProfile(e)} className='submitNewServices'>Submit</button>

            </div>
        </div>
    :<></>} */}
</>
  )
}

export default SideBar