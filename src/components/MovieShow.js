const MovieShow = ({movie}) => {
    return (
        <div className="cursor-pointer group relative">
            <img className="w-36 h-52 object-cover rounded-md group-hover:scale-110 group-hover:brightness-50 transition-all duration-300 shadow-lg" src={movie.poster} alt="Poster" />
        </div>
    )
}

export default MovieShow;