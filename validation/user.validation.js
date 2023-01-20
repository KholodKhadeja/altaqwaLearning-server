const Joi=require("Joi");
const validate = require ("./validate");
const ageNum = require("../enums/ageEnum");

const newUserSchema = Joi.object({
    firstName:Joi.string().required().min(5).max(30).trim(),
    lastName:Joi.string().required().min(5).max(30).trim(),
    userName:Joi.string().required().min(5).max(100),
    password:Joi.string().required(),
    age:Joi.string().valid(...ageNum),
    isAdmin: Joi.boolean().required(),
}); 

const updateUserSchema = Joi.object({
    id:Joi.string().length(24).hex().required().trim().allow(""),
    firstName:Joi.string().required().min(5).max(30).trim(),
    lastName:Joi.string().required().min(5).max(30).trim(),
    userName:Joi.string().required().min(5).max(100),
    password:Joi.string().required(),
    age:Joi.string().valid(...ageNum),
    isAdmin:Joi.boolean().required(),
})

const deleteUserSchemaById = Joi.object({
    id: Joi.string().length(24).hex().required().trim(),
    });

const validateNewUserSchema = (userData) =>{
        return validate(newUserSchema, userData);
 }

const validateupdateUserSchema = (userData) =>{
    return validate(updateUserSchema, userData);
}

const validateDeleteUserSchemaById = (userData) =>{
  return validate(deleteUserSchemaById, userData);
}

 module.exports={
    validateDeleteUserSchemaById,
    validateNewUserSchema,
    validateupdateUserSchema,
 }
    