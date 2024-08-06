import {createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../../service/api.service";
import {AxiosError} from "axios";


export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id:number, thunkAPI) => {
        try {
            let response = await userService.getById(id);
            return thunkAPI.fulfillWithValue(`id: ${response.id} name: ${response.name} email: ${response.email}`);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
)