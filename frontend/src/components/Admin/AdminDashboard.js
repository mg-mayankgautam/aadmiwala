import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dashicon from '../../assets/dash-icon.png'
import axios from 'axios';
import './AdminDashboard.css'


const AdminDashboard = () => {

  const { id } = useParams();


  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log(id)
  }, [])

  const [companies, setCompanies] = useState([])

  useEffect(() => {

    const getCompanies = async () => {
      try {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admininfo`);
        console.log(data.data);
        const array = data.data
        setCompanies(array);
      }
      catch (err) { console.log(err); }
    }

    getCompanies()

  }, []);


  const [showModal, setShowModal] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState(null);


  const confirmDelete = (companyID, Phone) => {
    setShowModal(true);
    setCompanyToDelete({ companyID, Phone });
  };

  const handleConfirm = async () => {
    setShowModal(false);
    if (companyToDelete) {
      try {
        console.log(companyToDelete)
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admindeletecompany`,
          { companyToDelete }
        );
        console.log(data);
        if (data) {
          setCompanies(companies.filter(company => company._id !== companyToDelete.companyID));
          setCompanyToDelete(null);
        }
      } catch (err) {
        console.log('Error deleting company:', err);
      }
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setCompanyToDelete(null);
  };


  return (
    <>
      <div className='AdminDashboard'>

        <div className='Admindash_DataDiv'>
          <div className='dash_Head'>
            <div>Welcome to the dashboard !</div>
            {/* <div className='profileSettings'
                        onClick={()=> setSideBar(!sideBar)}>
                        <Settings/>
                    </div>  */}
          </div>

          <div className='dash_BoxFlex'>
            <div className='dash_Box'>
              <div className='dash_boxNum'>
                {companies && companies.length}
              </div>
              <div className='dash_boxText'>
                <div><img src={dashicon} /></div>
                <div>No. of Services</div>
              </div>
            </div>

            {/* <div className='dash_Box'>
              <div className='dash_boxNum'>
                 {userCities && userCities.length} 
              </div>
              <div className='dash_boxText'>
                <div><img src={dashicon} /></div>
                <div>No. of Cities</div>
              </div>
            </div> */}

          </div>

        </div>

        <div className='dash_ServicesDiv'>
          <div className='dash_servicesHead'>
            Your Services
          </div>
          <div className='Companies_container'>

            {companies && companies.map((company, i) =>
              <div className='FC_box' key={i}>

                <div className='FC_TopFlex'>

                  <div className='FC_dataDiv'>

                    <div className='newDiv'>
                      <div className='new'>New</div>
                      {company?.flexi?.flexi ? <div className='flexi'>Flexi</div> : null}
                    </div>
                    <div className='FC_name'>{company.companyName}</div>

                    <div>
                      <div className='FC_cityDiv'>
                        {company.city.map((cityy, i) => <span key={i}>{cityy}, </span>)}
                      </div>

                      <div>{company.country}</div>
                    </div>

                    <div className='FC_PR'>
                      Avg Price Range: {company.priceRange} INR

                      {company?.flexi?.flexi ?
                        <span className='FC_flexiPR'>
                          <br /> Flexi Price Range: {company.flexi.lowPR} - {company.flexi.highPR} INR
                        </span>
                        : null}
                    </div>

                  </div>

                  <div className='adminCompany_deleteDiv'>
                    <button className='adminCompany_deleteBtn'
                      onClick={() => confirmDelete(company._id, company.Phone)}
                    >
                      Delete
                    </button>
                  </div>

                </div>

                <div className='FC_bottomFlex'>

                  <div className='FC_facilities'>Provides {company.serviceType.map((service, i) => <span key={i}>{service}, </span>)}
                  </div>

                  <div className='FC_date'>Posted {company.date}</div>
                </div>


              </div>
            )}

          </div>

        </div>

      </div>

      {
        showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <strong>Are you sure?</strong>
                <div>Do you really want to delete this service? <br />This process cannot be undone.</div>
                <div className="modal-buttons">
                  <button className="modal-button confirm" onClick={handleConfirm}>Sure</button>
                  <button className="modal-button cancel" onClick={handleCancel}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AdminDashboard