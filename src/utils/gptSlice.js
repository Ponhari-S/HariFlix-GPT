import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptTrue:false,
    },
    reducers:{
        addGPTFlag: (state)=>{
            state.gptTrue=!state.gptTrue
        }
    }
})

export const {addGPTFlag} = gptSlice.actions;
export default gptSlice.reducer;