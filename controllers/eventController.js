const db = require('../models/Event');
let userId=1;
module.exports = {    
    findAll: function(req, res){    
        
        
        db.find({userId:userId}, (err, data)=>{
            
            
            if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data)
        })
    }
};


