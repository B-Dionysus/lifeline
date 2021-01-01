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

    
    function addTag(tagName){
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
             <TagList tagClick={addTag} id={user && user._id} tagArray={tagArray} page={"timeline"}/>
            </div>
            <div className="col-10 events">
                <Timeline id={user && user._id} tagArray={tagArray}/>
            </div>
        </div>
    )
}