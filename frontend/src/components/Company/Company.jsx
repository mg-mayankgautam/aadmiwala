import React from 'react'
import './Company.css'

const Company = ({company}) => {
  return (
    <div className='FC_box'>

        <div className='FC_TopFlex'>

            <div className='FC_dataDiv'>

                <div className='new'>New</div>
                <div className='FC_name'>{company.companyName}</div>
                            
                <div>
                    {company.city.map((cityy,i)=><span key={i}>{cityy}, </span>)}<br/>
                            
                    {company.country}
                </div>

                <div className='FC_PR'>
                  Avg Price Range: {company.priceRange} INR
                </div>
            

            </div>

            <div className='FC_ImgsDiv'>
              {company.imageURLs&& company.imageURLs.map((img,i) =>
                  <div key={i}><img src={img.url} alt="1" /> </div>
              )}
            </div>

        </div>

        <div className='FC_bottomFlex'>
            
            <div className='FC_facilities'>Provides {company.serviceType.map((service, i)=><span key={i}>{service}, </span>)}</div>
            {/* <div className='FC_desc'>
                            Company Description: <li>{company.agencyBriefing}</li> 
                            </div> */}
            <div className='FC_date'>Posted {company.date}</div>
        </div>
            
                            
      </div>
  )
}

export default Company