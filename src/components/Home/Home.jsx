import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Home() {
  
  return (
    <>
     <div className='bg-green-400 home flex justify-center align-items-center text-white p-40'>
       
       <div className="max-w p-16">
           <div className="">
             <h1 className='text-white text-4xl font-bold text-center'>ABOUT COMPONENT</h1>
       <div className=" text-center">
       <div className="line w-24 h-2 bg-white mt-5 inline-block "></div>     
       <i  className="fa-solid fa-star inline-block ms-3 me-3  mt-2"></i>  
       <div className="line w-24 h-2 bg-white mt-5 inline-block"></div>   
       </div> 
           </div>
          <div className='flex '>
          <p className='lead inline-block me-9 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files
          including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='lead inline-block'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files
          including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
       </div>
       
            </div>
    </>
  )
}

export default Home