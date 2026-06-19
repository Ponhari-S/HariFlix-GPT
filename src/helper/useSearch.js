import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGPTMovieResults } from "../utils/gptSlice";
import { MOVIE_API } from "../utils/constants";

const useSearch = (movieNames) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieNames || movieNames.length === 0) return;

    const searchMovies = async () => {
      const searchPromises = movieNames.map((name) =>
        fetch(
          `https://api.watchmode.com/v1/search/?apiKey=${MOVIE_API}&search_field=name&search_value=${encodeURIComponent(name)}`
        ).then((res) => res.json())
      );
      const searchResults = await Promise.all(searchPromises);
      const ids = searchResults
        .map((r) => r.title_results?.[0]?.id)
        .filter(Boolean);

      const detailPromises = ids.map((id) =>
        fetch(
          `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${MOVIE_API}`
        ).then((res) => res.json())
      );
      const movies = await Promise.all(detailPromises);
      dispatch(addGPTMovieResults(movies));
    };

    searchMovies();
  }, [movieNames, dispatch]);
};

export default useSearch;