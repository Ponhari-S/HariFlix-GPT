import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name:"user",
    initialState:{
        name:null,
        profile:null,
    },
    reducers:{
        setUser: (state,action) => {
            state.name = action.payload.name;
            state.profile = action.payload.profile;
        },
        removeUser: (state) => {
            state.name = null;
            state.profile = null;
        }
    }
});

export const {setUser,removeUser} =userSlice.actions;
export default userSlice.reducer;