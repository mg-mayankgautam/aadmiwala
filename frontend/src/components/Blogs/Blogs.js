import React, { useEffect, useState } from 'react'
import './Blogs.css';
import header from '../../assets/blogsheader1.jpg'
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
                            Mastering B2B Success: Key Strategies for Growth
                        </div>
                        <div className='blogHeaderText'>
                            Unlock the secrets to thriving in the B2B world with our comprehensive guide. Learn how to build robust client relationships, leverage cutting-edge technology, and implement effective marketing strategies. Dive into the essentials of networking, partnerships, and exceptional customer service to navigate the complexities of B2B business and drive sustainable growth. Discover how these strategies can set your business apart and pave the way for long-term success.
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
                                    <img src={blog.imageURL} />
                                </div>
                                <div className='blogContent'>
                                    <div className='blogTime'>
                                        Read Time: {blog.blogTime}
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