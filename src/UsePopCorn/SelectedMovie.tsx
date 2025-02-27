import React, { useEffect, useState } from 'react'
import StartRating from './start/StartRating';
import Loader from './Loader';

const SelectedMovie = ({ selectedId, handleMovieDetailClose, apiKey,handleAddWatched }: any) => {


    const [movieAfterSelect, setMovieAfterSelect] = useState({})
    console.log("🚀 ~ movieAfterSelect:", movieAfterSelect)
    const [isLoading, setIsLoading] = useState(false);
    const [userRating,setUserRating]=useState("")

    const { Title: Title,
        Year: Year,
        Poster: Poster,
        Runtime: Runtime,
        imdbRating: imdbRating,
        Plot: Plot,
        Released: Released,
        Actors: Actors,
        Director: Director,
        Genre: Genre,
    }: any = movieAfterSelect;




    async function getSelectedMovie(id: any) {

        const controller= new AbortController();
        try {
           setIsLoading(true)
            const res = await fetch(` https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`,{signal:controller.signal});
            const data = await res.json();
            console.log("🚀 ~ SelectedMovie ~ data:", data)
            setMovieAfterSelect(data)
            setIsLoading(false)
        }
        catch (err) {
            console.log("err)", err)
        }

        return controller.abort();
    }

    useEffect(() => {

    

        getSelectedMovie(selectedId);

      
    }, [selectedId])

function handleAdd()
{
    const newWatchedMovie={
      indbId:selectedId,
      Title,
      Year,
      Poster,
      imdbRating:Number(imdbRating),
      Runtime:Number(Runtime.split(" ").at(0)),
      userRating,
    }
    handleAddWatched(newWatchedMovie)
    handleMovieDetailClose(true)
}


useEffect(()=>{
    if (!Title) return;
   document.title = `Movie | ${Title}`

   return ()=>{
    document.title = "UsePopCorn";
   }
},[Title])




    return (
        <div className='details'>
            {isLoading ? <Loader/>:<>
                <header>
                <button className="btn-back" onClick={handleMovieDetailClose}>
                    &larr;
                </button>
                <img src={Poster} alt={`Poster of ${Title} movie`} />
                <div className="details-overview">
                    <h2>{Title}</h2>
                    <p>
                        {Released} &bull; {Runtime}
                    </p>
                    <p>{Genre}</p>
                    <p>
                        <span>⭐️</span>
                        {imdbRating} IMDb rating
                    </p>
                </div>
            </header>
            
            <section>
                <div className="rating">
                    <StartRating
                        maxRating={10}
                        size={24}
                        onSetRating={setUserRating}
                    />
                    <button className='btn-add' onClick={handleAdd}> + Add to List</button>
                </div>

                <p>
                    <em>{Plot}</em>
                </p>
                <p>Starring {Actors}</p>
                <p>Directed by {Director}</p>
            </section>


            </> }
            
        </div>
    )
}

export default SelectedMovie
