import React from 'react'

const WatchedSummary = (props:any) => {
    const average = (arr: any) =>
        arr.reduce((acc:any, cur:any, i:any, arr:any) => acc + cur / arr.length, 0);
        const avgImdbRating = average(props.watched.map((movie: any) => movie.imdbRating));
      const avgUserRating = average(props.watched.map((movie: any) => movie.userRating));
      const avgRuntime = average(props.watched.map((movie: any) => movie.runtime));
  return (
    <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{props.watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>
  )
}

export default WatchedSummary
