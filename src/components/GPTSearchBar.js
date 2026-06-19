import { useSelector } from "react-redux";
import lang from "../helper/lang";
import { useState } from "react";
import useGeminiSearch from "../helper/useGeminiSearch";
import useSearch from "../helper/useSearch";

const GPTSearchBar = () => {
  const lan = useSelector((state) => state.gpt.lang);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const handleGPTSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
  };
  useGeminiSearch(query);
  const movie = useSelector((state) => state.gpt.results);
  useSearch(movie);

  return (
    <div className="w-[90%] max-w-2xl mx-auto p-3 md:p-5 bg-black/75 grid grid-cols-12 gap-2 rounded-md">
      <input
        type="text"
        className="px-3 h-9 md:h-10 text-sm md:text-base rounded-md col-span-8 md:col-span-9 outline-none"
        value={text}
        placeholder={lang[lan].placeholder}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        className="px-1 md:px-2 h-9 md:h-10 text-xs md:text-base bg-red-600 text-white rounded-md col-span-4 md:col-span-3 hover:bg-red-700 transition whitespace-nowrap"
        onClick={handleGPTSubmit}
      >
        {lang[lan].btn}
      </button>
    </div>
  );
};

export default GPTSearchBar;