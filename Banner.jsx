import React, { useEffect, useState } from 'react'
import axios from "./axios";
import requests from './request';
import "./Banner.css"
const Banner = () => {
    let[moviesbanner,upbanner]=useState([])
    useEffect(()=>{
        async function getdata(){
const request=await axios.get(requests.netflixoriginal)
upbanner(
    request.data.results[
        Math.floor(Math.random() * request.data.results.length-1)
         ])
    console.log(request.data.results)
return request;
  }
        getdata()
    },[])
   console.log(moviesbanner)
   let image_background={
       backgroundSize:"cover",
       backgroundImage:`url("https://image.tmdb.org/t/p/original/${moviesbanner?.backdrop_path}")`,
       backgroundPosition:"center center",
       backgroundRepeat:"no-repeat"
   }
    return (
        <>
        <header 
        className="banner"
        style={image_background}
        >
<div className="header-content">
    <h1 className="moviename">{moviesbanner?.name || moviesbanner?.title || moviesbanner?.original_name}</h1>
    <div className="banner_buttons">
      <button className="butn">Play</button>
    <button className="butn">My List</button>
    </div>
    <h1 className="overview">{moviesbanner?.overview}</h1>
</div>
        </header>
        </>
    )
}

export default Banner
