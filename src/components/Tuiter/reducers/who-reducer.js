import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../WhoToFollowList/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});
export default whoSlice.reducer;        // export the reducer