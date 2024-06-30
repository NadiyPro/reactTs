import axios from "axios";

let axiosUsers = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type':'application/json'}
})

const getAllUsers = () => {
    return axiosUsers.get('/users').then((response) => response.data)
}
const getUserPost = (id:number) => {
    return axiosUsers.get('/posts' + '/user/' + id).then((response) => response.data)
}

export {getAllUsers, getUserPost}