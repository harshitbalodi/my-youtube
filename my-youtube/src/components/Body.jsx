import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
const Body = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-col'>
        <Sidebar/>
        <Outlet/>
        </div>
        
    </div>
  )
}

export default Body