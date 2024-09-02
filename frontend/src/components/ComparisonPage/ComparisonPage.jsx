import React from 'react'
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ComparisonPage.css';
import Company from '../Company/Company';


const ComparisonPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [company, setCompany] = useState([])
  const [filteredServices, setFilteredServices] = useState([])
  const [filteredCities, setFilteredCities] = useState([])
  const [selectedCompany, setSelectedCompany] = useState()
  const [compareCriteria, setCompareCriteria] = useState('service')


  useEffect(() => {

    window.scrollTo(0, 0)

    const getCompanies = async () => {
      try {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanydata?id=${id}`);
        console.log(data);
        setCompany(data.data);
        // console.log(company)
      }
      catch (err) { console.log(err); }


      try {
        // const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanyfilterdata?id=${id}`);
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getcompanyfilterdata?id=${id}`);
        console.log(data);
        setFilteredCities(data.data.citiesfilter);
        setFilteredServices(data.data.servicesfilter);
      }
      catch (err) {
        console.log(err);

      }

    }

    getCompanies()


  }, []);

  useEffect(() => {
    console.log(filteredCities, filteredServices);
  }, [filteredCities, filteredServices])

  useEffect(() => {

    window.scrollTo(0, 0)

  }, [selectedCompany]);


  return (
    <div className='ComparisonPage'>

      <div className='CompanyCompareTable'>

        <div className='criteria'>Company Name:</div>
        <div>{company.companyName}</div>
        <div>{selectedCompany && selectedCompany.companyName} </div>

        <div className='criteria'>Company Description:</div>
        <div>{company.agencyBriefing}</div>
        <div>{selectedCompany && selectedCompany.agencyBriefing} </div>


        <div className='criteria'>Cities:</div>
        <div className='compare_cities'>
          {company.city && company.city.map(cityy => <span id=''>{cityy}, </span>)}
        </div>
        <div className='compare_cities'>
          {selectedCompany && (
            selectedCompany.city && selectedCompany.city.map(cityy => (
              <span key={cityy}>{cityy}, </span>
            ))
          )}
        </div>


        <div className='criteria'>Provides:</div>
        <div className='compare_cities'>
          {company.serviceType && company.serviceType.map(service => <span id=''>{service}, </span>)}
        </div>
        <div className='compare_cities'>
          {selectedCompany && (
            selectedCompany.serviceType && selectedCompany.serviceType.map(service => <span id=''>{service}, </span>)
          )}
        </div>

      </div>

      <div className='compareWith_Container'>

        <div className='compareCriteriaHead'>Compare With:</div>
        <div className='compareCriteriaDiv'>
          <div className='compareCriteriaBtn' onClick={()=> setCompareCriteria('service')}>
            Services
          </div>
          <div className='compareCriteriaBtn' onClick={()=> setCompareCriteria('city')}>
            Cities
          </div>
        </div>

        {compareCriteria === 'service' ?
          (filteredServices && filteredServices.map(company =>
            <div onClick={() => setSelectedCompany(company)}>
              <Company company={company} />
            </div>
          ))
          :
          (filteredCities && filteredCities.map(company =>
            <div onClick={() => setSelectedCompany(company)}>
              <Company company={company} />
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default ComparisonPage


{/* <div className=''> 
              {company?.flexi?.flexi ? <div className='flexi'>Flexi</div> : null}

        
            <div className='company_PR'>
              Average Price Range: {company.priceRange} INR

              {company?.flexi?.flexi ?
                <span className='FC_flexiPR'>
                  <br /> Flexi Price Range: {company.flexi.lowPR} - {company.flexi.highPR} INR
                </span>
                : null}
            </div>

          </div>

          {company.imageURLs && company.imageURLs.length > 0 &&
            <div className='companyImgsDiv'>
              {company.imageURLs.map((img, i) =>
                <div key={i}><img src={img.url} alt="1" /> </div>
              )}
            </div>
          } */}
