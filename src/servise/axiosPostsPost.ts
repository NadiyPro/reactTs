import axios from "axios";
import IPosts from "../module/IPosts";

const registerPost = (value:IPosts) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: value.title,
                body: value.body,
                userId: value.userId
    })
        .then((response) => console.log(response.data))
}
export default registerPost