//importing the DB model
const Habbit = require('../models/habbit');

//for showling the list of all habits
module.exports.allHabits = (req,res)=>{

    let arr;
    Habbit.find({},(err,list)=>{
        res.render('index',{a:list});
    });
};