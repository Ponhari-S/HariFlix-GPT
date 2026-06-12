import MovieCard from "./MovieCard";

const MovieList= ({movie}) =>{
    return (
        <div>
            <MovieCard movie={movie}/>
        </div>
    )
}

export default MovieList;