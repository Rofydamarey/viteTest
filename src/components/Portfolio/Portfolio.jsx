import React, { useState } from 'react'
import image1 from './../../assets/poert1.png'
import image2 from './../../assets/port2.png'
import image3 from './../../assets/port3.png'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navbar from './../Navbar/Navbar';

function Portfolio() {

const [imgClicked, setImgClicked] = useState(false)
const [image, setImage] = useState("")
const imgs=[image1,image2,image3,image1,image2,image3]
const t=true, f=false;
function imgCard(imgUrl,id) {
    return(
    <>
    <div className="col-lg-4 col-md-6">
<div onClick={()=> openIamge(imgUrl)} key={id}>
<div className="image position-relative overflow-hidden rounded-2">
<img className='img' src={imgUrl} alt="" />
<div className="layer  position-absolute top-0 start-0 h-100 w-100 justify-content-center align-items-center d-flex">
<i className='fa-solid fa-plus fa-2x text-white'></i>
</div>
</div>

</div>
    </div>
    </>
  )
    
}
function openIamge(image){
    setImage(image);
    setImgClicked(t)
}
function hideImage(e) {
    if (e==undefined) {
        setImage("");
    setImgClicked(f)
    }
}

  return (
    <HelmetProvider>
        <Helmet>
            <title>Portfolio</title>
        </Helmet>
<div className="portfolio mt-md-auto p-5 d-flex align-items-center justify-content-center vh-90">
{
    imgClicked? (
<div className="position-fixed d-flex justify-content-center align-items-center top-0 start-0 h-100 w-100 z-3 bg-primary bg-opacity-25"
onClick={(e)=> hideImage(e.target.src)}
>
    <div className="overflow-hidden " style={{width:"600px"}}>
        <img src={image} className='rounded-3' alt="" />
    </div>

</div>
    ):null
}
<div className="container p-5 pt-5 text-center">
<Navbar title="Portfolio Component"/>
    <div className="row g-4 mb-5">
        {imgs.map((ele,index)=>{
            return(
                imgCard(ele,index)
            )
        })}

    </div>
</div>
</div>

    </HelmetProvider>
  )
}

export default Portfolio