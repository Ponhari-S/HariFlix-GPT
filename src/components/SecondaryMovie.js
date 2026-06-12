import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryMovie = () =>{
    const movies=useSelector((state)=>state.movie); 
    return(
        <div>
            <MovieList movie={movies.nowPlaying}/>
            <MovieList movie={movies.nowPlaying}/>
            <MovieList movie={movies.nowPlaying}/>
            <MovieList movie={movies.nowPlaying}/>
            <MovieList movie={movies.nowPlaying}/>
        </div>
    )
}

export default SecondaryMovie;