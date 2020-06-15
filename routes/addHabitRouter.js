// require express and router
const express = require('express');
const addHabitRouter = express.Router();

//import controllers
const addHabitController = require('../controllers/addHabitController');

//for calling addHabitController
addHabitRouter.use('/',(req,res,next)=>{
    return addHabitController.addHabit(req,res);
});

module.exports = addHabitRouter;