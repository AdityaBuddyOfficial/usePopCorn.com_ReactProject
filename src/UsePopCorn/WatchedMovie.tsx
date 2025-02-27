

const WatchedMovie = (props:any) => {
console.log("🚀 ~ WatchedMovie ~ props:", props)


  console.log("id same hai kya?",props.movie.indbId
  )
  return (
    <li key={props.movie.imdbID}>
    <img src={props.movie.Poster} alt={`${props.movie.Title} poster`} />
    <h3>{props.movie.Title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{props.movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{props.movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{props.movie.Runtime} min</span>
      </p>

      <button
          className="btn-delete"
          onClick={() => props.handleDeleteWatched(props.movie.indbId)}
        >
          X
        </button>
    </div>
  </li>
  )
}

export default WatchedMovie
