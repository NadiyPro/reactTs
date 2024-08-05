import {AuthModule} from "../module/AuthModule";
import {AuthTokenModule} from "../module/AuthTokenModule";
import {CarsModule} from "../module/CarsModule";
import axios from "axios";
import {retrieveLocalStorage} from "./retriveLocalStorage";

let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'

});
axiosInstance.interceptors.request.use(request => {
    if(localStorage.getItem('tokenPair') && request.url !== '/auth' && request.url !== '/auth/refresh')
        request.headers.set('Authorization', 'Bearer' + retrieveLocalStorage<AuthTokenModule>('tokenPair').access);
        return request;
});

const authService = {
    authentication: async (authData: AuthModule): Promise<boolean> => {
      const response = await axiosInstance.post<AuthTokenModule>('/auth', authData);
      localStorage.setItem('tokenPair', JSON.stringify(response.data));
      return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async () => {
        const refreshToken = retrieveLocalStorage<AuthTokenModule>('tokenPair').refresh;
        const response = await axiosInstance.post<AuthTokenModule>('/auth/refresh', {refresh:refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

const carsService = {
    getCars: async (page: string = '1'): Promise<CarsModule | null> => {
        const response = await axiosInstance.get<CarsModule>('/cars', {params:{page: page}});
        return response.data;

    }
}

export {authService, carsService}