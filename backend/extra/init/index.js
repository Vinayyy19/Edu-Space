const mongoose = require('mongoose');
const initData = require('./data.js');
const Course = require('../model/courses.js');

main()
  .then(() => {
    console.log("Connected to database and seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error connecting to database or seeding:", err);
    mongoose.connection.close();
  });

async function main() {
  await mongoose.connect(process.env.dburl);
  await Course.deleteMany({});
  await Course.insertMany(initData.data);
}
