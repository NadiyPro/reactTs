import Joi from "joi";

const validatorJoi = Joi.object({
    userId:Joi.number().min(1).max(117).required().messages({
        "number.min":"min is 1 number",
        "number.max":"max is 117 number"
    }),
    title:Joi.string().min(5).max(250).required().messages({
        "string.empty":"only chars allowed",
        "string.min":"min is 5 allowed",
        "string.max":"max is 117 allowed"
    }),
    body:Joi.string().min(5).max(250).required().messages({
        "string.empty":"only chars allowed",
        "string.min":"min is 5 allowed",
        "string.max":"max is 117 allowed"
    })
})
export default validatorJoi
