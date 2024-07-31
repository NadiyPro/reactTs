import React, {useEffect, useState} from 'react';
import CarsComponent from "../component/CarsComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import {authService, carsService} from "../servise/api.servise";
import PaginatedComponent from "../component/PaginatedComponent";
import {CarsModule} from "../module/CarsModule";
import {AxiosError} from "axios";

const CarsPage = () => {
    const navigator = useNavigate();
    const [query, setQuery] = useSearchParams({page: '1'});
    const [carPaginated, setCarPaginated] = useState<CarsModule>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    });
    useEffect(() => {
        const getCarsDate = async () => {
            try {
                const response = await  carsService.getCars(query.get('page') || '1');
                if(response){
                    setCarPaginated(response)
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if(axiosError && axiosError?.response?.status === 401){
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigator ('/')
                    }

                    const response = await carsService.getCars(query.get('page') || '1');
                    if(response){
                        setCarPaginated(response);
                    }
                }
            }
        }
        getCarsDate();
        }, [query]);

    return (
        <div>
            <CarsComponent cars={carPaginated.items}/>
            <PaginatedComponent next={carPaginated.next} prev={carPaginated.prev}/>
        </div>
    );
};

export default CarsPage;