import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GEMINI_API } from "../utils/constants";
import { addGPTResults } from "../utils/gptSlice";

const useGeminiSearch = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    const getGeminiResponse = async () => {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": GEMINI_API,
              },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `Act as a movie recommendation system. Suggest 5 movie names, comma separated, only the names, for the query: ${query}. Example: Sita Ramam, Hi Nanna, Lucky Baskar, Do Deewane Seher Main, Family Star`,
                      },
                    ],
                  },
                ],
              }),
            }
          );
      
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!text) {
            console.error("No text in Gemini response");
            return;
          }
          const movieNames = text.split(",").map((title) => title.trim());
          dispatch(addGPTResults(movieNames));
        } catch (error) {
          console.error("Gemini API error:", error);
        }
      };

    getGeminiResponse();
  }, [query, dispatch]);
};

export default useGeminiSearch;