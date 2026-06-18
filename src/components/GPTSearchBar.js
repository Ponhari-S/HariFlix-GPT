import { useSelector } from "react-redux";
import lang from "../helper/lang";
import {useState } from "react";
import useGeminiSearch from "../helper/useGeminiSearch";
import useSearch from "../helper/useSearch";

const GPTSearchBar = () => {
    const lan=useSelector((state)=>state.gpt.lang);
    const [text,setText]=useState("");
    const [query,setQuery]=useState("");
    const handleGPTSubmit=(e)=>{
        e.preventDefault();
        setQuery(text);
    }
    useGeminiSearch(query);
    const movie=useSelector((state)=>state.gpt.results);
    useSearch(movie);
    return (
        <div className="w-full max-w-2xl p-5 bg-black/75 grid grid-cols-12 gap-2 rounded-md">
            <input type="text" className="px-3 h-10 rounded-md col-span-9 outline-none" value={text} placeholder={lang[lan].placeholder} onChange={(e)=>setText(e.target.value)}></input>
            <button className="px-2 h-10 bg-red-600 text-white rounded-md col-span-3 hover:bg-red-700 transition" onClick={handleGPTSubmit}>{lang[lan].btn}</button>
        </div>
    )
}

export default GPTSearchBar;