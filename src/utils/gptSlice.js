import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptTrue:false,
        lang:'en',
        results:null,
        gptResults:null,
        clickedMovie:null,
    },
    reducers:{
        addGPTFlag: (state)=>{
            state.gptTrue=!state.gptTrue
        },
        toggleLang: (state,action) => {
            state.lang=action.payload
        },
        addGPTResults: (state,action)=>{
            state.results=action.payload
        },
        addGPTMovieResults: (state,action) =>{
            state.gptResults=action.payload
        },
        addClicked: (state,action)=>{
            state.clickedMovie=action.payload;
        },
        removeClicked: (state)=>{
            state.clickedMovie=null;
        }
    }
})

export const {addGPTFlag,toggleLang,addGPTResults,addGPTMovieResults, addClicked, removeClicked} = gptSlice.actions;
export default gptSlice.reducer;