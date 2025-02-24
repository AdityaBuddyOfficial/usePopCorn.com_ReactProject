import React from 'react'
import Movie from './Movie'

const MovieList = (props:any) => {
  return (
    <ul className="list">
    {props?.movies?.map((movie:any) => (
      <Movie movie={movie} key={movie?.imbdID}/>
    ))}
  </ul>
  )
}

export default MovieList
