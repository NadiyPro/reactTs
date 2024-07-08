import Joi from "joi";

const validatorJoi = Joi.object({
    userId:Joi.string().required().min(1).max(117).messages({
        "string.min":"min is 1",
        "string.max":"max is 117"
    }),
    id:Joi.string().required().min(1).max(117).messages({
        "string.min":"min is 1",
        "string.max":"max is 117"
    }),
    title:Joi.string().required().pattern(/w/s).messages({
        "string.pattern.base":"only chars allowed"
    }),
    body:Joi.string().required().pattern(/w/s).messages({
        "string.pattern.base":"only chars allowed"
    })
})

export default validatorJoi
