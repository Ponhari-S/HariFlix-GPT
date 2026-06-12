import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryMovie = () =>{
    const movies=useSelector((state)=>state.movie); 
    return(
        <div className="bg-black w-screen flex flex-col gap-8 py-8 -mt-32 relative z-10">
            <MovieList movie={movies.nowPlaying} title="Now Playing"/>
            <MovieList movie={movies.actionse} title="Action"/>
            <MovieList movie={movies.comedy} title="Comedy"/>
            <MovieList movie={movies.horror} title="Horror"/>
        </div>
    )
}

export default SecondaryMovie;