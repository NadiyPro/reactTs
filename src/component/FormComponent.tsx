import React from 'react';
import {useForm} from "react-hook-form";
import IPosts from "../module/IPosts";
import {joiResolver} from "@hookform/resolvers/joi";
import validatorJoi from "../validator/validator";

const FormComponent = () => {
    const {handleSubmit,register, formState: {errors, isValid}} = useForm<IPosts>({mode:'all', resolver:joiResolver(validatorJoi)})
    const registerHandle = (value:IPosts) => {
        console.log(value)
    }
    return (
        <div>
            <form onClick={handleSubmit(registerHandle)}>
                <label>
                    Please write your user id
                    <input {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
                <label>
                    <input {...register('id')}/>
                    {errors.id && <div>{errors.id.message}</div>}
                </label>
                <label>
                    Please write the title of the post
                    <input {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
                <label>
                    Please write your post
                    <input {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
                    <button disabled={!isValid}>Click</button>
            </form>
        </div>
    );
};

export default FormComponent;