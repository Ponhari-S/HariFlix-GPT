import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptTrue:false,
        lang:'en',
    },
    reducers:{
        addGPTFlag: (state)=>{
            state.gptTrue=!state.gptTrue
        },
        toggleLang: (state,action) => {
            state.lang=action.payload
        }
    }
})

export const {addGPTFlag,toggleLang} = gptSlice.actions;
export default gptSlice.reducer;