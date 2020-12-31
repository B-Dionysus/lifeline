import React from "react";
export default function InputForm(props){
function updateEndDateMin(e){
    // Got to make sure the user doesn't enter an end date that's before the start date.
    // Because causality.
    document.getElementById("endDate").min=e.target.value
}
return(
    <div className="col-12">
        <form id="newEvent" onSubmit={props.saveEvent}>
        <input hidden defaultValue={props.id} id="userId" />
        <input hidden defaultValue={props.eventId} id="eventId" />
        <div><label htmlFor="">Event Name:</label> <input className="form-control" autoComplete="on" autoFocus required type="text" id="title" name="title" /> <label htmlFor="">
        Private?</label> <input type="checkbox" default={props.private} id="private"/></div>
        <div><label htmlFor="">Start Date:</label> <input className="form-control" onChange={updateEndDateMin} defaultValue={props.startDate} type="date" required id="startDate" /> 
        <label htmlFor="">End Date:</label> <input min={props.startDate} className="form-control" type="date" id="endDate" /></div>
        <div><textarea rows="4" cols="60" className="form-control" placeholder="Event description" id="description" /></div>
        <div><label htmlFor="">Tags:</label> <input className="form-control" type="text" id="tags" required size="55" placeholder="Seperate with commas"/> </div>
        <div><input type="submit"/> </div>
        </form>
    </div>
    )
}