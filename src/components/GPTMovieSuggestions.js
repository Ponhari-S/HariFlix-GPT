import { useSelector } from "react-redux";
import MovieShow from "./MovieShow";

const GPTMovieSuggestions = () =>{
    const movies=useSelector((state)=>state.gpt.gptResults);
    return(
        <div className="flex gap-10">
            {movies && 
                movies.map((movie)=>{
                    return(
                        <MovieShow key={movie.id} movie={movie}/>
                    )
                })
            }
        </div>
    )
}

export default GPTMovieSuggestions;