import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import dashicon from '../../assets/dash-icon.png'
import axios from 'axios';
import './AdminDashboard.css'


const AdminDashboard = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log(id)
  }, [])

  const [showServices, setShowServices] = useState(true)

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


  const [blogModal, setBlogModal] = useState(false)
  const [blogTitle, setBlogTitle] = useState('')
  const [blogText, setBlogText] = useState('')
  const [blogReadTime, setBlogReadTime] = useState('')
  const [file1, setFile1] = useState();


  const submitBlog = async () => {

    const formData = new FormData();

    formData.append("image", file1);
    formData.append("blogTitle", blogTitle);
    formData.append("blogText", blogText);
    formData.append("blogTime", blogReadTime);

    if (file1, blogTitle, blogText, blogReadTime) {
      try {
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/adminaddblogs`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })

        console.log('submit succeess')
        console.log(data.data);
        if (data.data) {
          window.location.reload();
        }

      }
      catch (err) { console.log(err); }
    }

  }


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)

    const getBlogs = async () => {
      try {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallblogs`);
        const array = data.data;
        console.log(array)
        setBlogs(array);

      } catch (err) {
        console.log(err);
      }
    }

    getBlogs();
  }, [])

  const [showModal2, setShowModal2] = useState(false);
  const [blogToDelete, setblogToDelete] = useState(null);


  const confirmDelete2 = (blogID) => {
    setShowModal2(true);
    setblogToDelete(blogID);
  };

  const handleConfirm2 = async () => {
    setShowModal2(false);
    if (blogToDelete) {
      try {
        console.log(blogToDelete)
        const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/admindeleteblog`,
          { blogToDelete }
        );
        console.log(data);
        if (data) {
          setBlogs(blogs.filter(blog => blog._id !== blogToDelete));
          setblogToDelete(null);
        }
      } catch (err) {
        console.log('Error deleting blog:', err);
      }
    }
  };

  const handleCancel2 = () => {
    setShowModal2(false);
    setblogToDelete(null);
  };


  return (
    <>
      <div className='AdminDashboard'>

        <div className='Admindash_DataDiv'>
          <div className='dash_Head'>
            <div>Welcome to the dashboard !</div>
            <button className='addBlogBtn'
              onClick={() => setBlogModal(true)}>
              Add Blogs
            </button>
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

            <div className='dash_Box'>
              <div className='dash_boxNum'>
                {blogs && blogs.length}
              </div>
              <div className='dash_boxText'>
                <div><img src={dashicon} /></div>
                <div>No. of Blogs</div>
              </div>
            </div>

          </div>

        </div>

        <div className='dash_ServicesDiv'>
          <div className='admin_servicesHead'>
            <div onClick={() => setShowServices(true)}
              className={showServices ? 'showServicesBtn selected' : 'showServicesBtn'}
            >
              Manage Services
            </div>
            <div onClick={() => setShowServices(false)}
              className={showServices ? 'showServicesBtn' : 'showServicesBtn selected'}
            >
              Manage Blogs
            </div>
          </div>

          {showServices ?
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
            :
            <div className='blogsContainer admin'>

              {blogs.length > 0 ?
                blogs.map((blog,i) => (
                  <div className='blogBox admin' key={i}>
                    <div className='blogImg'>
                      <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-reindeer-dog-800x525.jpg" />
                    </div>
                    <div className='blogContent'>
                      <div className='adminBlog_deleteDiv'>
                        <div className='blogTime'>
                          {blog.blogTime}
                        </div>
                        <button className='adminCompany_deleteBtn'
                          onClick={() => confirmDelete2(blog._id)}
                        >
                          Delete
                        </button>
                      </div>

                      <div className='blogHead'>
                        {blog.blogTitle}
                      </div>
                      <div className='blogText admin'>
                        {blog.blogText}
                      </div>

                    </div>
                  </div>
                ))

                :
                <div>no blogs to show</div>
              }


            </div>
          }

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

      {
        showModal2 && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <strong>Are you sure?</strong>
                <div>Do you really want to delete this blog? <br />This process cannot be undone.</div>
                <div className="modal-buttons">
                  <button className="modal-button confirm" onClick={handleConfirm2}>Sure</button>
                  <button className="modal-button cancel" onClick={handleCancel2}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )
      }


      {blogModal ?
        <div className='dashModal' style={{ textAlign: 'left' }}>
          <div className='modalBox modal3'>

            <div className='editInfoHeader'>
              <div onClick={() => setBlogModal(false)} className='closeEditInfoModal'> X </div>

              <div className='recruiting_input_heading'>Add Blog</div>
              <div className='recruiting_input_Subheading'>
                Fill the following fields
              </div>
            </div>

            <div>
              <div>Blog Title</div>
              <input className='editInfoInput' type='text' placeholder='Blog Title' value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)} required
              />
            </div>

            <div>
              <div>Blog Content</div>
              <textarea className='editInfoInput' type='text' placeholder='Enter your content' value={blogText}
                onChange={(e) => setBlogText(e.target.value)} required
              />
            </div>

            <div>
              <div>Read Time</div>
              <input className='editInfoInput' type='text' placeholder='Read Time' value={blogReadTime}
                onChange={(e) => setBlogReadTime(e.target.value)} required
              />
            </div>

            <div>
              <div>Add Image</div>
              <input
                onChange={
                  e => setFile1(e.target.files[0])
                }
                type="file"
                accept="image/*"
                className='editInfoInput'
                name='image'
              />
            </div>

            <br />

            <button onClick={(e) => submitBlog(e)} className='submitNewServices'>Submit Blog</button>

            {/* {!newCompanyName || !newLowPR || !newHighPR || !newName || !newEmail ? (<p className='errordash'>
              fields can't be empty.
            </p>) : <></>} */}

          </div>
        </div>
        :
        <></>}
    </>
  )
}

export default AdminDashboard