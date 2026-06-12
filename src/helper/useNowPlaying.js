import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { API_KEY } from "../utils/constants";

export const useNowPlaying = () =>{
    
    const dispatch = useDispatch();
    const movies=useSelector((state)=>state.movie.NowPlaying)

    useEffect(()=>{
        if(movies) return;
        async function getNowPlayingMovies() {
            const data=await fetch(`https://api.watchmode.com/v1/releases/?apiKey=${API_KEY}`);
            const json=await data.json();
            dispatch(addNowPlaying(json.releases));
        }
        getNowPlayingMovies();
    },[dispatch])
}