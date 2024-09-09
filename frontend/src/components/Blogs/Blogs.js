import React, { useEffect, useState } from 'react'
import './Blogs.css';
import header from '../../assets/blogsheader.png'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Blogs = () => {

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



    return (
        <div className='Blogs'>

            <div className='blogHeader'>
                <div className='blogSubHead'>Resources</div>
                <div className='blogMainHead'>Blogs</div>

                <div className='blogHeaderBox'>
                    <div className='blogHeaderImg'>
                        <img src={header} />
                    </div>
                    <div className='blogHeaderContent'>
                        <div className='blogHeaderLabel'>
                            Featured
                        </div>
                        <div className='blogHeaderHead'>
                            Ctalk: Redefining Engagement Between Companies and Recruitment Agencies
                        </div>
                        <div className='blogHeaderText'>
                            Communication with hiring agencies can be very cumbersome and tedious especially when delicate information like job updates or candidate status needs to be conveyed under tight deadlines. For instance, you probably want to let "Agency A" know that "Agency B" has already submitted the candidate's resume (that Agency A is trying to submit) for the open job.
                        </div>
                    </div>
                </div>
            </div>

            <div className='blogsContainer'>

                {blogs.length > 0 ?
                    blogs.map(blog => (
                        <Link to={`/blog/${blog._id}`} key={blog._id}>
                            <div className='blogBox'>
                                <div className='blogImg'>
                                    <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-reindeer-dog-800x525.jpg" />
                                </div>
                                <div className='blogContent'>
                                    <div className='blogTime'>
                                        {blog.blogTime}
                                    </div>
                                    <div className='blogHead'>
                                        {blog.blogTitle}
                                    </div>
                                    <div className='blogText'>
                                        {blog.blogText}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))

                    :
                    <div>no blogs to show</div>
                }


            </div>

        </div>
    )
}

export default Blogs