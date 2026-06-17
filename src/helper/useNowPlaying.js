import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, addComedy, addHorror, addNowPlaying } from "../utils/movieSlice";
import { MOVIE_API } from "../utils/constants";

export const useNowPlaying = () =>{
    
    const dispatch = useDispatch();
    const movies=useSelector((state)=>state.movie.nowPlaying)

    useEffect(()=>{
        if(movies) return;
        async function getNowPlayingMovies() {
            const data=await fetch(`https://api.watchmode.com/v1/releases/?apiKey=${MOVIE_API}`);
            const json=await data.json();
            const releases = json.releases || [];
            dispatch(addNowPlaying(releases.slice(0,20)));
            dispatch(addAction(releases.slice(20,40)));
            dispatch(addComedy(releases.slice(40,60)));
            dispatch(addHorror(releases.slice(60,80)));
        }
        getNowPlayingMovies();
    },[dispatch,movies])
}