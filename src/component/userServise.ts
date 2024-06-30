import axios from "axios";

let axiosUsers = axios.create({
    baseURL: 'https://dummyjson.com/users',
    headers: {'Content-Type':'application/json'}
})

const getAllUsers = () => {
    return axiosUsers.get('').then((response) => response.data)
}
const getUserPost = (id:number) => {
    return axiosUsers.get('/' + id + '/posts').then((response) => response.data)
}

export {getAllUsers, getUserPost}