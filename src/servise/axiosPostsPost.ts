import axios from "axios";
import IPosts from "../module/IPosts";



const axiosPostsPost = function () {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        params: {
            title: 'value.title',
            body: 'value.body',
            userId: 'value.userId',
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then((response) => console.log(response.data))
}

export default axiosPostsPost