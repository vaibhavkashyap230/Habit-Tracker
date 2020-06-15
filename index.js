//set port, import express & get bodyParser
const port = 8000;
const express = require('express');
const bodyParser = require('body-parser');

// for using DB
const db = require('./config/mongoose');

//create express appliaction
const app = express();

// link static files
app.use(express.static("./assets"));
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set('view engine','ejs');

//import all the Routers
const addHabitRouter = require('./routes/addHabitRouter');
const detailedHabitRouter = require('./routes/detailedHabitRouter');
const indexRouter = require('./routes/indexRouter');

// sending requests to respective Routers
app.use('/add',addHabitRouter);
app.use('/detailed',detailedHabitRouter);
app.use('/index',indexRouter);

// if no Appropriate path is found
app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Kahan aa gaye bhai?<h1>')
});

// adding listener
app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('The server is up at Port : '+port);
});