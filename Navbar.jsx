import React, { useEffect, useState } from 'react'
import "./Navbar.css"
const Navbar = () => {
    let [show,upshow]=useState(false)
    useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
upshow(true)
    }else{
        upshow(false)
    }
    // return(()=>{
    //     window.removeEventListener("scroll")
    // })
})
    },[])
    return (
     <>
     <div className={`navbar ${show && "black_box"}`}>
         <img className="netflix_logo"
         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo"/>
         <img
         className="netflix-avtar"
          src= "https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
         alt="avatar"/>
     </div>
     </>
    )
}

export default Navbar
