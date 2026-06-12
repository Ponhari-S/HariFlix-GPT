import MovieCard from "./MovieCard";

const MovieList= ({movie,title}) =>{
    return (
        <div className="flex flex-col px-10">
            <h1 className="text-3xl font-bold text-white mb-3 px-2">{title}</h1>
            <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide">
            {movie && movie?.filter(movie => movie.poster_url).map((movies)=>(
                <div className="flex-shrink-0" key={movies.id}>
                    <MovieCard movie={movies}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MovieList;