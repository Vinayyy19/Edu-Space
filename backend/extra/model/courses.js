const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    courseTitle: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

const Course = mongoose.model("course", courseSchema);
module.exports = Course;