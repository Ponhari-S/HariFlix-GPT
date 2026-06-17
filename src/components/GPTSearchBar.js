import { useSelector } from "react-redux";
import lang from "../helper/lang";

const GPTSearchBar = () => {
    const lan=useSelector((state)=>state.gpt.lang);
    return (
        <div className="w-full max-w-2xl p-5 bg-black/75 grid grid-cols-12 gap-2 rounded-md">
            <input type="text" className="px-3 h-10 rounded-md col-span-9 outline-none" placeholder={lang[lan].placeholder}></input>
            <button className="px-2 h-10 bg-red-600 text-white rounded-md col-span-3 hover:bg-red-700 transition" onClick={(e)=>e.preventDefault}>{lang[lan].btn}</button>
        </div>
    )
}

export default GPTSearchBar;