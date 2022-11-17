import { createSlice } from "@reduxjs/toolkit";
import postsArray from "./tuits.json";

const postsSlice = createSlice({
    name: "posts",
    initialState: postsArray
});
export default postsSlice.reducer;