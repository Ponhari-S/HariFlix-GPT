import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideoId } from "../utils/movieSlice";
import { YT_API_KEY } from "../utils/constants";

const useGetTrailer = (title) => {
    const dispatch=useDispatch();
    const videoId = useSelector((state) => state.movie.videoId);
    useEffect(()=>{
        if (!title || videoId) return;
        async function getTrailer(title) {
            const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(title + " official trailer")}&type=video&maxResults=1&key=${YT_API_KEY}`);
            const json =await data.json();
            dispatch(addVideoId(json.items?.[0]?.id?.videoId));
        }

        if(title) getTrailer(title);
    },[videoId,title,dispatch]);
}

export default useGetTrailer;