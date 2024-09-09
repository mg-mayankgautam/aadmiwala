import React, { useEffect, useState } from 'react'
import './BlogPage.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';


const BlogPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams();
    console.log(id);

    const [blog, setBlog] = useState()


    useEffect(() => {

        window.scrollTo(0, 0)

        const getBlog = async () => {
            try {
                const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getblogdata?id=${id}`);
                console.log(data);
                setBlog(data.data);
            }
            catch (err) { console.log(err); }
        }

        getBlog()

    }, [id]);


    return (
        <div className='BlogPage'>

            <div className='blogPageFlex'>
                <div className='blogPageReadTime'>Read Time: {blog?.blogTime}</div>

                <Link to={'/blogs'}>
                    <div className='FC_viewAllBtn'>Go to All Blogs<EastIcon /></div>
                </Link>
            </div>

            <div className='blogPageTitle'>{blog?.blogTitle}</div>

            <div className='blogPageImg'>
                <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-reindeer-dog-800x525.jpg" />
            </div>

            <div className='blogPageText'>{blog?.blogText}</div>

        </div>
    )
}

export default BlogPage