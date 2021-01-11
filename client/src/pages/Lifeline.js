import React, {useContext, useState} from "react";
import Timeline from "../components/Timeline";
import AuthContext from "../context/auth/authContext";
import TagList from "../components/TagList";
import "../css/events.css"
import "../css/tag.css"
export default function Lifeline(){
    
    const [tagArray, setTagArray] = useState([]);
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    // To filter the events, the user can click on on of the tags on the left-hand side of the screen
    function addTag(tagName){
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
      // If no user is logged in, by deault load the following (currently set to Abraham Lincoln)
      let userId;
      let tempName="Abraham Lincoln"
      if(!user) {userId ="5ff3b31590c73f4b98009673"; }
      else userId=user._id;
    return(
        <div className="row">            
            <div className="col-2 tag-filter-bar">
             <h3 className="user-name">{user ? user.name : tempName}</h3>
             <TagList tagClick={addTag} id={userId} tagArray={tagArray} page={"timeline"}/>
            </div>
            <div className="col-10 events">
                <Timeline id={userId} tagArray={tagArray}/>
            </div>
        </div>
    )
}