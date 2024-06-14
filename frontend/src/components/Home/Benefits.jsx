import React from 'react'
import steps from '../../assets/steps.png'

const Benefits = () => {
  return (
    <div className='Benefits'>
        <div className='benefitsHead'>
          Upgrade your workforce in 4 easy steps:
        </div>

        <div>
          <img src={steps} className='stepsImg'/>
        </div>
        <div className='benefitsContainer'>
            <div className='benefitCard'>
                <div className='BC_text_bold'>STEP</div>
                <div className='BC_num'>01</div>
                <div className='BC_text'>Customize Your Needs</div>
            </div>
            <div className='benefitCard'>
                <div className='BC_text_bold'>STEP</div>
                <div className='BC_num'>02</div>
                <div className='BC_text'>Connect with Service providers</div>
            </div>
            <div className='benefitCard'>
                <div className='BC_text_bold'>STEP</div>
                <div className='BC_num'>03</div>
                <div className='BC_text'>Confirm Your Choices</div>
            </div>
            <div className='benefitCard'>
                <div className='BC_text_bold'>STEP</div>
                <div className='BC_num'>04</div>
                <div className='BC_text'>Empower Your Team</div>
            </div>
        </div>


        {/* <div className='benefitsText'>
          <div className='subHead'>Everything You Need for an Easier, Faster and Better Staffing Experience</div>
          <div className='text'>
            Seamlessly tap into our pool of best service providers, optimize your workforce management, and minimize administrative burdens. Our mission is to deliver high-quality staffing solutions efficiently, empowering you to focus on propelling your business towards growth and success.
          </div>
        </div> */}
    </div>
  )
}

export default Benefits