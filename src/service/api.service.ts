import axios from 'axios';
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});


export const userService = {
    getAll: async ():Promise<IUser[]>=> {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    }
}

export const postService = {
    getAll: async ():Promise<IPost[]> => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    }
}

export const commentsService = {
    getAll: async ():Promise<IComment[]> => {
        let response = await axiosInstance.get<IComment[]>(urls.comments.base);
        return response.data;
    }
}