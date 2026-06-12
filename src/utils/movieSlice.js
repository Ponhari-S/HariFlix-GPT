import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlaying: null,
        info: null,
        videoId: null,
        horror:null,
        comedy:null,
        actionse:null
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
        },
        addHorror: (state,action) => {
            state.horror=action.payload;
        },
        addComedy: (state,action) => {
            state.comedy=action.payload;
        },
        addAction: (state,action) => {
            state.actionse=action.payload;
        },
    }
});

export const {addNowPlaying, addInfo, addVideoId, addHorror, addComedy, addAction} = movieSlice.actions;
export default movieSlice.reducer;