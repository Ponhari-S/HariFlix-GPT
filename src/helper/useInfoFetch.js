import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../utils/movieSlice";
import { API_KEY } from "../utils/constants";

export const useInfoFetch = (id) =>{
    
    const dispatch = useDispatch();
    const info = useSelector((state) => state.movie.info);

    useEffect(() => {
      if (!id || info) return;
      const getInfoFetch = async () => {
          const data = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=${API_KEY}`);
          const json = await data.json();
          dispatch(addInfo(json));
        };
        if (id) getInfoFetch();
    }, [id,dispatch]);
};