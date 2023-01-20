const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const Joi= require("joi");


const lessonSchema = new Schema({
    lessonName:{type:String, required:true},
    youtubeUrl:{type:String},
    pdfLink:{type:String, required:true},
    pdfDesc:{type:String, required:true},
    vocalLink: {type:String},
    vocalDesc: {type:String},
});

const Lesson = mongoose.model("lessons", lessonSchema);

const selectAllLessons = () =>{
    return Lesson.find({});
};

const createNewLesson = (lessonData) => {
    const lesson = new Lesson (lessonData);
    return lesson.save();
}

const updateLessonById = (id, lessonName, youtubeUrl, pdfLink, pdfDesc, vocalLink, vocalDesc)=>{
return Lesson.findByIdAndUpdate(id,{
    lessonName, youtubeUrl, pdfLink, pdfDesc, vocalLink, vocalDesc});
};

const deleteLessonById = (id)=>{
    return Lesson.findByIdAndDelete(id);
}


module.exports={selectAllLessons,
    createNewLesson, 
    updateLessonById, 
    deleteLessonById};