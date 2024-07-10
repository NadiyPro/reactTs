import axios from "axios";
import {IUsers} from "../module/IUsers";
import {IPosts} from "../module/IPosts";
import {IComments} from "../module/IComments";

let axiosUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type':'application/json'}
})

const getAllUsers = async ():Promise<{users: IUsers[]}> => {
    return await axiosUsers.get('/users').then((response) => response.data)
}

const getUserPost = async (id:number):Promise<{posts: IPosts[]}> => {
    return await axiosUsers.get('/users/' + id + '/posts').then((response) => response.data)
}

const getPostComments = async (id:number):Promise<{posts: IComments[]}> => {
    return await axiosUsers.get('/posts/' + id + '/comments').then((response) => response.data)
}

export {getAllUsers, getUserPost, getPostComments}