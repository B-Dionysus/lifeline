import React, {useState, useEffect} from "react";
import API from "../utils/API";
export default function EventList(props){

    const [events, setEvents] = useState([]);
    var id=props.id;
    useEffect(() => {        
       if(id) loadEvents(id)
    }, [id]);

    function loadEvents(id) {
        API.getEvents({userId:id})
        .then(res => {
            setEvents(res.data);
            
        })
        .catch(err => console.log(err));
    };
function deleteEvent(e){
    let id=e.target.dataset.id;
    let eventDiv=e.currentTarget.parentElement.parentElement.parentElement;
    API.deleteEvent({"id":id})
    .then(res=>{
        console.log(res);
        eventDiv.style.display="none";    
    })    
}
return(
    <div>
    {
        events.map(event=>(
            <div className="event" key={event._id}>
                <div className="row event-header">
                    <div className="col-9">
                        {event.startDate.substring(0,10)}
                    </div>
                    <div className="col-3">
                    <i onClick={deleteEvent} data-id={event._id} className="fas fa-trash-alt"></i>
                    </div>
                </div>
                <div className="row event-desc">
                    <div className="col-3">
                        <i onClick={props.edit} data-id={event._id} className="fas fa-edit"></i>
                    </div>
                    <div className="col-9">
                        {event.title}
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
};