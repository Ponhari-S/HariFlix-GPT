import MovieInfo from "./MovieInfo";
import MovieTrailer from "./MovieTrailer";

const MoviePlay = ({movie}) =>{

    return (
        <div className="screen">
            <MovieInfo movie={movie} />
            <MovieTrailer movie={movie}/>
        </div>
    )
}

export default MoviePlay;