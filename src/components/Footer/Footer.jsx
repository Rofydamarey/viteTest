import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<>



<footer className="bg-slate-700 text-white dark:bg-gray-900  ">
    <div className="mx-auto w-full max-w-screen-xl p-10">
      <div className="grid grid-cols-1 py-6 lg:py-8 md:grid-cols-3 ps-18">
        
<Link to="" className="block max-w-sm p-6   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">LOCATION</h5>
<p className="font-normal  ">2215 John Daniel Drive.</p>
<p className="font-normal   pt-3">Clark, MO 65243.</p>

</Link>

<Link to="" className="block max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">AROUND THE WEB</h5>
<ul className='flex '>
  <li><i className="fa-brands fa-facebook p-3 m-2 border rounded-full"></i></li>
  <li><i className="fa-brands fa-twitter p-3 m-2 border rounded-full"></i></li>
  <li><i className="fa-brands fa-linkedin-in p-3 m-2 border rounded-full"></i></li>
  <li><i className="fa-solid fa-globe p-3 border m-2 rounded-full"></i></li>
  </ul>
</Link>
<Link to="" className="block max-w-sm p-6  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">ABOUT FREELANCER</h5>
<p className="font-normal  ">Freelance is a free to use, licensed Bootstrap theme created by Route.</p>
</Link>
    </div>
   
    </div>
    <div className="px-4 py-6 bg-slate-900 dark:bg-gray-700 text-center">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">Copyright © Your Website 2021
        </span>
        
      </div>
</footer>

</>
  )
}


export default Footer