import React from 'react'
import './FlexiBanner.css'
import flexiimg from '../../../assets/flexiImg.png'
import fl1 from '../../../assets/fl1.png'
import fl2 from '../../../assets/fl2.png'
import fl3 from '../../../assets/fl3.png'
import fl4 from '../../../assets/fl4.png'
import fl5 from '../../../assets/fl5.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FlexiBanner = () => {

    const navigate = useNavigate();


    const searchFlexiServices = async () => {
        const freqSearch = 'Flexi Services';

        if (freqSearch) {

            try {
                navigate(`/search?input=${freqSearch}&type=service`);
            }
            catch (err) { console.log(err); }
      
          }
    }


    return (
        <div className='FlexiBanner'>
            <div className='FlexiBox'>

                <div className='FlexiImgDiv'>
                    <img src={flexiimg} alt="" />
                </div>

                <div className='FlexiContent'>
                    <div className='flexiHeading'>
                        Covendx Flexi Features
                    </div>
                    <div className='text'>Unlock the power of flexibility with Covendx</div>

                    <div className='flexiCardsContainer'>

                        <div className='flexiCard'>
                            <img src={fl1} />
                            <div className='flexiCardText'>
                                PAN India
                            </div>
                        </div>

                        <div className='flexiCard'>
                            <img src={fl2} />
                            <div className='flexiCardText'>
                                Quick setup
                            </div>
                        </div>

                        <div className='flexiCard'>
                            <img src={fl3} />
                            <div className='flexiCardText'>
                                On demand vendors
                            </div>
                        </div>

                        <div className='flexiCard'>
                            <img src={fl5} />
                            <div className='flexiCardText'>
                                Enhanced flexibility
                            </div>
                        </div>

                        <div className='flexiCard'>
                            <img src={fl4} />
                            <div className='flexiCardText'>
                                One Day to month on month rolling services
                            </div>
                        </div>

                    </div>

                    <button className='flexiBtn'
                        onClick={searchFlexiServices}
                    >
                        Know More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FlexiBanner