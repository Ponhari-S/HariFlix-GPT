import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";
import { useNowPlaying } from "../helper/useNowPlaying";

function Browse() {

    useNowPlaying();

    return (
        <div className="w-screen scrollbar-hide">
            <MainMovie />
            <SecondaryMovie />
        </div>
    );
}

export default Browse;