import { createSlice } from "@reduxjs/toolkit";
import postArray from "./tuits.json";

const postsSlice = createSlice({
    name: "posts",
    initialState: postArray
});
export default postsSlice.reducer;        // export the reducer