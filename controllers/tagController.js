const db = require('../models/Tag');

module.exports = {    
    updateTags: async function(req, res){    
        console.log(`Updating tags...`);
        let success=await updateATag(req.body.tags, req.body.userId, 0);
        res.json({"Success":success});
    },
};

function updateATag(tagArray, userId, index){
    let tagObj={"userId":userId, "tag":tagArray[index]};

    console.log(tagObj);
    db.updateOne(tagObj, tagObj, {upsert:true}, (err, data)=>{
        if(err) {console.error(`Error saving tags: ${err}`);}
        else{ console.log("Added!");}
        if(index===tagArray.length-1) return true;
        else updateATag(tagArray,userId, index+1);
    });
}


