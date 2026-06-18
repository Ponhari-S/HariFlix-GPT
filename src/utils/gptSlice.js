import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptTrue:false,
        lang:'en',
        results:null,
        gptResults:null,
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
        }
    }
})

export const {addGPTFlag,toggleLang,addGPTResults,addGPTMovieResults} = gptSlice.actions;
export default gptSlice.reducer;