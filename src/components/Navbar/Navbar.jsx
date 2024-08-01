import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>

    <nav className="bg-slate-700 text-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-40 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">START FRAMEWORK
        </span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
     text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-2 md:p-0 mt-4  
       md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       <li>
          <NavLink to="home" className="block py-2 px-3 text-white rounded hover:bg-gray-100
           md:hover:bg-transparent md:border-0  md:p-2 dark:text-white md:active:bg-green-400
            md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className="block py-2 px-3 text-white rounded hover:bg-gray-100
           md:hover:bg-transparent md:border-0 md:hover:bg-green-400  md:active:bg-green-400 md:p-2 dark:text-white
            md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className="block py-2 px-3 text-white rounded
          hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-green-400  md:active:bg-green-400 md:p-2
           dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700
            dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>


</>


  )
}

export default Navbar