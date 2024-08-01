import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Default from './components/Default/Default';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';



 let x=createBrowserRouter(
[
{path:"",element:<Layout/>,children:[
{index:true,element:<Default/>},
{path:"home",element:<Home/>},
{path:"portfolio",element:<Portfolio/>},
{path:"contact",element:<Contact/>},
{path:"*",element:<Notfound/>}



]}

])
function App() {

  return <RouterProvider router={x}></RouterProvider>

}

export default App
