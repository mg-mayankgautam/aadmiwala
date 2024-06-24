import React from 'react'
import './Faq.css'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Faq = () => {

    const [selected,setSelected]=useState(null);

    const toggle = (i) =>{

        if(selected ===i){
            return setSelected(null)
        }
        setSelected(i)
       // return i;
    }


  return (
    <div>
         <div className='FAQs'>
        <div className='FAQ_head'>FAQs</div>
        <div className='FAQ_content'>
            {/* <div className='FAQ_box'>
                <div>What services does Aadmiwala offer?</div>
                <div>‸</div>

            </div> */}
            {data.map((item,i)=>(
                <div className='FAQ_box'
                onClick={()=>toggle(i)} key={i}
                >
                    <div className='title' 
                    
                    >
                        <div>{item.question}</div>
                        
                        {selected===i ? <span className='faqArrows'><ExpandLessIcon/> </span>: <span className='faqArrowsOrange'><ExpandMoreIcon/> </span>}
                    </div>
                    <div className={selected=== i ?'content show' : 'content'}>{item.answer}</div>

                </div>
            ))}
            
        </div>
    </div>
    </div>
  )
}

const data = [{
    question:'What services does Aadmiwala offer?',
    answer:'At Aadmiwala, we offer a one-stop solution for all your staffing/vendor needs, eliminating the hassle of searching multiple service providers. Whether you require  housekeeping support, or office assistance, we provide tailored opportunities to meet your unique business requirements. Say goodbye to the complexity of managing multiple vendors and enjoy peace of mind and confidence with Aadmiwala.'
},

{
    question:"What industries does Aadmiwala cater to?",
    answer:"Aadmiwala serves clients across various industries, including but not limited to healthcare, IT, finance, manufacturing, hospitality, and retail."
},
{
    question:"What is the process for partnering with Aadmiwala?",
    answer:"Partnering with Aadmiwala is simple. You can get started by contacting us through our website or by phone. Our team will then work with you to understand your staffing needs and tailor a solution that meets your requirements."
},
{
    question:"How does Aadmiwala ensure the quality of the staffing agencies in its network?",
    answer:"We meticulously evaluate and validate all staffing agencies before partnering with them. Our stringent standards ensure that only reliable and high-quality agencies are included in our network."
},

]

export default Faq
