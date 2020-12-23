const db = require('../models/Tag');

module.exports = {    
    updateTags: async function(req, res){    
        console.log(`Updating tags...`);
        
        let success=await updateATag(req.body.tags, req.body.userId, 0);
        res.json({"Success":success});
    },
    findAll: function(req, res){ 
        db.find({userId:req.body.userId}, (err, data)=>{
           if(err) 
                res.status(500).json({ msg: err });             
            else res.json(data)
        })
    },
};

function updateATag(tagArray, userId, index){
    let tagObj={"userId":userId, "tag":tagArray[index].trim()};

    console.log(tagObj);
    // This should totally be optimized. I think there's a way to just use updateMany, and then delete the duplicates?
    // Ideally there would be a way to upsert updateMany, but I don't think that's possible.
    if(tagObj.tag.length>0){
        db.updateOne(tagObj, tagObj, {upsert:true}, (err, data)=>{
            if(err) {console.error(`Error saving tags: ${err}`);}
            else{ console.log("Added!");}
            if(index===tagArray.length-1) return {"success":true};
            else updateATag(tagArray,userId, index+1);
        });
    }
}


