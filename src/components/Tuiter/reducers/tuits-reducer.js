import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const tuitSlice = createSlice(
    {
        name: 'tuits',
        initialState: tuits
    });
export default tuitSlice.reducer;