import React, {useContext, useState, useEffect} from "react";
import Timeline from "../components/Timeline";
import AuthContext from "../context/auth/authContext";
import TagList from "../components/TagList";
import API from "../utils/API";
import "../css/events.css"
import "../css/tag.css"
export default function Lifeline(){
    
    const [tagArray, setTagArray] = useState([]);
    const [displayName, setDisplayName] = useState("Abraham Lincoln");
    const [displayId, setDisplayId] = useState("5ff3b31590c73f4b98009673");
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    let userId;
    var tempName;
    useEffect(() => {    
        let temp="";
        // If the userId is passed via the params, then that is what we'll use
        if(temp=document.location.search.split("=")[1]);
        // If not, then if the user if logged in, we will use their userId
        else if(user) temp=user._id;
        // If no one is logged in, and no id was passed via the params, we can just use Abraham Lincoln!
        else temp="5ff3b31590c73f4b98009673";
        setDisplayId(temp);
        getUserName(temp);
    },[document.location.search]);

    function getUserName(userId){  
        API.getName({"_id":userId})
        .then(res => {
            tempName=res.data.name
            setDisplayName(tempName);
        })
        .catch(err => console.log(err));
    };
    // To filter the events, the user can click on on of the tags on the left-hand side of the screen
    function addTag(tagName){      // If no user is logged in, by deault load the following (currently set to Abraham Lincoln)

        // Move the description box out of the way
        let desc=document.getElementById("description-box");
        desc.style.top="0";
        desc.style.left="0";
        desc.style.display="none";
        tagName=tagName.trim();
        // Copy the state into a new array
        let temp=[...tagArray];
        // Check to see if the tag is already there
        let i=temp.indexOf(tagName);
        // If it isn't already in the state, add it
        if(i===-1)temp.push(tagName);
        // But if it is in the state already, remove it
        else temp.splice(i,1);
        // Copy the temp state back into the real state
        setTagArray(temp);    
      }

    return(
        <div className="row">            
            <div className="col-2 tag-filter-bar">
             <h3 className="user-name">{displayName}</h3>
             <TagList tagClick={addTag} id={displayId} tagArray={tagArray} page={"timeline"}/>
            </div>
            <div className="col-10 events">
                <Timeline id={displayId} tagArray={tagArray}/>
            </div>
        </div>
    )
}