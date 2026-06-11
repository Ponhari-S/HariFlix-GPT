import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";
import { useNowPlaying } from "../helper/useNowPlaying";

function Browse() {

    useNowPlaying();
    return (
        <div className="relative w-screen">
            <MainMovie />
            <SecondaryMovie />
        </div>
    );
}

export default Browse;