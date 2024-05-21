import React from 'react'
import icon1 from '../../assets/icon-1.png'

const Benefits = () => {
  return (
    <div className='Benefits'>
        <div className='benefitsHead'>
            Marketplace in numbers
        </div>

        <div className='benefitsContainer'>
            <div className='benefitCard'>
                <img src={icon1} />
                <div className='BC_num'>+650</div>
                <div className='BC_text'>Active Healthcare <br />Recruiting  Firms</div>
            </div>
            <div className='benefitCard'>
                <img src={icon1} />
                <div className='BC_num'>+650</div>
                <div className='BC_text'>Active Healthcare <br />Recruiting  Firms</div>
            </div>
            <div className='benefitCard'>
                <img src={icon1} />
                <div className='BC_num'>+650</div>
                <div className='BC_text'>Active Healthcare <br />Recruiting  Firms</div>
            </div>
            <div className='benefitCard'>
                <img src={icon1} />
                <div className='BC_num'>+650</div>
                <div className='BC_text'>Active Healthcare <br />Recruiting  Firms</div>
            </div>
            <div className='benefitCard'>
                <img src={icon1} />
                <div className='BC_num'>+650</div>
                <div className='BC_text'>Active Healthcare <br />Recruiting  Firms</div>
            </div>
        </div>


        <div className='benefitsText'>
          <div className='subHead'>Everything You Need for an Easier, Faster and Better Hiring Experience</div>
          <div className='text'>
            Effortlessly connect with a pool of pre-screened talent, streamline your workforce management, and reduce administrative overhead. Our service focuses on delivering quality staffing efficiently, so you can concentrate on your business's growth and success.
          </div>
        </div>
    </div>
  )
}

export default Benefits