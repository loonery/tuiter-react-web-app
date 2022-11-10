import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitID) => {
        await service.deleteTuit(tuitID);
        return tuitID;                      // return the tuitID so that we can remove it from the store
    }
)

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => await service.createTuit(tuit)
)

export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => await service.updateTuit(tuit)

)
