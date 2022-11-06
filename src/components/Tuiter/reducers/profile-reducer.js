import {createSlice} from "@reduxjs/toolkit";
import profileData from "./profile.json";

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profileData,

    reducers: {
        saveProfileChanges(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.website = action.payload.website;
        }
    }
    }
)
export default profileSlice.reducer;
export const {saveProfileChanges} = profileSlice.actions;