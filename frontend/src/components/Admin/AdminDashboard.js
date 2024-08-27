import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const AdminDashboard = () => {

    const { id } = useParams();


    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(id)
      }, [])

   

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard