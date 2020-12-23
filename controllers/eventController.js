const db = require('../models/Event');
module.exports = {    
    findAll: function(req, res){ 
        // Load every event from the provided user id, except for ones where "archived" is set top true (we've deleted those)
        db.find({userId:req.body.userId, archived:{$ne:true}}, null,{sort:{startDate:1}}, (err, data)=>{
           if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data)
        })
    },
    findOne: function(req, res){
        
        db.findOne({_id:req.params.id}, (err, data)=>{
            console.log(data);
            if(err) 
              res.status(500).json({ msg: err });             
            else res.json(data)
        })
    },
    create: function(req, res){
        db.updateOne({"_id":req.body.eventId}, req.body, {upsert:true}, (err, data)=>{
            console.error(err);            
            if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data);
        })
    },
    delete: function (req, res){
        db.updateOne({_id:req.body.id},{"archived":true}, (err, data)=>{
            if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data)
        })
    }
};


