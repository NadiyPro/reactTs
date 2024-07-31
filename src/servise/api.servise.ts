import {AuthModule} from "../module/AuthModule";
import {AuthTokenModule} from "../module/AuthTokenModule";
import {CarsModule} from "../module/CarsModule";
import retrieveLocalStorage from "./retriveLocalStorage";
import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});
axiosInstance.interceptors.request.use((request:any) => {
    if(localStorage.getItem('tokenPair') && request.url !== '/auth' && request.url !== '/auth/refresh'){
        request.headers.set('Authorization', 'Bearer' + retrieveLocalStorage<AuthTokenModule>('tokenPair').access);
        return request;
    }
})

const authService = {
    authentication: async (authData:AuthModule):Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<AuthTokenModule>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))
        }catch (e){
            console.log(e);
        }
        return !!(response?.data?.access && response?.data?.refresh );
    },

    refresh: async () => {
        const refreshToken = retrieveLocalStorage<AuthTokenModule>('tokenPair').refresh;
        const response = await axiosInstance.post<AuthTokenModule>('/auth/refresh', {refresh:refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

const carsService = {
    getCars: async () => {
        const response = await axiosInstance.get<CarsModule>('/cars');
        console.log(response)
    }
}

export {authService, carsService}