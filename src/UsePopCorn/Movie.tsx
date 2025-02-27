import React from 'react'

const Movie = (props:any) => {
  console.log("🚀 ~ Movie ~ props:", props)
  return (
    <li key={props?.movie.imdbID} onClick={()=>props.handleSelectMovie(props?.movie.imdbID)}>
    <img src={props?.movie.Poster} alt={`${props?.movie.Title} poster`} />
    <h3>{props?.movie.Title}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{props?.movie.Year}</span>
      </p>
    </div>
  </li>
  )
}

export default Movie
