import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../WhoToFollowList/who.json";

const whoSlice = createSlice({
    name: "who",                        // the name of the reducer
    initialState: whoArray              // initialize the reducer's state
});
export default whoSlice.reducer;        // export the reducer