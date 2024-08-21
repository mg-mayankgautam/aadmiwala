import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import Company from '../../Company/Company';
import Loader from '../../Loader/Loader';
import './FeaturedCompanies.css'

const FeaturedCompanies = ({ searchValue, setSearchValue }) => {

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCompanies = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallcompanies`);
      const array = data.data;
      setCompanies(array);
      // if(companies.length != 0) {
      //   setLoading(false);
      // }
      // if (!localStorage.getItem('visited')) {
      //   setTimeout(() => {
      //     setFadingOut(true);
      //     setTimeout(() => {
      //       setLoading(false);
      //       localStorage.setItem('visited', 'true');
      //     }, 500); // Wait for fade-out transition
      //   }, 2000); // Minimum 2 seconds before fade-out starts
      // } else {
      //   setLoading(false);
      // }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    if (companies.length === 0) {
      setLoading(true)
    }
    else {
      setLoading(false);
    }
  }, [companies.length])

  useEffect(() => {
    let interval;
    if (companies.length === 0) {
      interval = setInterval(() => {
        getCompanies();
      }, 10000); // Retry every 10 seconds
    }
    return () => clearInterval(interval);
  }, [companies.length]);


  const navigate = useNavigate();
  const [freqSearch, setfreqSearch] = useState('');

  useEffect(() => {
    if (freqSearch) {
      findfreqSearched()
    }
  }, [freqSearch])

  const findfreqSearched = async () => {
    // e.preventDefault();
    console.log(freqSearch);

    if (freqSearch) {

      // console.log()
      try {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search?input=${freqSearch}&type=service`);
        // console.log(data.data);

        if (data.data) {
          setSearchValue(data.data);
          navigate(`/search/${freqSearch}`)
        }
        else {
          // setSearchError(true);
        }

      }
      catch (err) { console.log(err); }

    }

  }


  return (
    <div className='FeaturedCompanies'>
      <div className='FC_headingDiv'>
        <div className='FC_subhead'>
          <div className='subHead'>Featured Companies</div>
          <Link to={'/companies'}>
            <div className='FC_viewAllBtn'>View All <EastIcon /></div>
          </Link>
        </div>
        <div className='text'>Today's talent marketplace</div>
      </div>

      <div className='flexiBtnsDiv'>
        <div className='flexiBtns' onClick={(e) => setfreqSearch(e.target.innerHTML)}>
          IT Support
        </div>
        <div className='flexiBtns' onClick={(e) => setfreqSearch(e.target.innerHTML)}>
          Customer Service
        </div>
        <div className='flexiBtns' onClick={(e) => setfreqSearch(e.target.innerHTML)}>
          Security Service
        </div>
        <div className='flexiBtns' onClick={(e) => setfreqSearch(e.target.innerHTML)}>
          Blue Collar
        </div>
        <div className='flexiBtns' onClick={(e) => setfreqSearch(e.target.innerHTML)}>
          Flexi Services
        </div>
      </div>

      <div className='FC_container'>

        {/* {loading ? <Loader fadingOut={fadingOut} />
          :
            companies&&
              companies.map(company => (
                <Link to={`/company/${company._id}`} key={company._id}>
                  <Company company={company} />
                </Link>
              ))
          } */}

        {loading ? <Loader />
          :
          // companies&&
          companies.map(company => (
            <Link to={`/company/${company._id}`} key={company._id}>
              <Company company={company} />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default FeaturedCompanies;
