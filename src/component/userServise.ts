import axios, {AxiosResponse} from "axios";

let axiosUsers = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type':'application/json'}
})

const getAllUsers = async () => {
    return await axiosUsers.get('/users').then((response) => response.data)
}
const getUserPost = async (id:number) => {
    return await axiosUsers.get('/users/' + id + '/posts').then((response) => response.data)
}

export {getAllUsers, getUserPost}