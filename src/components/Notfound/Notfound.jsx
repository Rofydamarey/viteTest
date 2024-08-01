import React from 'react'
import img from'./../../assets/cry.png'


function Notfound() {
  return (
  <>
  <div className='text-center'>
  <h1 className='pt-4'>Not found page</h1>
  <div className='flex justify-center items-center'><img src={img}  alt="" /></div>
  
  </div>
  </>
      
    
  )
}

export default Notfound