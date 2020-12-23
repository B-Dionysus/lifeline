import React, {useContext} from "react";
import API from "../utils/API";
import AuthContext from "../context/auth/authContext";
import InputForm from "../components/InputForm";
import EventList from "../components/EventList";
import TagList from "../components/TagList";
import './admin.css';

function editEvent(e){  
  let id=e.target.dataset.id;
  API.loadEvent(id)
  .then((res)=>{
    let form=document.getElementById("newEvent");    
    form.private.value=res.data.private;
    form.title.value=res.data.title;
    form.startDate.value=res.data.startDate.substring(0,10);
    if(res.data.endDate) 
      form.endDate.value=res.data.endDate.substring(0,10);
    form.description.value=res.data.desc;
    form.tags.value=res.data.tags;
    form.userId.value=res.data.userId;
    form.eventId.value=res.data._id;
    console.log(`Set eventId to : ${form.eventId.value}`);
    
  })
}
function saveEvent(e){
    e.preventDefault();
    let event={};
    event.private=e.target.private.checked;
    event.title=e.target.title.value;
    event.startDate=e.target.startDate.value;
    event.endDate=e.target.endDate.value;
    event.desc=e.target.description.value;
    event.tags=e.target.tags.value.split(",");
    event.userId=e.target.userId.value;
    event.eventId=e.target.eventId.value;
    API.createEvent(event)
    .then(res=>{
      if(res.status===200){
        console.log("Successfully saved.");
        API.updateTags(event)
        .then(res=>{
          console.log(`Tags: ${res.success}`);
        });
        // Optimization notes: really, there should be a global context for the Event and Tag states,
        // Which would be altered here.
        window.location.reload(false);      
      }
      else{
        console.log(`Error saving event! ${res}`);    
      }
    })
}

function addTag(tagName){
  let tagInput=document.getElementById("newEvent");
  tagInput.tags.value+=tagName.trim()+", ";
}
export default function Admin(){
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    let today = new Date().toISOString().substr(0, 10);
    return(
    <>        
    <div className="container mt-3 main">
      <div className="row">
        <div className="col-7">
          <div className="row d-flex align-items-start input-form">
            <InputForm id={user && user._id} saveEvent={saveEvent} today={today}/>
          </div>
          <div className="row tag-box">
            <TagList addTag={addTag} id={user && user._id} />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-4 event-list"><EventList id={user && user._id} edit={editEvent}/></div>
      </div>
    </div>
    </>
    );
}