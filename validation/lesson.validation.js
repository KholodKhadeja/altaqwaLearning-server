const Joi=require("Joi");
const validate = require ("./validate");

const newLessonSchema = Joi.object({
    lessonName:Joi.string().required().min(5).trim(),
    youtubeUrl:Joi.string().regex(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/),
    pdfLink:Joi.string().required(),
    pdfDesc:Joi.string().required().min(5).trim(),
    vocalLink: Joi.string().required(),
    vocalDesc: Joi.string().required().min(5).trim(),
});

const updateLessonSchema = Joi.object({
    id:Joi.string().length(24).hex().required().trim().allow(""),
    lessonName:Joi.string().required().min(5).trim(),
    youtubeUrl:Joi.string().regex(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/),
    pdfLink:Joi.string().required(),
    pdfDesc:Joi.string().required().min(5).trim(),
    vocalLink: Joi.string().required(),
    vocalDesc: Joi.string().required().min(5).trim(),
});

const deleteLessonSchemaById = Joi.object({
id: Joi.string().length(24).hex().required().trim(),
});

const validateNewLessonSchema = (lessonData) =>{
    return validate(newLessonSchema, lessonData);
}

const validateUpdateLessonSchema = (lessonData) =>{
return validate(updateLessonSchema, lessonData);
}

const validateDeleteLessonSchemaById = (lessonData) =>{
return validate(deleteLessonSchemaById, lessonData);
}

module.exports={
 validateNewLessonSchema,
 validateUpdateLessonSchema,
 validateDeleteLessonSchemaById,
}
