import VideoTrailer from "./VideoTrailer";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainMovie = () =>{

    const movie = useSelector((state) => state.movie.nowPlaying)
    if (!movie || movie.length === 0) return null;
    return (
        <div className="screen">
            <VideoInfo movie={movie?.[0]} />
            <VideoTrailer movie={movie?.[0]}/>
        </div>
    )
}

export default MainMovie;