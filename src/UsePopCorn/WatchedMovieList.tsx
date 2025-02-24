
import WatchedMovie from './WatchedMovie'

const WatchedMovieList = (props:any) => {

  return (
    <ul className="list">
    {props?.watched.map((movie:any) => (
      <WatchedMovie movie={movie}/>
    ))}
  </ul>
  )
}

export default WatchedMovieList
