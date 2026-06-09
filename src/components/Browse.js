import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";
import { useNowPlaying } from "../helper/useNowPlaying";

function Browse() {

    useNowPlaying();
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <MainMovie />
            <SecondaryMovie />
        </div>
    );
}

export default Browse;