import React from 'react'
import Movie from './Movie'

const MovieList = (props:any) => {
  console.log("🚀 ~ MovieList ~ props:", props)
  return (
    <ul className="list list-movies">
    {props?.movies?.map((movie:any) => (
      <Movie movie={movie} key={movie?.imbdID}  handleSelectMovie={props.handleSelectMovie} />
    ))}
  </ul>
  )
}

export default MovieList
