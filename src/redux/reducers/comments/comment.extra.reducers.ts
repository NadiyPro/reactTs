import {createAsyncThunk} from "@reduxjs/toolkit";
import {commentsService} from "../../../service/api.service";
import {AxiosError} from "axios";

export const loadComment = createAsyncThunk(
    'commentSlice/loadComment',
    async (id:number, thunkAPI) => {
        try {
            let response = await commentsService.getById(id);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)