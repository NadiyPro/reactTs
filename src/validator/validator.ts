import Joi from "joi";

const validatorJoi = Joi.object({
    userId:{},
    id:{},
    title:{},
    body:{}
})