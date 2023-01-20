const validate = (schema, Inputs) =>{
    return schema.validateAsync(Inputs,{
        abortEarly:false
    })
}; 

module.exports=validate;