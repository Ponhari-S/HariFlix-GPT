import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryMovie = () =>{
    const movies=useSelector((state)=>state.movie); 
    if (!movies || movies.length === 0) return null;
    return(
        <div className="bg-black w-screen flex flex-col py-8">
            <div className="-mt-[280px]">
                <MovieList movie={movies.nowPlaying} title="Now Playing"/>
            </div>
            <MovieList movie={movies.actionse} title="Action"/>
            <MovieList movie={movies.comedy} title="Comedy"/>
            <MovieList movie={movies.horror} title="Horror"/>
        </div>
    )
}

export default SecondaryMovie;