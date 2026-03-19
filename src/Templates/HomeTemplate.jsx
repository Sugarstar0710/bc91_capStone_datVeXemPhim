import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'



const HomeTemplate = () => {
  return (
    <div className='home-page'>
        <HeaderHome/>
        <div className="content">
            <Outlet/>
        </div>
        <div className='mt-5'>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeTemplate