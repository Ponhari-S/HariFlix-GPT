import MovieCard from "./MovieCard";

const MovieList= ({movie,title}) =>{
    return (
        <div className="px-6 md:px-12 mb-10 relative z-20">
            <h1 className="text-3l md:text-3xl font-bold text-white">{title}</h1>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 mt-4">
            {movie && movie?.filter(movie => movie.poster_url).map((movies)=>(
                <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:z-30 cursor-pointer py-6 px-3" key={movies.id}>
                    <MovieCard movie={movies}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MovieList;