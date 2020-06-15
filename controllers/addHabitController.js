//importing DB model
const Habbit = require('../models/habbit');

//to ass new habits
module.exports.addHabit = (req,res)=>{

    let temp = req.body;

    Habbit.create({
        habbit: temp.habbit,
        done: [0,0,0,0,0,0,0]
    });

    return res.redirect('/index');
};