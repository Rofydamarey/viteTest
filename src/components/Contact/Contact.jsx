import React from 'react'

function Contact() {
  return (
    <>
    <div className='bg-white home flex justify-center align-items-center text-slate-700 p-40'>
      
      <div className="max-w pb-20">
          <div className="">
            <h1 className=' text-4xl font-bold text-center'>CONATCT SECTION</h1>
      <div className=" text-center mb-16">
      <div className="line w-24 h-1 bg-slate-700 mt-5 inline-block "></div>     
      <i  className="fa-solid fa-star inline-block ms-3 me-3  mt-2"></i>  
      <div className="line w-24 h-1 bg-slate-700 mt-5 inline-block"></div>   
      </div> 
          </div>
         <div className=' '>
         <div className="relative">
    <input type="text" id="floating_filled" className="block rounded-t-lg px-72 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-400 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " />
    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
     transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-400
      peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userName</label>
</div>
<div className="relative mt-12">
    <input type="text" id="floating_filled" className="block rounded-t-lg px-72 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-400 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " />
    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
     transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-400
      peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userAge</label>
</div>
<div className="relative mt-12">
    <input type="text" id="floating_filled" className="block rounded-t-lg px-72 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-400 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " />
    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
     transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-400
      peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userEmail</label>
</div>
<div className="relative mt-12">
    <input type="text" id="floating_filled" className="block rounded-t-lg px-72 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-400 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-300 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer" placeholder=" " />
    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300
     transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-400
      peer-focus:dark:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
      peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userPassword</label>
</div>
         </div>
         <button className='bg-green-400 text-white mt-9 px-5 py-2 rounded'>Send message</button>
      </div>
      
           </div>
   </>
  )
}

export default Contact