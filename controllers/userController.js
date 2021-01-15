const db = require('../models/Users');
// const mongoose = require('mongoose');

module.exports = {    
    findName: function(req, res){ 
        db.find(req.body,(err, data)=>{
           if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data[0])
        })
    }
}

