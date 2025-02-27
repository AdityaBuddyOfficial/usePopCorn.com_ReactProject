import { useEffect, useState } from "react";
import NavBar from "./UsePopCorn/navBar";
import Main from "./UsePopCorn/main";
import Logo from "./UsePopCorn/logo";
import NumResult from "./UsePopCorn/NumResult";
import Search from "./UsePopCorn/searchBar";
import ListBox from "./UsePopCorn/ListBox";

import MovieList from "./UsePopCorn/MovieList";
import WatchedMovieList from "./UsePopCorn/WatchedMovieList";
import WatchedSummary from "./UsePopCorn/WatchedSummary";
import Box from "./UsePopCorn/ListBox";
import Loader from "./UsePopCorn/Loader";
import ErrorMessage from "./UsePopCorn/Error";
import SelectedMovie from "./UsePopCorn/SelectedMovie";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const apiKey = "cb936a06";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData || []);
  console.log("🚀 ~ App ~ movies:", movies)
  const [watched, setWatched] = useState([]);
  console.log("🚀 ~ App ~ watched:", watched)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const[ selectedId,setSelectedId]=useState(null)


  // const tempQuery="interstellar";

  async function fetchMovie() {
   
    try {

      setIsLoading(true)
      setError("");

      const res = await fetch((` https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`))
      if (!res.ok) {
        throw new Error("Somthing went wrong in fetching the data")
      }

      const data = await res.json()

      if(data.Response==="False")
      {
        throw new Error("Movie Not Found")
      }

      setMovies(data.Search)
      setIsLoading(false)
    }

    catch (err: any) {
      console.log(err)
      setError(err.message)
    }

    finally{
      setIsLoading(false)
    }
  }


  function handleSelectMovie(id:any)
  {
    setSelectedId((selectedId)=>id===selectedId?null:id)
  }

  function handleMovieDetailClose()
  {
    setSelectedId(null)
  }


  function handleAddWatched(movie:any)
  {
    setWatched((watched:any)=>[...watched,movie])
  }

  function handleDeleteWatched(id:any) {
    setWatched((watched) => watched.filter((movie) => movie.indbId
    !== id));
  }
  

  useEffect(() => {
    if(!query.length)
      {
        setMovies([])
        setError("")
        return
      } 
      

fetchMovie();
  }, [query])


  useEffect(() => {
    const handleKeyDown = (e:any) => {
      console.log("Key pressed:", e.code); // Add this line
      if (e.code === 'Escape') {
        handleMovieDetailClose();
        console.log("closing");
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>

      <NavBar >
        <Search query={query} setQuery={setQuery}/>
        <NumResult movies={movies} />
      </NavBar>
      <Main >
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies}  handleSelectMovie={ handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}

        </Box>
        <Box> 
        
          {selectedId?
          <SelectedMovie selectedId={selectedId} handleMovieDetailClose={handleMovieDetailClose} apiKey={apiKey}
          handleAddWatched={handleAddWatched}/>:
           <>
          <WatchedSummary watched={watched} />
          < WatchedMovieList watched={watched}
          handleDeleteWatched={handleDeleteWatched} />
          </>}
</Box>
      </Main>

    </>
  );
}