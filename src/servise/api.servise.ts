import axios from "axios";
import {AuthModule} from "../module/AuthModule";
import {AuthTokenModule} from "../module/AuthTokenModule";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

const authService = {
    authentication: async (authData:AuthModule):Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<AuthTokenModule>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))

        }catch (e){
            console.log(e)
        }
        return !!(response?.data?.access && response?.data?.refresh )
    }
}

export {authService}