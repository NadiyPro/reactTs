import Joi from "joi";

const validatorJoi = Joi.object({
    userId:Joi.number().min(1).max(117).required().messages({
        "number.min":"min is 1",
        "number.max":"max is 117"
    }),
    id:Joi.number().min(1).max(117).required().messages({
        "number.min":"min is 1",
        "number.max":"max is 117"
    }),
    title:Joi.string().min(5).max(250).required().messages({
        "string.empty.base":"only chars allowed",
        "string.min":"min is 5 allowed",
        "string.max.base":"max is 117"
    }),
    body:Joi.string().min(5).max(250).required().messages({
        "string.empty.base":"only chars allowed",
        "string.min":"min is 5 allowed",
        "string.max.base":"max is 117"
    })
})

export default validatorJoi
