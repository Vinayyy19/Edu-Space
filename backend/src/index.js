const express = require('express');
const path = require("path");
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();

main().then(()=>{console.log("Connected to database")})
.catch(err=> console.log(err));
async function main() {
    console.log(process.env.dburl);
    await mongoose.connect(process.env.dburl);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../frontend/views'));


app.get("/home", (req, res) => {
    res.render("homepage");
});

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
