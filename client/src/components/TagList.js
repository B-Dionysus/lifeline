import React, {useState, useEffect} from "react";
import API from "../utils/API";
export default function EventList(props){

    const [tags, setTags] = useState([]);
    let id=props.id;
    useEffect(() => {        
       if(id) loadTags(id)
    }, [id]);
 
    function loadTags(id) {
        API.getTags({userId:id})
        .then(res => {
            setTags(res.data);
            
        })
        .catch(err => console.log(err));
    };
return(
    <div className="col-12 tag-list" id="tag-list">
    <h5 className={"tag-header-"+props.page}>Tags:</h5>
    {
        // For the tags, check to see if the tag name is in props.tagArray. If it is, then 
        // add a class to it to show tha the tag is currently active
        // Er, it's very ungainly, but we also use this component in event input screen, which
        // doesn't have a tagArray. So we need to account for that as well by checking to make sure it exists
        tags.map(tag=>(
            <span key={tag.tag} className={"tag-"+props.page+" "+(props.tagArray && props.tagArray.indexOf(tag.tag)!==-1 ? "active-tag" : "")} onClick={()=>props.tagClick(tag.tag)}>{tag.tag} </span>
        ))}
    </div>
    )
};