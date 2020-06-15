//importing DB model
const Habbit = require('../models/habbit');

// for showing the past week details of the habit
module.exports.details = (req,res)=>{

    let currentHabbit = req.originalUrl.substring(10);
    currentHabbit =  decodeURIComponent(currentHabbit);
    let history;
    Habbit.findOne({habbit:currentHabbit},(err,list)=>{
        if(err)
        {
            console.log("error : "+err);
            return;
        }

        if(list!=null){
        return res.render('detailed',{
            name: currentHabbit,
            a: list.done
        });}
    });
};

//for changing the status of the habit on a particular day
module.exports.change = (req,res)=>{

    let name = req.originalUrl.substring(17,req.originalUrl.length-4);
    let id = req.originalUrl.substring(req.originalUrl.length-3,req.originalUrl.length-2);
    let status = req.originalUrl.substring(req.originalUrl.length-1);
    let newStatus;
    if(status==0)
        newStatus = 1;
    if(status==1)
        newStatus = 2;
    if(status==2)
        newStatus = 0;
    
    Habbit.findOne({habbit:name},(err,list)=>{
    if(err)
    {
        console.log("error : "+err);
        return;
    }
        
    if(list!=null){
        list.done[id] = newStatus;
        list.markModified('done');
        list.save();
    }
    });
    
    res.redirect('back');
}