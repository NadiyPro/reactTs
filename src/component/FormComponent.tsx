import React from 'react';
import {useForm} from "react-hook-form";
import IPosts from "../module/IPosts";
import {joiResolver} from "@hookform/resolvers/joi";
import validatorJoi from "../validator/validator";

const FormComponent = () => {
    const {handleSubmit,register, formState: {errors, isValid}} =
        useForm<IPosts>({mode:'onSubmit', resolver: joiResolver(validatorJoi)})
    const registerHandle = (value:IPosts) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: value.title,
                body: value.body,
                userId: value.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column"}}>
            <form onClick={handleSubmit(registerHandle)}
                  style={{height: '40vh', width: '10vw',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column"}}>
                <label>
                    Please write your user id
                    <input type={'number'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
                <label>
                    Please enter your post number
                    <input type={'number'} {...register('id')}/>
                    {errors.id && <div>{errors.id.message}</div>}
                </label>
                <label>
                    Please write the title of the post
                    <input type={'text'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
                <label>
                    Please write your post
                    <input type={'text'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
                <button disabled={!isValid}>Click</button>
            </form>
        </div>
    );
};

export default FormComponent;