import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../../services/tuits-thunks";

// create an object that represents the currently
// logged in user which contains profile information
// such as username, their avatar logo, and handle.
// Later this will come from users login in
const currentUser = {
    "userName": "Ryan Looney",
    "userHandle": "@rloon",
    "userImage": "../images/profile_images/tuiter_profile_picture.jpg",
};

// The template tuit object has default values, and takes the current user's information (spreader notation)
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "tuitTime": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitSlice = createSlice(
{
        name: 'tuitsData',
        initialState,
        extraReducers: {
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
                },
            [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },

            [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },

            [deleteTuitThunk.fulfilled] :
                (state, { payload }) => {
                    state.loading = false
                    state.tuits = state.tuits
                        .filter(t => t._id !== payload)
                },
            [createTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.tuits.push(payload)
                },
            [updateTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                    state.tuits[tuitNdx] = {
                        ...state.tuits[tuitNdx],
                        ...payload
                    }
                }
        },
        // add the createTuit reducer function to this slice's reducers. This function appends a new tuit to the
        // front of the array of tuits contained in the state. All fields
        // from templateTuit are copied and the timestamp is used as an id for each new tuit.
        reducers: {
            // function mutates the state of this slice based upon the incoming tuit
            createTuit(state, action) {
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            },

            // reducer that will manipulate the state such that we splice away the tuit that was requested for
            // delete
            deleteTuit(state, action) {
                // get the index of the tuit whose id is passed in as the payload
                const index = state.findIndex((tuit) => tuit._id === action.payload);
                // splice out the retrieved id
                state.splice(index, 1);
            }
        }
});
export const {createTuit, deleteTuit} = tuitSlice.actions;
export default tuitSlice.reducer;