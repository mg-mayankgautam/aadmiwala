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
  const [filteredServicesOriginal, setFilteredServicesOriginal] = useState([])
  const [filteredServices, setFilteredServices] = useState([])
  const [filteredCitiesOriginal, setFilteredCitiesOriginal] = useState([])
  const [filteredCities, setFilteredCities] = useState([])
  const [selectedCompany, setSelectedCompany] = useState()
  const [compareCriteria, setCompareCriteria] = useState('service')
  const [showUnsort, setShowUnsort] = useState(false)


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
        setFilteredCitiesOriginal(data.data.citiesfilter);
        setFilteredCities(data.data.citiesfilter);
        setFilteredServicesOriginal(data.data.servicesfilter);
        setFilteredServices(data.data.servicesfilter);
      }
      catch (err) {
        console.log(err);

      }

    }

    getCompanies()


  }, []);


  useEffect(() => {

    window.scrollTo(0, 0)

  }, [selectedCompany]);

  const sortPricing = () => {

    if (showUnsort) {
      setFilteredCities(filteredCitiesOriginal);

      setFilteredServices(filteredServicesOriginal);

      setShowUnsort(false)
      return
    }
    // Sort the filteredCities array and set it in state
    const sortedCities = [...filteredCities].sort((a, b) => {
      let lowerLimitA = parseInt(a.priceRange.split(' - ')[0]);
      let lowerLimitB = parseInt(b.priceRange.split(' - ')[0]);
      return lowerLimitA - lowerLimitB;
    });
    setFilteredCities(sortedCities);

    // Sort the filteredServices array and set it in state
    const sortedServices = [...filteredServices].sort((a, b) => {
      let lowerLimitA = parseInt(a.priceRange.split(' - ')[0]);
      let lowerLimitB = parseInt(b.priceRange.split(' - ')[0]);
      return lowerLimitA - lowerLimitB;
    });
    setFilteredServices(sortedServices);

    setShowUnsort(true)
  };




  return (
    <div className='ComparisonPage'>

      <div className='CompanyCompareTable'>

        <div className='criteria'>Company Name:</div>
        <div>{company.companyName}</div>
        <div>{selectedCompany && selectedCompany.companyName} </div>

        <div className='criteria'>Price Range:</div>
        <div>{company.priceRange} INR</div>
        <div>{selectedCompany && (selectedCompany.priceRange + ' INR')}</div>


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

        <div className='criteria'>Flexi Services:</div>
        <div>{company.flexi ? 'Yes' : 'No'}</div>
        <div>{selectedCompany && (selectedCompany.flexi ? 'Yes' : 'No')}</div>

        <div className='criteria'>Flexi Price Range:</div>
        <div>{company.flexi ? company.flexi.lowPR + ' - ' + company.flexi.highPR + ' INR' : '-'}</div>
        <div>{selectedCompany && (selectedCompany.flexi ? selectedCompany.flexi.lowPR + ' - ' + selectedCompany.flexi.highPR + ' INR' : '-')}</div>


        <div className='criteria'>Company Description:</div>
        <div>{company.agencyBriefing}</div>
        <div>{selectedCompany && selectedCompany.agencyBriefing} </div>



      </div>

      <div className='compareWith_Container'>

        <div className='compareCriteriaHead'>Compare By:</div>
        <div className='compareCriteriaContainer'>
          <div className='compareCriteriaDiv'>
            <div className='compareCriteriaBtn' onClick={() => setCompareCriteria('service')}>
              Services
            </div>
            <div className='compareCriteriaBtn' onClick={() => setCompareCriteria('city')}>
              Cities
            </div>
          </div>
          <div className='compareCriteriaDiv' style={{ marginTop: '8px' }}>
            <div className='compareCriteriaBtn' onClick={() => sortPricing()}>
              Sort Pricing {showUnsort ? <span> X </span> : null}
            </div>
            <div className='compareCriteriaBtn'>
              Sort Rating 
            </div>
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
