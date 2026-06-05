import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default Store;