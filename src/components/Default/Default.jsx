import React from 'react'
import photo from './../../assets/avataaars.svg'
import { Link } from 'react-router-dom'
function Default() {
  return (
    <>
     <div className='bg-green-400 home flex justify-center align-items-center text-white p-40'>
       
<div className="max-w-sm bg-transparent dark:bg-gray-800 dark:border-gray-700">
    <Link to="">
        <img  src={photo}  alt="" />

    </Link>
    <div className="">
      <h1 className='text-white text-4xl font-bold text-center'>START FRAMEWORK</h1>
<div className="ps-28">
<div className="line w-16 h-2 bg-white mt-5 inline-block "></div> 
<i  className="fa-solid fa-star inline-block ms-1 me-1 mt-2"></i> 
<div className="line w-16 h-2 bg-white mt-5 inline-block"></div></div>  

<p className='pt-3 ps-10'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
   
</div>
     </div>
    </>
   
  )
}

export default Default