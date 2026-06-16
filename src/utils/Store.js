import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import MovieSlice from "./movieSlice";
import GPTSlice from "./gptSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice,
    movie: MovieSlice,
    gpt: GPTSlice,
  },
});

export default Store;