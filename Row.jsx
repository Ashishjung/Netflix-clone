import React, { useEffect, useState } from 'react'
import axios from "./axios"
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"; 
const base_url="https://image.tmdb.org/t/p/original/"

const Row = ({title,fetchurl,isLargerow}) => {
    let [movies,upmovies]=useState([])
    let[trailerUrl,uptrailerUrl]=useState("")
    useEffect(()=>{
        async function getApi(){
const request=await axios.get(fetchurl)
upmovies(request.data.results)
}
  getApi()
    },[fetchurl]);
  const opts={
    height:"390",
    width:"600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
}
function getMovie(movie){
  if(trailerUrl){
  uptrailerUrl("");
}
else{
  movieTrailer(movie?.name || "")
  .then((url)=>{
    // https://www.youtube.com/watch?v=XtMThy8QKqU
    const urlParams=new URLSearchParams(new URL(url).search)
    uptrailerUrl(urlParams.get("v"))
    console.log(url)
})
  .catch((err)=>{
    console.log(err);
  })
}
}
    return (
<>
<div className="row">
<h1>{title}</h1>
<div className="row-posters">
    {movies.map(movie=>(
        <img 
        onClick={()=>getMovie(movie)}
        key={movie.id}
        className={`movie_images ${isLargerow && "rowposterlarge"}`}
        src={`${base_url}${ isLargerow?movie.poster_path:movie.backdrop_path}`} 
        alt={movie.name}/>
    ))}
</div>
{trailerUrl && <YouTube
  videoId={trailerUrl}
  opts={opts}
  className="yout"
/>}
</div>
  </>
    )
}

export default Row
