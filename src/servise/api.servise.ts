import axios from "axios";
import {AuthModule} from "../module/AuthModule";
import {AuthTokenModule} from "../module/AuthTokenModule";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

const authService = {
    authentication: async (authData:AuthModule) => {
        let response;
        try {
            response = await axiosInstance.post<AuthTokenModule>('/auth', authData);
            console.log(response)

        }catch (e){
            console.log(e)
        }
    }
}

export {authService}