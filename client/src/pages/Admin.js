import React, {useState, useContext} from "react";
import API from "../utils/API";
import NavBar from "../components/NavBar";
import AuthContext from "../context/auth/authContext";


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
    API.createEvent(event)
    .then(res=>{
        console.log(res);
        
    })
}


export default function Test(){
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    let id;
    console.log(user);
    if(user)console.log(user._id);
    if(user) id=user._id;
    let today = new Date().toISOString().substr(0, 10);
    return(
    <>        
      <NavBar />
      <form id="newEvent" onSubmit={saveEvent}>
          <input hidden defaultValue={id} id="userId" />
        <div><label htmlFor="">Event Name:</label> <input autoComplete="on" autoFocus required type="text" id="title" name="title" /> <label htmlFor="">Private?</label> <input type="checkbox" default="unchecked" id="private"/></div>
        <div><label htmlFor="">Start Date:</label> <input defaultValue={today} type="date" required id="startDate" /> <label htmlFor="">End Date:</label> <input type="date" id="endDate" /></div>
        <div><textarea rows="4" cols="60" placeholder="Event description" id="description" /></div>
        <div><label htmlFor="">Tags:</label> <input type="text" id="tags" required size="55" placeholder="Seperate with commas"/> </div>
        <div><input type="submit"/> </div>
      </form>
      
    </>
    );
}
/*----------------------------------------------------------------
  userId: {type: Number, required:true},
  startDate:{type: Number, required:true},
  endDate: Number,
  desc: String,
  title: String,
  tags:[String],
  private: Boolean

*/