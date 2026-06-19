import { useSelector } from "react-redux";
import MovieShow from "./MovieShow";

const GPTMovieSuggestions = () => {
  const movies = useSelector((state) => state.gpt.gptResults);
  return (
    <div className="grid grid-cols-2 gap-4 md:flex md:gap-10 md:flex-wrap justify-items-center md:justify-start px-3 md:px-0">
      {movies &&
        movies.map((movie) => {
          return <MovieShow key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default GPTMovieSuggestions;