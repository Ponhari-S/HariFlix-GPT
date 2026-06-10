import VideoTrailer from "./VideoTrailer";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainMovie = () =>{

    const movie = useSelector((state) => state.movie.nowPlaying)
    if (!movie || movie.length === 0) return null;
    return (
        <div>
            <VideoInfo movie={movie?.[0]} />
            <VideoTrailer />
        </div>
    )
}

export default MainMovie;