const express = require("express");
const router = express.Router();

const usersModel = require("../../model/users.model");
const userValidation = require("../../validation/user.validation");

{/*to show all the users that were created in the db*/}
router.get("/", async(req, res)=>{
    try{
        const data = await usersModel.selectAllUsers();
        res.json(data);
       
    }
    catch(err){
        res.status(400).json({error:err});
    }
});

router.post("/", async (req, res)=>{
    try{
       const validatedValue = await userValidation.validateNewUserSchema(req.body);
       const newUser = await usersModel.createNewUser(validatedValue);
       res.status(201).json({msg:"Added successfully!!"}); 
    }catch(err){
            res.status(400).json({err});
    }
});

router.patch("/", async (req, res)=>{
    try{
        const validatedValues = await userValidation.validateupdateUserSchema(req.body);
        const userData = await usersModel.updateUserById(validatedValues.id, validatedValues.firstName,
            validatedValues. lastName, validatedValues.userName, validatedValues.password,
            validatedValues.age, validatedValues.isAdmin);
         res.json({msg:"updated successfully!!"});

    }catch(err){
        console.log(err);
       res.status(400).json({err});
    }
});

router.delete("/:id", async (req, res)=>{
    try{
        const validatedValue = await userValidation.validateDeleteUserSchemaById(req.params);
        const userData = await usersModel.deleteUserById(validatedValue.id);
    }catch(err){
        res.status(400).json({err});
    }
});

module.exports = router;