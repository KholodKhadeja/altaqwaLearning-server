const express = require("express");
const router = express.Router();
const lessonsModel = require("../../model/lessonsData.model");
const lessonsValidation = require("../../validation/lesson.validation");


{/*to show all the lessons that were created in the db*/}
router.get("/", async(req, res)=>{
    try{
        const data = await lessonsModel.selectAllLessons();
        res.json(data);
    }
    catch(err){
        res.status(400).json({error:err});
    }
});

router.post("/", async (req, res)=>{
    try{
       const validatedValue = await lessonsValidation.validateNewLessonSchema(req.body);
       const newLesson = await lessonsModel.createNewLesson(validatedValue);
       res.status(201).json(newLesson);
    }catch(err){
            res.status(400).json({error:err});
    }
});

router.patch("/", async (req, res)=>{
    try{
        const validatedValues = await lessonsValidation.validateUpdateLessonSchema(req.body);
        const lessonData = await lessonsModel.updateLessonById(validatedValues.id, validatedValues.lessonName,
            validatedValues.youtubeUrl, validatedValues.pdfLink, validatedValues.pdfDesc,
            validatedValues.vocalLink, validatedValues.vocalDesc);
         res.json({msg:"updated successfully!!"});
    }catch(err){
       res.status(400).json({err});
    }
});

router.delete("/:id", async (req, res)=>{
    try{
        const validatedValue = await lessonsValidation.validateDeleteLessonSchemaById(req.params);
        const lessonData = await lessonsModel.deleteLessonById(validatedValue.id);
    }catch(err){
        res.status(400).json({err});
    }
});

module.exports = router;