import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='Dashboard'>

        <div className='dash_DataDiv'>
            <div className='dash_Head'>
                Dashboard
            </div>

            <div className='dash_BoxFlex'>
                <div className='dash_Box'>
                    <div className='dash_boxNum'>
                        45
                    </div>
                    <div className='dash_boxText'>
                        <div><img src=''/></div>
                        <div>Total No. of Submissions</div>
                    </div>
                </div>
                <div className='dash_Box'>
                    <div className='dash_boxNum'>
                        45
                    </div>
                    <div className='dash_boxText'>
                        <div><img src=''/></div>
                        <div>Placement Rate</div>
                    </div>
                </div>
                <div className='dash_Box'>
                    <div className='dash_boxNum'>
                        45
                    </div>
                    <div className='dash_boxText'>
                        <div><img src=''/></div>
                        <div>Avg. Placement Time</div>
                    </div>
                </div>
            </div>

            <div className='dash_chart'>
                chart
            </div>
        </div>

        <div className='dash_ServicesDiv'>
            <div className='dash_servicesHead'>
                Your Services
            </div>
            <div className='dash_servicesContainer'>
                <div className='dash_service'>
                    <div className='service_name'>Facility Provider</div>
                </div>
            </div>
            <div className='addNewService'>
                <button>Add New Services</button>
            </div>
        </div>

    </div>
  )
}

export default Dashboard