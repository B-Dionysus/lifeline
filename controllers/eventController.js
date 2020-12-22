const db = require('../models/Event');
module.exports = {    
    findAll: function(req, res){ 
        db.find({userId:req.body.userId}, (err, data)=>{
           if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data)
        })
    },
    create: function(req, res){
        console.log(req.body)
        db.create(req.body, (err, data)=>{
            console.error(err);            
            if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data);
        })
    }
};


