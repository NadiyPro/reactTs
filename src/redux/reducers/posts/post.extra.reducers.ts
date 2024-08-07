import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService} from "../../../service/api.service";
import {AxiosError} from "axios";


export const loadPost = createAsyncThunk(
    'postSlice/loadPost',
    async (userId:number, thunkAPI) => {
        try {
            let response = await postService.getById(userId);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)