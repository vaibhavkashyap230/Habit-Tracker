// require express and router
const express = require('express');
const indexRouter = express.Router();

//import controllers
const indexController = require('../controllers/indexController');

// for showling the list of all habits
indexRouter.use('/',(req,res,next)=>{
    return indexController.allHabits(req,res);
});

module.exports = indexRouter;