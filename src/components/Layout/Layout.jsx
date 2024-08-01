import React from 'react'
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';


function Layout() {
  return (
    <>
  <Navbar/>
<div className="container p-0 ">
<Outlet/>
</div>
  <Footer/>
    </>
  )
}

export default Layout