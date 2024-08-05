import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentsService} from "../../../service/api.service";

export const loadComments = createAsyncThunk(
    'commentsSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            let response = await commentsService.getAll();
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)