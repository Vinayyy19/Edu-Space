const express = require('express');
const path = require("path");
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();
const engine = require('ejs-mate');
const ExpressError = require('../extra/expressError.js');
const Course = require('../extra/model/courses.js');

main().then(()=>{console.log("Connected to database")})
.catch(err=> console.log(err));
async function main() {
    await mongoose.connect(process.env.dburl);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../frontend/views/pages'));
app.use(express.static(path.join(__dirname, '../../frontend/public')));


app.get("/home", async(req, res) => {
    try{
        const courses = await Course.find({});
        res.render("home", {courses});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/login", (req, res) => {
    res.render("admin-login-page");
});

app.get("/enroll/:id", async(req, res) => {
    try{
        const courseId = Number(req.params.id);
        const course = await Course.findOne({id:courseId});
        if(!course){
            return res.status(404).send("Course not found");
        }
        res.render("enroll", {course});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.all("*",(req,res,next)=>{
    console.log("Page not found, requested url:", req.url);
    next( new ExpressError(404,"Page Not Found"));
  })

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
