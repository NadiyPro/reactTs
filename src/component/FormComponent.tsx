import React from 'react';
import {useForm} from "react-hook-form";

interface IPosts {
    id: number
    title: string
    body: string
    userId: number
}
const FormComponent = () => {
    const {handleSubmit,register} = useForm<IPosts>()
    const registerHandle = (value:IPosts) => {
        console.log(value)
    }
    return (
        <div>
            <form onClick={handleSubmit(registerHandle)}>
                <input {...register('userId')}/>
                <input {...register('id')}/>
                <input {...register('title')}/>
                <input {...register('body')}/>
                <button>Click</button>
            </form>
        </div>
    );
};

export default FormComponent;