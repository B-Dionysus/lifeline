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

return(
    <ul>
    {
        events.map(event=>(
            <li key={event._id}>{event.title}</li>
        ))}
    </ul>
    )
};