const db = require('../models/Event');
const mongoose = require('mongoose');
module.exports = {    
    findAll: function(req, res){ 
        console.log(req.body);
        
        // Load every event from the provided user id, except for ones where "archived" is set top true (we've deleted those)
        req.body.archived={$ne:true};
        db.find(req.body, null,{sort:{startDate:1}}, (err, data)=>{
            console.log(data);

           if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data)
        })
    },
    findByTag: function(req, res){ 
         console.log(req.body);
        let searchTags=req.body.tagArray.join("|");
        // searchTags=`${searchTags}`;
        console.log(searchTags);
        // Load every event from the provided user id, except for ones where "archived" is set top true (we've deleted those)
        req.body.archived={$ne:true};
        db.find({userId:req.body.userId, archived:{$ne:true}, private:{$ne:true}, tags:{$regex:searchTags}}, null,{sort:{startDate:1}}, (err, data)=>{
           if(err) 
                res.status(500).json({ msg: err });  
            else if(data.length===0) res.status(204).json(data);  // Status 204: Request succeeded, but there is no content
            else {
                // console.log(data);
                res.json(data)
            }
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
        let filter={};
        filter._id=new mongoose.mongo.ObjectId();
        if(req.body.eventId) filter={"_id":req.body.eventId};
        else delete req.body.eventId;
        if(req.body.endDate){
            let end=new Date(req.body.endDate);
            let start=new Date(req.body.startDate);
            let diffDate=(end-start)/1000/60/60/24;
            req.body.howManyDays=diffDate;
        }
        else req.body.howManyDays=0;
        db.findOneAndUpdate(filter, req.body, {upsert:true, new:true}, (err, data)=>{
            if(err){
                console.log(err);
                res.status(500).json({ msg: err });           
            }  
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


