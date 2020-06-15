// require express and router
const express = require('express');
const detailedHabbitRouter = express.Router();

//import controllers
const detailedHabbitController = require('../controllers/detailedHabbitController');

//for updating the status of a habit
detailedHabbitRouter.use('/change',(req,res,next)=>{
    return detailedHabbitController.change(req,res);
});

//for showing the past week details of the habit
detailedHabbitRouter.use('/',(req,res,next)=>{
    return detailedHabbitController.details(req,res);
});

module.exports = detailedHabbitRouter;