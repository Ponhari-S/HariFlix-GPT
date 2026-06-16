import MainMovie from "./MainMovie";
import SecondaryMovie from "./SecondaryMovie";
import { useNowPlaying } from "../helper/useNowPlaying";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

function Browse() {

    useNowPlaying();
    const gptTrue=useSelector((state)=>state.gpt.gptTrue);

    return (
        <div className="w-screen scrollbar-hide">
            {gptTrue ? <GPTSearch /> : <> <MainMovie /><SecondaryMovie /> </>}
        </div>
    );
}

export default Browse;