import axios from "axios";
import {IUsers} from "../module/IUsers";
import {IPosts} from "../module/IPosts";

let axiosUsers = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type':'application/json'}
})

const getAllUsers = async ():Promise<{users: IUsers[]}> => {
    return await axiosUsers.get('/users').then((response) => response.data)
}

const getUserPost = async (id:number):Promise<{posts: IPosts[]}> => {
    return await axiosUsers.get('/users/' + id + '/posts').then((response) => response.data)
}

export {getAllUsers, getUserPost}