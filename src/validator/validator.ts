import Joi from "joi";

const validatorJoi = Joi.object({
    userId:Joi.string().min(1).max(117).required().messages({
        'string.min.base':'min is 1',
        'string.max.base':'max is 117'
    }),
    id:Joi.string().min(1).max(117).required().messages({
        "string.min.base":"min is 1",
        "string.max.base":"max is 117"
    }),
    title:Joi.string().required().messages({
        "string.empty":"only chars allowed"
    }),
    body:Joi.string().required().messages({
        "string.empty":"only chars allowed"
    })
})

export default validatorJoi
