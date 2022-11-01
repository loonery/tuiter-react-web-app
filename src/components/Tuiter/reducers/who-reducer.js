import { createSlice } from "@reduxjs/toolkit";
import whoArray from "./who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});
export default whoSlice.reducer;        // export the reducer