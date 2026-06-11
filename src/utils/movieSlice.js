import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlaying: null,
        info: null,
        videoId: null,
    },
    reducers:{
        addNowPlaying: (state,action) => {
            state.nowPlaying=action.payload;
        },
        addInfo: (state,action) => {
            state.info=action.payload;
        },
        addVideoId: (state,action) => {
            state.videoId=action.payload;
        }
    }
});

export const {addNowPlaying, addInfo, addVideoId} = movieSlice.actions;
export default movieSlice.reducer;