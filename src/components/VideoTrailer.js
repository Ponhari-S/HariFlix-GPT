import { useSelector } from "react-redux";
import useGetTrailer from "../helper/useGetTrailer";

const VideoTrailer = ({movie}) => {
    useGetTrailer(movie.title);
    const videoId = useSelector((state)=>state.movie.videoId);
    return (
        <div className="relative w-screen aspect-video">
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId+"?&autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&loop=1&playlist="+videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoTrailer;