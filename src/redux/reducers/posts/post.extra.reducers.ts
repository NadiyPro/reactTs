import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService} from "../../../service/api.service";
import {AxiosError} from "axios";

export const loadPost = createAsyncThunk(
    'postSlice/loadPosts',
    async (id:number, thunkAPI) => {
        try {
            let response = await postService.getById(id);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)