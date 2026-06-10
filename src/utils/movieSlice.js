import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlaying: null,
        info: null,
    },
    reducers:{
        addNowPlaying: (state,action) => {
            state.nowPlaying=action.payload;
        },
        addInfo: (state,action) => {
            state.info=action.payload;
        }
    }
});

export const {addNowPlaying, addInfo} = movieSlice.actions;
export default movieSlice.reducer;