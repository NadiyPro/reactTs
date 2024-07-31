import axios from "axios";
import {AuthModule} from "../module/AuthModule";
import {AuthTokenModule} from "../module/AuthTokenModule";
import {CarsModule} from "../module/CarsModule";

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
            console.log(e);
        }
        return !!(response?.data?.access && response?.data?.refresh );
    },

    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<AuthTokenModule>('/auth/refresh', {refresh:refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

const carsService = {
    getCars: async (page: string = '1'):Promise<CarsModule | null> => {
        const response = await axiosInstance.get<CarsModule>('/cars', {params: {page:page}});
        return responce.data;
    }
}

export {authService, carsService}