import { useInfoFetch } from "../helper/useInfoFetch";
import { useSelector } from "react-redux";

const VideoInfo = ({movie}) => {
    useInfoFetch(movie?.id)
    const movie_info = useSelector((state) => state.movie.info);
    return (
        <div className="pt-96 pl-32">
            <h1 className="text-4xl font-bold">{movie?.title}</h1>
            <p className="pt-2 w-1/3">{movie_info?.plot_overview}</p>
            <div className="py-5 flex flex-row justify-start gap-x-10">
                <button className="p-2 rounded-md bg-gray-200 text-black w-[86px] hover:bg-gray-300">Play</button>
                <button className="p-2 rounded-md bg-black text-white">More Info</button>
            </div>
        </div>
    )
}

export default VideoInfo;