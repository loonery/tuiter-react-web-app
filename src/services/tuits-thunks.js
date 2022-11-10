import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => await service.findTuits()
)