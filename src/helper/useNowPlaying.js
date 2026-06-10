import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { API_KEY } from "../utils/constants";

export const useNowPlaying = () =>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
        getNowPlayingMovies();
    },[getNowPlayingMovies])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getNowPlayingMovies() {
        const data=await fetch(`https://api.watchmode.com/v1/releases/?apiKey=${API_KEY}`);
        const json=await data.json();
        dispatch(addNowPlaying(json.releases));
    }
}