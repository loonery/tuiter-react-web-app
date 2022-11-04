import {createSlice} from "@reduxjs/toolkit";
import profileData from "./profile.json";

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profileData,
    }
)
export default profileSlice.reducer;