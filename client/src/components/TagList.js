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
    <h5 className="tag-header">Tags:</h5>
    {
        tags.map(tag=>(
            <span key={tag.tag} className={"tag-"+props.page} onClick={()=>props.tagClick(tag.tag)}>{tag.tag} </span>
        ))}
    </div>
    )
};