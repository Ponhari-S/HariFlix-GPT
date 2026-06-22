import { useDispatch } from "react-redux";
import { addClicked } from "../utils/gptSlice";

const MovieShow = ({movie}) => {
    const dispatch=useDispatch();
    return (
        <div className="cursor-pointer group relative">
            <img className="w-36 h-52 object-cover rounded-md group-hover:scale-110 group-hover:brightness-50 transition-all duration-300 shadow-lg" src={movie.poster} alt="Poster" onClick={()=>dispatch(addClicked(movie))} />
        </div>
    )
}

export default MovieShow;